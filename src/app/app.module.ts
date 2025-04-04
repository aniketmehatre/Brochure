import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './landingpage/home/home.component';
import { AboutComponent } from './landingpage/about/about.component';
import { SucessComponent } from './landingpage/sucess/sucess.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { CareerSupportComponent } from './landingpage/career-support/career-support.component';
import { CarouselModule } from 'primeng/carousel';
import { ContantBtnComponent } from './landingpage/contant-btn/contant-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SucessComponent,
    FooterComponent,
    CareerSupportComponent,
    ContantBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
