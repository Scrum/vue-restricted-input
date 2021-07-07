import test from 'ava';
import {mount} from '@vue/test-utils';
import {VueRestrictedInputDirective} from '../src';

test('should run this canary test', t => {
  const wrapper = mount({
    template: '<input>'
  }, {
    global: {
      directives: {
        mask: VueRestrictedInputDirective
      }
    }
  });
  t.is(wrapper.html(), '<input>');
});

test('should update model value after directive bind', t => {
  const wrapper = mount({
    data: () => ({mask: '{{9999}} {{9999}}', value: '11112011'}),
    template: '<input v-mask="mask" :value="value">'
  }, {
    global: {
      directives: {
        mask: VueRestrictedInputDirective
      }
    }
  });

  t.is(wrapper.vm.$el.value, '1111 2011');
});

test('should update model value when input value changes', async t => {
  const wrapper = mount({
    data: () => ({mask: '{{9999}} {{9999}}', value: undefined}),
    template: '<input v-mask="mask" :value="value">'
  }, {
    global: {
      directives: {
        mask: VueRestrictedInputDirective
      }
    }
  });
  await wrapper.find('input').setValue('11112011')
  t.is(wrapper.vm.$el.value, '1111 2011');
});

test('should update model value when pattern changes', async t => {
  const wrapper = mount({
    data: () => ({mask: '{{9999}} {{9999}}', value: '11111111'}),
    template: '<input v-mask="mask" :value="value">'
  }, {
    global: {
      directives: {
        mask: VueRestrictedInputDirective
      }
    }
  });

  await wrapper.setData({ mask: '{{99}} {{99}} {{99}} {{99}}'});
  t.is(wrapper.vm.$el.value, '11 11 11 11');
  
});
