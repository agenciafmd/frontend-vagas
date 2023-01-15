import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeLPgModule } from './home/home-lp-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [CommonModule, HomeLPgModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
