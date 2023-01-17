import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeLPgModule } from './home/home-lp-routing.module';
import { FormComponent } from './form/form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { IvyCarouselModule } from 'angular-responsive-carousel2';

@NgModule({
  declarations: [HomeComponent, FormComponent, PokemonListComponent],
  imports: [
    CommonModule,
    HomeLPgModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbModalModule,
    IvyCarouselModule,
  ],
})
export class HomeModule {}
