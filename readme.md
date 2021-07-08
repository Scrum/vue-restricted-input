# vue-restricted-input

> Input mask for vue.js based on [credit-card-input-mask](https://github.com/Scrum/credit-card-input-mask)

[![vue.js](https://img.shields.io/static/v1?label=Vue.js&message=3&color=4FC08D&style=flat-square&logo=vue.js&logoColor=ffffff)](https://vuejs.org/)[![node](https://img.shields.io/node/v/vue-restricted-input.svg?style=flat-square)]()[![npm version](https://img.shields.io/npm/v/vue-restricted-input.svg?style=flat-square)](https://www.npmjs.com/package/vue-restricted-input)[![XO code style](https://badgen.net/xo/status/chalk?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/Scrum/vue-restricted-input.svg?style=flat-square)](https://coveralls.io/r/Scrum/vue-restricted-input)

[![npm downloads](https://img.shields.io/npm/dm/vue-restricted-input.svg?style=flat-square)](https://www.npmjs.com/package/vue-restricted-input)[![npm](https://img.shields.io/npm/dt/vue-restricted-input.svg?style=flat-square)](https://www.npmjs.com/package/vue-restricted-input)

## Why ?
[credit-card-input-mask](https://github.com/Scrum/credit-card-input-mask) perfect work with carriage position, fast.

## Install

```bash
$ npm install vue-restricted-input 
```

> **Note:** This project is compatible with node v12+

## Usage

***`main.ts`***
```javascript
import { createApp } from 'vue';
import {VueRestrictedInputDirective} from 'vue-restricted-input';

import App from './App.vue';

const app = createApp(App);

// As a directive
app.directive('mask', VueRestrictedInputDirective);
```

***`App.vue`***
```vue
<template>
  <input type="text" v-mask="mask" :value="value">
</template>

<script setup>
  import {ref} from 'vue';

  const value = ref('11111111');
  const mask = ref('{{9999}} {{9999}}');
</script>
```

## Related

- [credit-card-input-mask](https://github.com/Scrum/credit-card-input-mask) - Allow restricted character sets in `input` elements.
