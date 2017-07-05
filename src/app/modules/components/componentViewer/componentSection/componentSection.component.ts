import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'component-section',
  templateUrl: './componentSection.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ComponentSectionComponent {

    @Input() section: any;
    @Input() component: any;
}
