import { Component, ViewEncapsulation } from '@angular/core';

import { ComponentsService } from '../componentsService';

@Component({
  selector: 'components',
  templateUrl: './componentsHome.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ComponentsHomeComponent {

  componentList: any;

    constructor(
        private componentsService: ComponentsService
    ) { }

    ngOnInit() {
        this.loadComponentList()
    }

    loadComponentList() {
        this.componentsService.getComponentList()
            .subscribe( 
                cl => this.componentList = cl
            );
    }

}
