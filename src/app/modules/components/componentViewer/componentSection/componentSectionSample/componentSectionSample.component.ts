import { Component, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { ComponentsService } from '../../../componentsService';

@Component({
    selector: 'component-section-sample',
    templateUrl: './componentSectionSample.component.html',
    encapsulation: ViewEncapsulation.None //,
    //directives: [Codeblock, Haml]
})
export class ComponentSectionSampleComponent {

    category: string;
    componentId: string;

    @Input() section: any;
    @Input() component: any;

    code: string;
    codeSample: any;
    codeData: any;

    contentMDPath: any = null;

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private componentsService: ComponentsService,
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.category = this.route.snapshot.params['category'];
        this.componentId = this.route.snapshot.params['id'];

        this.loadComponentSampleCode();
        this.instrumentSection();
    }

    ngAfterViewInit() {        
        console.log(this.el);
    }

    loadComponentSampleCode() {
        this.componentsService.getComponentSampleCode(this.category, this.componentId, this.section.markup)
            .subscribe(
                code => this.codeSample = this.sanitizer.bypassSecurityTrustHtml(this.code = code),
                err => console.log(err)
            );
    }

    instrumentSection() {
        this.contentMDPath = '/techne/components/' + this.category + '/' + this.componentId + '/' + this.section.contentMD;
    }

}
