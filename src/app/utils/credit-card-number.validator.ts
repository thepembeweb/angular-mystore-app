import { FormGroup } from '@angular/forms';
import { validateCardNumber } from './common-utils';

export function CreditCardNumberValidator(controlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];

    if (!control) {
      return null;
    }

    if (!validateCardNumber(control.value)) {
      control.setErrors({ creditCardNumberValidator: true });
    } else {
      control.setErrors(null);
    }

    return null;
  };
}
