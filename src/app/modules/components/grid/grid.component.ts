import { Component } from '@angular/core';

@Component({
    selector: 'tn-grid',
    templateUrl: './grid.component.html'
})
export class GridComponent {
    gridColumns: number = 10;
    gridRows: number = 10;
    gridCells = [];

    constructor() {
        for (var i = 0; i < 100; i++) {
            this.gridCells.push(
                { type: 'empty', gridIndex: i  }
            );
        }
    }

}

