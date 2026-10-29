const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const context = vm.createContext({window:{}, document:{documentElement:{},addEventListener(){}}, COMPONENTS:[], MutationObserver:class{observe(){}},setInterval(){},matchMedia(){return {matches:false,addEventListener(){}}}});
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../docs/live-components.js'),'utf8'), context);
const lab = context.window.LiveLab;

test('60 live experiments have unique IDs, six meaningful families and valid stages', () => {
  assert.equal(lab.catalog.length, 60);
  assert.equal(new Set(lab.catalog.map(component => component.id)).size, 60);
  assert.equal(new Set(lab.catalog.map(component => component.family)).size, 6);
  for (const component of lab.catalog) {
    for (const level of [0, 50, 100]) {
      const html = lab.renderStage(component,{level,tick:17,selected:4,alternate:true,trigger:2});
      assert.ok(html.length > 250, component.id);
      assert.ok(!/NaN|undefined|Infinity/.test(html), component.id+' at '+level);
      assert.ok(html.includes('lv-readout'), component.id);
    }
    const demo = lab.demo(component.id);
    assert.ok(demo.includes('data-live-level'));
    assert.ok(demo.includes('data-live-action="activate"'));
  }
});
