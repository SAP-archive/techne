import { Component, ViewEncapsulation } from '@angular/core';
import { ComponentListComponent } from './componentList'

@Component({
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls:[
    '../../../techne/components/layouts/listContent/listContent.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ComponentsComponent {
}
