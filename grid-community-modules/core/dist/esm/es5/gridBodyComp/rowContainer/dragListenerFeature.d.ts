// Type definitions for @ag-grid-community/core v31.0.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../../context/beanStub";
export declare class DragListenerFeature extends BeanStub {
    private rangeService;
    private dragService;
    private eContainer;
    constructor(eContainer: HTMLElement);
    private params;
    private postConstruct;
    private enableFeature;
    private disableFeature;
}
