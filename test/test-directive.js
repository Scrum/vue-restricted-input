import test from 'ava';
import {createLocalVue, mount} from '@vue/test-utils';
import {VueRestrictedInputDirective} from '../src';

let mountWithMask;
test.beforeEach(() => {
  const localVue = createLocalVue();
  localVue.directive('mask', VueRestrictedInputDirective);
  mountWithMask = (argument, options) => mount(argument, {...options, localVue});
});

test('should run this canary test', t => {
  const wrapper = mountWithMask({
    template: '<input />'
  });
  t.true(wrapper.is('input'));
});

test('should update model value after directive bind', t => {
  const wrapper = mountWithMask({
    data: () => ({mask: '{{9999}} {{9999}}', value: '11112011'}),
    template: '<input v-mask="mask" v-model="value"/>'
  });
  t.is(wrapper.vm.$el.value, '1111 2011');
});

test('should update model value when input value changes', async t => {
  const wrapper = mountWithMask({
    data: () => ({mask: '{{9999}} {{9999}}', value: undefined}),
    template: '<input v-mask="mask" v-model="value"/>'
  });
  wrapper.vm.$el.value = '11112011';
  wrapper.trigger('input');
  await wrapper.vm.$nextTick();
  t.is(wrapper.vm.$el.value, '1111 2011');
});

