import RestrictedInput from 'restricted-input';

export default {
  inserted(element, binding) {
    element.masked = new RestrictedInput({
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
