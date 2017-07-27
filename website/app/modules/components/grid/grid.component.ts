import { Component } from '@angular/core';

@Component({
    selector: 'tn-grid',
    templateUrl: './grid.component.html'
})
export class GridComponent {
    gridColumns: number = 12;
    gridRows: number = 12;
    gridCells: any[] = [];

    gridIsRandom: boolean = true;

    gridEmptyComponent: any = { component: { type: 'empty' } };

    gridComponents: any[] = [
        [
            { width: 2, height: 1, component: { type: this.gridIsRandom ? 'random' : 'empty' } },
            { width: 8, height: 1, component: { type: 'chart' } },
            { width: 2, height: 1, component: { type: 'single-metric' } }
        ],
        [
            { width: 8, height: 1, component: { type: 'chart' } },
            { width: 2, height: 1, component: { type: 'single-metric' } }
        ]
    ];

    constructor() {
        if (this.gridIsRandom)
            this.randomizeGrid();
        else
            this.assignComponents();
    }

    randomizeGrid() {
        this.gridCells = [];

        var sum: number = 0;
        var currentCellWidth: number = 0;
        var currentRowHeight = 0;

        for (var i = 0; i < this.gridRows; i++) {
            currentRowHeight = 1; //Math.floor(Math.random() * 5) + 1;
            this.gridCells.push([]);
            while (sum < this.gridColumns) {
                currentCellWidth = Math.floor(Math.random() * ((this.gridColumns - 1) - sum)) + 1;
                sum +=  currentCellWidth;
                this.gridCells[i].push(
                    { width: currentCellWidth, height: currentRowHeight }
                );
            }
            sum = 0;
        }

        this.assignRandomComponents();
    }

    assignRandomComponents() {
        for (let i in this.gridCells) 
            for (let j in this.gridCells[i]) {
                this.gridCells[i][j].component = this.gridEmptyComponent.component;
            }
    }

    assignComponents() {
        this.gridCells = this.gridComponents;
    }

}

