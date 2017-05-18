import { Component } from '@angular/core';

@Component({
    selector: 'tn-grid',
    templateUrl: './grid.component.html'
})
export class GridComponent {
    gridColumns: number = 12;
    gridRows: number = 10;
    gridCells = [];

    gridComponents = [
        { type: 'random' }
    ]

    constructor() {
        /*
        for (var i = 0; i < (this.gridColumns * this.gridColumns); i++) {
            this.gridCells.push(
                { gridIndex: i + 1 }
            );
        }
        */

        this.randomizeGrid();
    }

    randomizeGrid() {
        this.gridCells = [];

        var sum: number = 0;
        var currentCellWidth: number = 0;
        var currentRowHeight = 0;

        for (var i = 0; i < this.gridRows; i++) {
            currentRowHeight = Math.floor(Math.random() * 5) + 1;
            while (sum < this.gridColumns) {
                if (sum < this.gridColumns - 1)
                    currentCellWidth = Math.floor(Math.random() * ((this.gridColumns - 2) - sum)) + 2;
                else
                    currentCellWidth = 1;
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

