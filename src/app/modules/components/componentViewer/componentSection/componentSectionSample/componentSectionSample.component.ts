import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { ComponentsService } from '../../../componentsService';

@Component({
    selector: 'component-section-sample',
    templateUrl: './componentSectionSample.component.html',
    styleUrls: [
        '../../../../../../techne/components/layouts/sections/sections.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class ComponentSectionSampleComponent {

    category: string;
    componentId: string;

    @Input() section: any;
    @Input() component: any;

    code: string;
    codeSample: any;

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private componentsService: ComponentsService
    ) { }

    ngOnInit() {
        this.category = this.route.snapshot.params['category'];
        this.componentId = this.route.snapshot.params['id'];

        this.loadComponentSampleCode()
    }

    loadComponentSampleCode() {
        this.componentsService.getComponentSampleCode(this.category, this.componentId, this.section.markup)
            .subscribe(
            code => this.codeSample = this.sanitizer.bypassSecurityTrustHtml(this.code = code),
            err => console.log(err)
            );
    }

}
