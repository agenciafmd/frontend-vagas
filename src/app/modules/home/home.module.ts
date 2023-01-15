
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeLPgModule } from './home-lp-routing.module';





@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeLPgModule
  
  ],
})
export class HomeModule {}
