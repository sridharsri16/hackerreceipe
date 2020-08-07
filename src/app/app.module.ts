import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackerrecipeComponent } from './hackerrecipe/hackerrecipe.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HackerrecipedetailsComponent } from './hackerrecipe/hackerrecipedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HackerrecipeComponent,
    HackerrecipedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
