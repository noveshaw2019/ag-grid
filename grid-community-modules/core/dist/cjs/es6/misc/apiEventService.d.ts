// Type definitions for @ag-grid-community/core v31.0.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../context/beanStub";
export declare class ApiEventService extends BeanStub {
    private syncEventListeners;
    private asyncEventListeners;
    private syncGlobalEventListeners;
    private asyncGlobalEventListeners;
    addEventListener(eventType: string, listener: Function): void;
    addGlobalListener(listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    removeGlobalListener(listener: Function): void;
    private destroyEventListeners;
    private destroyGlobalListeners;
    protected destroy(): void;
}
