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
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
  });
}
