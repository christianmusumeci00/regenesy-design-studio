const test = require('node:test');
const assert = require('node:assert/strict');
const model = require('../docs/grid-model.js');

test('all sectors have 512 unique, finite operational records', () => {
  for (const sector of ['idrico', 'gas', 'elettrico']) {
    const rows = model.generate(sector);
    assert.equal(rows.length, 512);
    assert.equal(new Set(rows.map(row => row.id)).size, 512);
    for (const row of rows) {
      assert.ok(Number.isFinite(row.consumption));
      assert.ok(row.budget > 0);
      assert.ok(row.health >= 0 && row.health <= 100);
      assert.ok(row.signal >= 0 && row.signal <= 100);
      assert.ok(['Basso', 'Medio', 'Alto'].includes(row.risk));
    }
  }
});

test('budget and acknowledgements affect operational calculations', () => {
  const row = {consumption: 200, budget: 100, signal: 100, battery: 100, status: 'Online', ack: false};
  model.derive(row);
  assert.equal(row.delta, 100);
  assert.equal(row.risk, 'Alto');
  assert.equal(model.summarize([row]).critical, 1);
  row.ack = true;
  assert.equal(model.summarize([row]).critical, 0);
  row.budget = 250;
  model.derive(row);
  assert.equal(row.delta, -20);
  assert.equal(row.risk, 'Basso');
});

test('aggregates include every filtered row and reconcile district totals', () => {
  const filtered = model.generate('idrico').filter(row => row.signal < 65);
  const summary = model.summarize(filtered);
  assert.equal(summary.count, filtered.length);
  assert.ok(summary.count > 25);
  assert.equal(summary.consumption, filtered.reduce((total, row) => total + row.consumption, 0));
  assert.ok(Math.abs(summary.districts.reduce((total, group) => total + group.value, 0) - summary.consumption) < 1e-7);
  assert.equal(model.summarize([]).health, 0);
  assert.equal(model.summarize([]).consumption, 0);
});

test('browser patches reject unsupported values and fields', () => {
  const patch = model.validPatch({consumption: -10, budget: Infinity, owner: 'Unknown', note: 'x'.repeat(500), ack: true, signal: 5});
  assert.deepEqual(Object.keys(patch).sort(), ['ack', 'note']);
  assert.equal(patch.note.length, 280);
  assert.equal(model.validPatch({consumption: 12.5}).consumption, 12.5);
  assert.deepEqual(model.validPatch(null), {});
});
