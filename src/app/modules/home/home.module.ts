import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeLPgModule } from './home-lp-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeLPgModule, SharedModule],
})
export class HomeModule {}
