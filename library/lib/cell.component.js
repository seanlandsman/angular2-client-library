"use strict";
var core_1 = require("@angular/core");
var Cell = (function () {
    function Cell(viewContainerRef, cfr) {
        this.viewContainerRef = viewContainerRef;
        this.cfr = cfr;
    }
    Cell.prototype.ngOnInit = function () {
        var compFactory = this.cfr.resolveComponentFactory(this.componentType);
        this.viewContainerRef.createComponent(compFactory);
    };
    Cell.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'grid-cell',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    Cell.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
        { type: core_1.ComponentFactoryResolver, },
    ]; };
    Cell.propDecorators = {
        'componentType': [{ type: core_1.Input },],
    };
    return Cell;
}());
exports.Cell = Cell;
//# sourceMappingURL=cell.component.js.map