import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'component-section',
  templateUrl: './componentSection.component.html',
  styleUrls: [
      '../../../../../techne/components/layouts/sections/sections.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ComponentSectionComponent {

    @Input() section: any;

}
