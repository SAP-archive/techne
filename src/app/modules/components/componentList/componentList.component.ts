import { Component, OnInit } from '@angular/core';

import { ComponentsService } from '../componentsService';

@Component({
    selector: 'component-list',
    templateUrl: './componentList.component.html'
})
export class ComponentListComponent implements OnInit {

    componentsList: any;

    constructor(private componentsService: ComponentsService) { }

    ngOnInit() {
        this.loadComponentList()
    }

    loadComponentList() {
        this.componentsService.get()
            .subscribe( 
                cl => this.componentsList = cl,
                err => console.log(err)
            );
    }

}
