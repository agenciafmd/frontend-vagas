import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CardSlideComponent } from './components/card-slide/card-slide.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContactComponent,
    HeaderComponent,
    CardsComponent,
    FooterComponent,
    CardSlideComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
