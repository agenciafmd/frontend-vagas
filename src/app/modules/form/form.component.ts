import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import getLandingPageFormGroup from 'src/app/shared/form-group/landing-page-form';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() newsletter = getLandingPageFormGroup(this.formBuilder);
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(public formBuilder: FormBuilder, private modalService: MdbModalService) {}

  ngOnInit(): void {}

  get name() {
    return this.newsletter.get('name')!;
  }

  get email() {
    return this.newsletter.get('email')!;
  }

  submit() {
    if (this.newsletter.invalid) {
      return;
    }
    this.openModal();
  }
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { title: 'Custom title' },
    });
  }
}
