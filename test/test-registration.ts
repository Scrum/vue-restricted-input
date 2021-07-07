import test from 'ava';
import {VueRestrictedInputDirective} from '../src';

test('named export `VueRestrictedInputDirective` should be an object', t => {
  t.true(VueRestrictedInputDirective instanceof Object);
});
