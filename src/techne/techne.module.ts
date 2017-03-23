import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
    MainNavigationComponent, 
    SideNavigationComponent,
    ButtonComponent
} from './components';

@NgModule({
    declarations: [
        ButtonComponent,
        MainNavigationComponent,
        SideNavigationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        ButtonComponent,
        MainNavigationComponent,
        SideNavigationComponent
    ],
    providers: [],
})
export class TechneModule { }
