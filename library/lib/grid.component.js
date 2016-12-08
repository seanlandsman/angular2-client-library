"use strict";
var core_1 = require("@angular/core");
var Grid = (function () {
    function Grid() {
        this.cellComponentTypes = [];
    }
    Grid.prototype.addDynamicCellComponent = function (selectedComponentType) {
        this.cellComponentTypes.push(selectedComponentType);
    };
    Grid.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'grid-component',
                    template: "\n        <div class=\"row\" *ngFor=\"let cellComponentType of cellComponentTypes\">\n            <div class=\"col-lg-12\">\n                <grid-cell [componentType]=\"cellComponentType\"></grid-cell>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Grid.ctorParameters = function () { return []; };
    Grid.propDecorators = {
        'componentTypes': [{ type: core_1.Input },],
    };
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.component.js.map