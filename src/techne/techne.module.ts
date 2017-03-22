import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    ButtonComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    ButtonComponent,
    NavComponent
  ],
  providers: [],
})
export class TechneModule { }
