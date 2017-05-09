import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { GuidesComponent } from './modules/guides/guides.component';
import { ComponentsComponent, ComponentsHomeComponent, ComponentViewerComponent } from './modules/components';
import { GridComponent } from './modules/components/grid/grid.component';
import { Four0FourComponent } from './modules/four0four/four0four.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'guides', component: GuidesComponent },
    {
        path: 'components', component: ComponentsComponent,
        children: [
            { path: ':category/:id', component: ComponentViewerComponent }
        ]
    },
    { path: 'grid', component: GridComponent },
    { path: '**', component: Four0FourComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
