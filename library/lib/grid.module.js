"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var grid_component_1 = require("./grid.component");
var cell_component_1 = require("./cell.component");
var GridModule = (function () {
    function GridModule() {
    }
    GridModule.withComponents = function (components) {
        return {
            ngModule: GridModule,
            providers: [
                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    };
    GridModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        grid_component_1.Grid,
                        cell_component_1.Cell
                    ],
                    exports: [
                        grid_component_1.Grid
                    ]
                },] },
    ];
    /** @nocollapse */
    GridModule.ctorParameters = function () { return []; };
    return GridModule;
}());
exports.GridModule = GridModule;
//# sourceMappingURL=grid.module.js.map