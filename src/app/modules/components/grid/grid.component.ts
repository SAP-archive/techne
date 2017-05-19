import { Component } from '@angular/core';

@Component({
    selector: 'tn-grid',
    templateUrl: './grid.component.html'
})
export class GridComponent {
    gridColumns: number = 12;
    gridRows: number = 6;
    gridCells = [];

    gridComponents = [
        { type: 'random' }
    ]

    constructor() {
        this.randomizeGrid();
    }

    randomizeGrid() {
        this.gridCells = [];

        var sum: number = 0;
        var currentCellWidth: number = 0;
        var currentRowHeight = 0;

        for (var i = 0; i < this.gridRows; i++) {
            currentRowHeight = 1; //Math.floor(Math.random() * 5) + 1;
            while (sum < this.gridColumns) {
                currentCellWidth = Math.floor(Math.random() * ((this.gridColumns - 1) - sum)) + 1;
                sum +=  currentCellWidth;
                this.gridCells.push(
                    { width: currentCellWidth, height: currentRowHeight }
                );
            }
            sum = 0;
        }

        this.assignComponents();
    }

    assignComponents() {
        for (let i in this.gridCells) {
            this.gridCells[i].component = this.gridComponents[i] || { type: 'empty' };
        }
    }
}

