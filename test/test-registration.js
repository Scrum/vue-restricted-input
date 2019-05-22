import test from 'ava';
import {createLocalVue} from '@vue/test-utils';
import VueRestrictedInput, {VueRestrictedInputDirective, VueRestrictedInputPlugin} from '../src';

let Vue;
test.beforeEach(() => {
  Vue = createLocalVue();
});

test('default export should be a function', t => {
  t.true(VueRestrictedInput instanceof Function);
});

test('named export `VueRestrictedInputPlugin` should be a function', t => {
  t.true(VueRestrictedInputPlugin instanceof Function);
});

test('named export `VueRestrictedInputDirective` should be an object', t => {
  t.true(VueRestrictedInputDirective instanceof Object);
});

test('should register `v-mask` directive', t => {
  t.is(Vue.options.directives.mask, undefined);
  Vue.use(VueRestrictedInput);
  t.true(Vue.options.directives.mask instanceof Object);
});

test('should allow to use exposed directive with custom name', t => {
  t.is(Vue.options.directives.fakeMask, undefined);
  Vue.directive('fakeMask', VueRestrictedInputDirective);
  t.true(Vue.options.directives.fakeMask instanceof Object);
});

