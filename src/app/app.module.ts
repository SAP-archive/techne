import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './modules/navigation/navigation.component';
import { HomeComponent } from './modules/home/home.component';
import { GuidesComponent } from './modules/guides/guides.component';
import { ComponentsComponent } from './modules/components/components.component';

import { Four0FourComponent } from './modules/four0four/four0four.component';


import { TechneModule } from '../techne/techne.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    GuidesComponent,
    ComponentsComponent,

    Four0FourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,

    TechneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
