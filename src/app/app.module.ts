import { HolaModule } from './../../projects/hola/src/lib/hola.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HolaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
