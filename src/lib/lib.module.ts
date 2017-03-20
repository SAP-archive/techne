import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
})
export class LibModule { }
