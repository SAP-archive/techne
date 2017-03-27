import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'component-section-overview',
  templateUrl: './componentSectionOverview.component.html',
  styleUrls: [
      '../../../../../../techne/components/layouts/sections/sections.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ComponentSectionOverviewComponent {

    @Input() section: any;

}
