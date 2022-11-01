import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { PrimeNumbersInputComponent } from './components/prime-numbers-input/prime-numbers-input.component';

import { HomeComponent } from './pages/home';

import { MaryleboneService } from './core/services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimeNumbersInputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MaryleboneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
