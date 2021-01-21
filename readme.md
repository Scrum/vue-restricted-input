# vue-restricted-input

> Input mask for vue.js based on [credit-card-input-mask](https://github.com/Scrum/credit-card-input-mask)

[![Travis Build Status](https://img.shields.io/travis/Scrum/vue-restricted-input/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/vue-restricted-input)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/GitScrum/vue-restricted-input/master.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/GitScrum/vue-restricted-input)[![node](https://img.shields.io/node/v/vue-restricted-input.svg?style=flat-square)]()[![npm version](https://img.shields.io/npm/v/vue-restricted-input.svg?style=flat-square)](https://www.npmjs.com/package/vue-restricted-input)[![Dependency Status](https://david-dm.org/Scrum/vue-restricted-input.svg?style=flat-square)](https://david-dm.org/Scrum/vue-restricted-input)[![XO code style](https://badgen.net/xo/status/chalk?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/Scrum/vue-restricted-input.svg?style=flat-square)](https://coveralls.io/r/Scrum/vue-restricted-input)

[![npm downloads](https://img.shields.io/npm/dm/vue-restricted-input.svg?style=flat-square)](https://www.npmjs.com/package/vue-restricted-input)[![npm](https://img.shields.io/npm/dt/vue-restricted-input.svg?style=flat-square)](https://www.npmjs.com/package/vue-restricted-input)

## Why ?
[credit-card-input-mask](https://github.com/Scrum/credit-card-input-mask) greater support for old browsers, perfect work with carriage position, fast.

## Install

```bash
$ npm install vue-restricted-input 
```

> **Note:** This project is compatible with node v8+

## Usage
### Bundler (Webpack, Rollup)

```javascript
import Vue from 'vue';

// As a plugin
import VueRestrictedInput from 'vue-restricted-input';
Vue.use(VueRestrictedInput);

// Or as a directive
import {VueRestrictedInputDirective} from 'vue-restricted-input';
Vue.directive('mask', VueRestrictedInputDirective);
```

### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-restricted-input/dist/vue-restricted-input.min.js"></script>
<script>
// As a plugin
Vue.use(VueRestrictedInput.VueRestrictedInputPlugin);

// Or as a directive
Vue.directive('mask', VueRestrictedInput.VueRestrictedInputDirective);
</script>
```

## Example
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-restricted-input/dist/vue-restricted-input.min.js"></script>

<div id="app">
    <input type="text" v-mask="mask" v-model="inputVal">
</div>

<script>
Vue.directive('mask', VueRestrictedInput.VueRestrictedInputDirective);

new Vue({
  el: '#app',
  data: {
    mask: '{{9999}} {{9999}}',
    inputVal: '12341234',
  }
})
</script>
```
> <a href="https://jsfiddle.net/Scrum/bs87v4qr/" target="_blank">Demo</a>

## Related

- [credit-card-input-mask](https://github.com/Scrum/credit-card-input-mask) - Allow restricted character sets in `input` elements.
