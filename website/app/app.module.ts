import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './modules/navigation/navigation.component';
import { HomeComponent } from './modules/home/home.component';
import { GuidesComponent } from './modules/guides/guides.component';
import { 
    ComponentsComponent, ComponentsHomeComponent, ComponentListComponent, ComponentViewerComponent, ComponentsService, 
    ComponentSectionComponent, ComponentSectionOverviewComponent, ComponentSectionSampleComponent, ComponentSectionSampleStructureComponent,
    GridComponent } from './modules/components';

import { Four0FourComponent } from './modules/four0four/four0four.component';

import { MarkdownModule } from 'angular2-markdown';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        GuidesComponent,
        ComponentsComponent, ComponentsHomeComponent, ComponentListComponent, ComponentViewerComponent, 
        ComponentSectionComponent, ComponentSectionOverviewComponent, ComponentSectionSampleComponent,
        ComponentSectionSampleStructureComponent,

        GridComponent,

        Four0FourComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        AppRoutingModule,

        MarkdownModule.forRoot(),
        Ng2HandySyntaxHighlighterModule,
        Ng2PageScrollModule.forRoot()
    ],
    providers: [
        ComponentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
