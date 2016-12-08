import { ViewContainerRef, OnInit, ComponentFactoryResolver } from "@angular/core";
export declare class Cell implements OnInit {
    private viewContainerRef;
    private cfr;
    componentType: any;
    constructor(viewContainerRef: ViewContainerRef, cfr: ComponentFactoryResolver);
    ngOnInit(): void;
}
