import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

import { CreditCardNumberValidator } from '../utils/credit-card-number.validator';

@Directive({
  selector: '[creditCardNumberValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CreditCardNumberValidatorDirective,
      multi: true,
    },
  ],
})
export class CreditCardNumberValidatorDirective implements Validator {
  @Input('creditCardNumberValidator') creditCardNumberValidator: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors | null {
    return CreditCardNumberValidator(this.creditCardNumberValidator[0])(
      formGroup
    );
  }
}
