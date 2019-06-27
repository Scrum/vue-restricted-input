import Mask from 'credit-card-input-mask';

export default {
  inserted(element, binding) {
    element.masked = new Mask({
      element,
      pattern: binding.value
    });
  },
  update(element, binding) {
    if (element.masked) {
      element.masked.setPattern(binding.value);
    }
  }
};
