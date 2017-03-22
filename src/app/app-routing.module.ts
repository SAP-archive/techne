import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { GuidesComponent } from './modules/guides/guides.component';
import { ComponentsComponent } from './modules/components/components.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'components', component: ComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
