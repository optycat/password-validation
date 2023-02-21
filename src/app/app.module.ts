import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
