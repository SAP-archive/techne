import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
    NavComponent, 
    ButtonComponent
} from './components';

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
