import { Component, OnInit } from '@angular/core';

import { ComponentsService } from '../componentsService';

@Component({
    selector: 'component-list',
    templateUrl: './componentList.component.html'
})
export class ComponentListComponent implements OnInit {

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
                cl => this.componentList = cl,
                err => console.log(err)
            );
    }

}
