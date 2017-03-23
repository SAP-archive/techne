import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'tn-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent {
  @Input() mainOptions = [
    { label: "option one" },
    { label: "option two" }
  ];
}
