import { Component, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import 'prismjs';

import { ComponentsService } from '../../../componentsService';

@Component({
    selector: 'component-section-structure',
    templateUrl: './componentSectionStructure.component.html',
    styleUrls: ['./componentSectionStructure.component.scss'] 
})
export class ComponentSectionSampleStructureComponent {

    category: string;
    componentId: string;

    structure: any;

    selectedElement: string;
    selectedElementDescriptionUrl: string;

    @Input() section: any;
    @Input() component: any;

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private componentsService: ComponentsService,
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.category = this.route.snapshot.params['category'];
        this.componentId = this.route.snapshot.params['id'];
        this.structure = this.section.structure;
    }

    ngAfterViewInit() {        
    }

    selectElement(element) {
        this.selectedElement = element.id;
        this.selectedElementDescriptionUrl = element.contentMD ? '/data/components/' + this.category + '/' + this.componentId + '/structure/' + element.contentMD : '';
    }

}
