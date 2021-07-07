import { Directive } from 'vue';
import CreditCardInputMask from 'credit-card-input-mask';

const RestrictedInputDirective: Directive = {
  beforeMount(element, binding) {
    element.masked = new CreditCardInputMask({
      element,
      pattern: binding.value
    });
  },
  updated(element, binding) {
    if (element.masked) {
      element.masked.setPattern(binding.value);
    }
  }
};

export default RestrictedInputDirective;
