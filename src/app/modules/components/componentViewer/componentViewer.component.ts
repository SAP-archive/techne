import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ComponentsService } from '../componentsService';

@Component({
    selector: 'component-viewer',
    templateUrl: './componentViewer.component.html',
    styles: [
        'component-viewer { width: 100% }'
    ]
})
export class ComponentViewerComponent implements OnInit {

    category: string;
    componentId: string;

    component: any;
    sections: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,

        private componentsService: ComponentsService
    ) { }

    ngOnInit() {
        this.category = this.route.snapshot.params['category'];
        this.componentId = this.route.snapshot.params['id'];

        this.route.params
            .switchMap(
                (params: Params) => this.componentsService.getComponent(params['category'], params['id'])
            )
            .subscribe(
                cp => {
                    this.component = cp
                    this.sections = this.component.sections;
                },
                err => alert(err)
            );

        //this.loadComponent(this.category, this.componentId);
    }

    loadComponent(category, id: string) {
        this.componentsService.getComponent(category, id)
            .subscribe(
            cp => this.component = cp,
            err => console.log(err)
            );
    }

}
