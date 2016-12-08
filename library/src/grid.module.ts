import {NgModule, ModuleWithProviders,ANALYZE_FOR_ENTRY_COMPONENTS} from "@angular/core";
import {CommonModule} from "@angular/common";

import {Grid} from "./grid.component";
import {Cell} from "./cell.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Grid,
        Cell
    ],
    exports: [
        Grid
    ]
})
export class GridModule {
    static withComponents(components: any[]):ModuleWithProviders {
        return {
            ngModule: GridModule,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ]
        }
    }
}