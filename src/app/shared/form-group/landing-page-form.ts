import { FormBuilder, Validators } from '@angular/forms';

export default function getLandingPageFormGroup(formBuilder: FormBuilder) {
  return formBuilder.group({
    name: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
        updateOn: 'change',
      },
    ],
  });
}
