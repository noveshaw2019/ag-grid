// Type definitions for @ag-grid-community/core v31.0.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ColDef, ColGroupDef } from "../entities/colDef";
export interface IPivotColDefService {
    createColDefsFromFields: (fields: string[]) => (ColDef | ColGroupDef)[];
}
