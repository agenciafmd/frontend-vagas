import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import getLandingPageFormGroup from 'src/app/shared/form-group/landing-page-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() newsletter = getLandingPageFormGroup(this.formBuilder);

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
