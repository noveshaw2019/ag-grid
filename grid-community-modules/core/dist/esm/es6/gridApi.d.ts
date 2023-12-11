// Type definitions for @ag-grid-community/core v31.0.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { AlignedGridsService } from "./alignedGridsService";
import { ColumnApi } from "./columns/columnApi";
import { ApplyColumnStateParams, ColumnState, ISizeColumnsToFitParams } from "./columns/columnModel";
import { Context } from "./context/context";
import { CellPosition } from "./entities/cellPositionUtils";
import { ColDef, ColGroupDef, HeaderLocation, IAggFunc } from "./entities/colDef";
import { Column, ColumnPinnedType } from "./entities/column";
import { ChartRef, DomLayoutType, GetChartToolbarItems, GetContextMenuItems, GetMainMenuItems, GetRowIdFunc, GetServerSideGroupKey, GridOptions, IsApplyServerSideTransaction, IsRowMaster, IsRowSelectable, IsServerSideGroup, RowClassParams, RowGroupingDisplayType, ServerSideGroupLevelParams, UseGroupFooter } from "./entities/gridOptions";
import { GetGroupRowAggParams, GetServerSideGroupLevelParamsParams, InitialGroupOrderComparatorParams, IsFullWidthRowParams, IsServerSideGroupOpenByDefaultParams, NavigateToNextCellParams, NavigateToNextHeaderParams, PaginationNumberFormatterParams, PostProcessPopupParams, PostSortRowsParams, ProcessRowParams, RowHeightParams, TabToNextCellParams, TabToNextHeaderParams } from "./interfaces/iCallbackParams";
import { IRowNode, RowPinnedType } from "./interfaces/iRowNode";
import { AgEvent, ColumnEventType, FilterChangedEventSourceType, SelectionEventSourceType } from "./events";
import { RowDropZoneEvents, RowDropZoneParams } from "./gridBodyComp/rowDragFeature";
import { HeaderPosition } from "./headerRendering/common/headerPosition";
import { CsvExportParams, ProcessCellForExportParams } from "./interfaces/exportParams";
import { ICellEditor } from "./interfaces/iCellEditor";
import { ChartDownloadParams, ChartModel, CloseChartToolPanelParams, CreateCrossFilterChartParams, CreatePivotChartParams, CreateRangeChartParams, GetChartImageDataUrlParams, OpenChartToolPanelParams, UpdateChartParams } from './interfaces/IChartService';
import { ClientSideRowModelStep } from "./interfaces/iClientSideRowModel";
import { IClipboardCopyParams, IClipboardCopyRowsParams } from "./interfaces/iClipboardService";
import { IColumnToolPanel } from "./interfaces/iColumnToolPanel";
import { IDatasource } from "./interfaces/iDatasource";
import { ExcelExportMultipleSheetParams, ExcelExportParams } from "./interfaces/iExcelCreator";
import { IFilter } from "./interfaces/iFilter";
import { IFiltersToolPanel } from "./interfaces/iFiltersToolPanel";
import { CellRange, CellRangeParams } from "./interfaces/IRangeService";
import { IRowModel } from "./interfaces/iRowModel";
import { IServerSideDatasource } from "./interfaces/iServerSideDatasource";
import { RefreshServerSideParams } from "./interfaces/iServerSideRowModel";
import { ServerSideGroupLevelState } from "./interfaces/IServerSideStore";
import { SideBarDef } from "./interfaces/iSideBar";
import { IStatusPanel } from "./interfaces/iStatusPanel";
import { IToolPanel } from "./interfaces/iToolPanel";
import { IViewportDatasource } from "./interfaces/iViewportDatasource";
import { RowDataTransaction } from "./interfaces/rowDataTransaction";
import { RowNodeTransaction } from "./interfaces/rowNodeTransaction";
import { ServerSideTransaction, ServerSideTransactionResult } from "./interfaces/serverSideTransaction";
import { ICellRenderer } from "./rendering/cellRenderers/iCellRenderer";
import { FlashCellsParams, GetCellEditorInstancesParams, GetCellRendererInstancesParams, RedrawRowsParams, RefreshCellsParams } from "./rendering/rowRenderer";
import { IServerSideGroupSelectionState, IServerSideSelectionState } from "./interfaces/iServerSideSelection";
import { DataTypeDefinition } from "./entities/dataType";
import { AdvancedFilterModel } from "./interfaces/advancedFilterModel";
import { LoadSuccessParams } from "./rowNodeCache/rowNodeBlock";
import { IAdvancedFilterBuilderParams } from "./interfaces/iAdvancedFilterBuilderParams";
import { IHeaderColumn } from "./interfaces/iHeaderColumn";
import { ProvidedColumnGroup } from "./entities/providedColumnGroup";
import { ColumnGroup } from "./entities/columnGroup";
import { GridState } from "./interfaces/gridState";
import { ManagedGridOptionKey, ManagedGridOptions } from "./propertyKeys";
export interface DetailGridInfo {
    /**
     * Id of the detail grid, the format is `detail_{ROW-ID}`,
     * where `ROW-ID` is the `id` of the parent row.
     */
    id: string;
    /** Grid api of the detail grid. */
    api?: GridApi;
    /** @deprecated v31 ColumnApi has been deprecated and all methods moved to the api. */
    columnApi?: ColumnApi;
}
export interface StartEditingCellParams {
    /** The row index of the row to start editing */
    rowIndex: number;
    /** The column key of the row to start editing */
    colKey: string | Column;
    /** Set to `'top'` or `'bottom'` to start editing a pinned row */
    rowPinned?: RowPinnedType;
    /** The key to pass to the cell editor */
    key?: string;
}
export declare function unwrapUserComp<T>(comp: T): T;
export declare class GridApi<TData = any> {
    private csvCreator;
    private excelCreator;
    private rowRenderer;
    private navigationService;
    private filterManager;
    private columnModel;
    private selectionService;
    private gos;
    private valueService;
    private alignedGridsService;
    private eventService;
    private pinnedRowModel;
    private context;
    private rowModel;
    private sortController;
    private paginationProxy;
    private focusService;
    private dragAndDropService;
    private rangeService;
    private clipboardService;
    private aggFuncService;
    private menuFactory;
    private contextMenuFactory;
    private valueCache;
    private animationFrameService;
    private statusBarService;
    private chartService;
    private undoRedoService;
    private rowNodeBlockLoader;
    private serverSideTransactionManager;
    private ctrlsService;
    private overlayService;
    private sideBarService?;
    private stateService;
    private expansionService;
    private apiEventService;
    private frameworkOverrides;
    private gridBodyCtrl;
    private clientSideRowModel;
    private infiniteRowModel;
    private serverSideRowModel;
    private detailGridInfoMap;
    private destroyCalled;
    private init;
    /** Used internally by grid. Not intended to be used by the client. Interface may change between releases. */
    __getAlignedGridService(): AlignedGridsService;
    /** Used internally by grid. Not intended to be used by the client. Interface may change between releases. */
    __getContext(): Context;
    /** Returns the `gridId` for the current grid as specified via the gridOptions property `gridId` or the auto assigned grid id if none was provided. */
    getGridId(): string;
    /** Register a detail grid with the master grid when it is created. */
    addDetailGridInfo(id: string, gridInfo: DetailGridInfo): void;
    /** Unregister a detail grid from the master grid when it is destroyed. */
    removeDetailGridInfo(id: string): void;
    /** Returns the `DetailGridInfo` corresponding to the supplied `detailGridId`. */
    getDetailGridInfo(id: string): DetailGridInfo | undefined;
    /** Iterates through each `DetailGridInfo` in the grid and calls the supplied callback on each. */
    forEachDetailGridInfo(callback: (gridInfo: DetailGridInfo, index: number) => void): void;
    /** Similar to `exportDataAsCsv`, except returns the result as a string rather than download it. */
    getDataAsCsv(params?: CsvExportParams): string | undefined;
    /** Downloads a CSV export of the grid's data. */
    exportDataAsCsv(params?: CsvExportParams): void;
    private assertNotExcelMultiSheet;
    /** Similar to `exportDataAsExcel`, except instead of downloading a file, it will return a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) to be processed by the user. */
    getDataAsExcel(params?: ExcelExportParams): string | Blob | undefined;
    /** Downloads an Excel export of the grid's data. */
    exportDataAsExcel(params?: ExcelExportParams): void;
    /** This is method to be used to get the grid's data as a sheet, that will later be exported either by `getMultipleSheetsAsExcel()` or `exportMultipleSheetsAsExcel()`. */
    getSheetDataForExcel(params?: ExcelExportParams): string | undefined;
    /** Similar to `exportMultipleSheetsAsExcel`, except instead of downloading a file, it will return a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) to be processed by the user. */
    getMultipleSheetsAsExcel(params: ExcelExportMultipleSheetParams): Blob | undefined;
    /** Downloads an Excel export of multiple sheets in one file. */
    exportMultipleSheetsAsExcel(params: ExcelExportMultipleSheetParams): void;
    /**
     * Sets an ARIA property in the grid panel (element with `role=\"grid\"`), and removes an ARIA property when the value is null.
     *
     * Example: `api.setGridAriaProperty('label', 'my grid')` will set `aria-label=\"my grid\"`.
     *
     * `api.setGridAriaProperty('label', null)` will remove the `aria-label` attribute from the grid element.
     */
    setGridAriaProperty(property: string, value: string | null): void;
    private logMissingRowModel;
    /** Gets the number of top pinned rows. */
    getPinnedTopRowCount(): number;
    /** Gets the number of bottom pinned rows. */
    getPinnedBottomRowCount(): number;
    /** Gets the top pinned row with the specified index. */
    getPinnedTopRow(index: number): IRowNode | undefined;
    /** Gets the bottom pinned row with the specified index. */
    getPinnedBottomRow(index: number): IRowNode | undefined;
    expireValueCache(): void;
    /**
     * Returns an object with two properties:
     *  - `top`: The top pixel position of the current scroll in the grid
     *  - `bottom`: The bottom pixel position of the current scroll in the grid
     */
    getVerticalPixelRange(): {
        top: number;
        bottom: number;
    };
    /**
     * Returns an object with two properties:
     * - `left`: The left pixel position of the current scroll in the grid
     * - `right`: The right pixel position of the current scroll in the grid
     */
    getHorizontalPixelRange(): {
        left: number;
        right: number;
    };
    /** Performs change detection on all cells, refreshing cells where required. */
    refreshCells(params?: RefreshCellsParams<TData>): void;
    /** Flash rows, columns or individual cells. */
    flashCells(params?: FlashCellsParams<TData>): void;
    /** Remove row(s) from the DOM and recreate them again from scratch. */
    redrawRows(params?: RedrawRowsParams<TData>): void;
    /** Redraws the header. Useful if a column name changes, or something else that changes how the column header is displayed. */
    refreshHeader(): void;
    /** Returns `true` if any filter is set. This includes quick filter, column filter, external filter or advanced filter. */
    isAnyFilterPresent(): boolean;
    /** Returns `true` if any column filter is set, otherwise `false`. */
    isColumnFilterPresent(): boolean;
    /** Returns `true` if the Quick Filter is set, otherwise `false`. */
    isQuickFilterPresent(): boolean;
    /**
     * Returns the row model inside the table.
     * From here you can see the original rows, rows after filter has been applied,
     * rows after aggregation has been applied, and the final set of 'to be displayed' rows.
     */
    getModel(): IRowModel;
    /** Expand or collapse a specific row node, optionally expanding/collapsing all of its parent nodes. */
    setRowNodeExpanded(rowNode: IRowNode, expanded: boolean, expandParents?: boolean): void;
    /**
     * Informs the grid that row group expanded state has changed and it needs to rerender the group nodes.
     * Typically called after updating the row node expanded state explicitly, i.e `rowNode.expanded = false`,
     * across multiple groups and you want to update the grid view in a single rerender instead of on every group change.
     */
    onGroupExpandedOrCollapsed(): void;
    /**
     * Refresh the Client-Side Row Model, executing the grouping, filtering and sorting again.
     * Optionally provide the step you wish the refresh to apply from. Defaults to `everything`.
     */
    refreshClientSideRowModel(step?: ClientSideRowModelStep): any;
    /** Returns `true` when there are no more animation frames left to process. */
    isAnimationFrameQueueEmpty(): boolean;
    flushAllAnimationFrames(): void;
    /**
     * Returns the row node with the given ID.
     * The row node ID is the one you provide from the callback `getRowId(params)`,
     * otherwise the ID is a number (cast as string) auto-generated by the grid when
     * the row data is set.
     */
    getRowNode(id: string): IRowNode<TData> | undefined;
    /**
     * Gets the sizes that various UI elements will be rendered at with the current theme.
     * If you override the row or header height using `gridOptions`, the override value you provided will be returned.
     */
    getSizesForCurrentTheme(): {
        rowHeight: number;
        headerHeight: number;
    };
    /** Expand all groups. */
    expandAll(): void;
    /** Collapse all groups. */
    collapseAll(): void;
    /**
     * Registers a callback to a virtual row.
     * A virtual row is a row that is visually rendered on the screen (rows that are not visible because of the scroll position are not rendered).
     * Unlike normal events, you do not need to unregister rendered row listeners.
     * When the rendered row is removed from the grid, all associated rendered row listeners will also be removed.
     * listen for this event if your `cellRenderer` needs to do cleanup when the row no longer exists.
     */
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    /** Get the current Quick Filter text from the grid, or `undefined` if none is set. */
    getQuickFilter(): string | undefined;
    /** Get the state of the Advanced Filter. Used for saving Advanced Filter state */
    getAdvancedFilterModel(): AdvancedFilterModel | null;
    /** Set the state of the Advanced Filter. Used for restoring Advanced Filter state */
    setAdvancedFilterModel(advancedFilterModel: AdvancedFilterModel | null): void;
    /** Open the Advanced Filter Builder dialog (if enabled). */
    showAdvancedFilterBuilder(): void;
    /**
     * Set all of the provided nodes selection state to the provided value.
     */
    setNodesSelected(params: {
        nodes: IRowNode[];
        newValue: boolean;
        source?: SelectionEventSourceType;
    }): void;
    /**
     * Select all rows, regardless of filtering and rows that are not visible due to grouping being enabled and their groups not expanded.
     * @param source Source property that will appear in the `selectionChanged` event, defaults to `'apiSelectAll'`
     */
    selectAll(source?: SelectionEventSourceType): void;
    /**
     * Clear all row selections, regardless of filtering.
     * @param source Source property that will appear in the `selectionChanged` event, defaults to `'apiSelectAll'`
     */
    deselectAll(source?: SelectionEventSourceType): void;
    /**
     * Select all filtered rows.
     * @param source Source property that will appear in the `selectionChanged` event, defaults to `'apiSelectAllFiltered'`
     */
    selectAllFiltered(source?: SelectionEventSourceType): void;
    /**
     * Clear all filtered selections.
     * @param source Source property that will appear in the `selectionChanged` event, defaults to `'apiSelectAllFiltered'`
     */
    deselectAllFiltered(source?: SelectionEventSourceType): void;
    /**
     * Returns an object containing rules matching the selected rows in the SSRM.
     *
     * If `groupSelectsChildren=false` the returned object will be flat, and will conform to IServerSideSelectionState.
     * If `groupSelectsChildren=true` the returned object will be hierarchical, and will conform to IServerSideGroupSelectionState.
     */
    getServerSideSelectionState(): IServerSideSelectionState | IServerSideGroupSelectionState | null;
    /**
     * Set the rules matching the selected rows in the SSRM.
     *
     * If `groupSelectsChildren=false` the param will be flat, and should conform to IServerSideSelectionState.
     * If `groupSelectsChildren=true` the param will be hierarchical, and should conform to IServerSideGroupSelectionState.
     */
    setServerSideSelectionState(state: IServerSideSelectionState | IServerSideGroupSelectionState): void;
    /**
     * Select all rows on the current page.
     * @param source Source property that will appear in the `selectionChanged` event, defaults to `'apiSelectAllCurrentPage'`
     */
    selectAllOnCurrentPage(source?: SelectionEventSourceType): void;
    /**
     * Clear all filtered on the current page.
     * @param source Source property that will appear in the `selectionChanged` event, defaults to `'apiSelectAllCurrentPage'`
     */
    deselectAllOnCurrentPage(source?: SelectionEventSourceType): void;
    /** Show the 'loading' overlay. */
    showLoadingOverlay(): void;
    /** Show the 'no rows' overlay. */
    showNoRowsOverlay(): void;
    /** Hides the overlay if showing. */
    hideOverlay(): void;
    /**
     * Returns an unsorted list of selected nodes.
     * Getting the underlying node (rather than the data) is useful when working with tree / aggregated data,
     * as the node can be traversed.
     */
    getSelectedNodes(): IRowNode<TData>[];
    /** Returns an unsorted list of selected rows (i.e. row data that you provided). */
    getSelectedRows(): TData[];
    /**
     * Returns a list of all selected nodes at 'best cost', a feature to be used with groups / trees.
     * If a group has all its children selected, then the group appears in the result, but not the children.
     * Designed for use with `'children'` as the group selection type, where groups don't actually appear in the selection normally.
     */
    getBestCostNodeSelection(): IRowNode<TData>[] | undefined;
    /** Retrieve rendered nodes. Due to virtualisation this will contain only the current visible rows and those in the buffer. */
    getRenderedNodes(): IRowNode<TData>[];
    /**
     *  Ensures the column is visible by scrolling the table if needed.
     *
     * This will have no effect before the firstDataRendered event has fired.
     *
     * @param key - The column to ensure visible
     * @param position - Where the column will be positioned.
     * - `auto` - Scrolls the minimum amount to make sure the column is visible.
     * - `start` - Scrolls the column to the start of the viewport.
     * - `middle` - Scrolls the column to the middle of the viewport.
     * - `end` - Scrolls the column to the end of the viewport.
    */
    ensureColumnVisible(key: string | Column, position?: 'auto' | 'start' | 'middle' | 'end'): void;
    /**
     * Vertically scrolls the grid until the provided row index is inside the visible viewport.
     * If a position is provided, the grid will attempt to scroll until the row is at the given position within the viewport.
     * This will have no effect before the firstDataRendered event has fired.
     */
    ensureIndexVisible(index: number, position?: 'top' | 'bottom' | 'middle' | null): void;
    /**
     * Vertically scrolls the grid until the provided row (or a row matching the provided comparator) is inside the visible viewport.
     * If a position is provided, the grid will attempt to scroll until the row is at the given position within the viewport.
     * This will have no effect before the firstDataRendered event has fired.
     */
    ensureNodeVisible(nodeSelector: TData | IRowNode<TData> | ((row: IRowNode<TData>) => boolean), position?: 'top' | 'bottom' | 'middle' | null): void;
    /**
     * Similar to `forEachNode`, except lists all the leaf nodes.
     * This effectively goes through all the data that you provided to the grid before the grid performed any grouping.
     * If using tree data, goes through all the nodes for the data you provided, including nodes that have children,
     * but excluding groups the grid created where gaps were missing in the hierarchy.
     */
    forEachLeafNode(callback: (rowNode: IRowNode<TData>) => void): void;
    /**
     * Iterates through each node (row) in the grid and calls the callback for each node.
     * This works similar to the `forEach` method on a JavaScript array.
     * This is called for every node, ignoring any filtering or sorting applied within the grid.
     * If using the Infinite Row Model, then this gets called for each page loaded in the page cache.
     */
    forEachNode(callback: (rowNode: IRowNode<TData>, index: number) => void, includeFooterNodes?: boolean): void;
    /** Similar to `forEachNode`, except skips any filtered out data. */
    forEachNodeAfterFilter(callback: (rowNode: IRowNode<TData>, index: number) => void): void;
    /** Similar to `forEachNodeAfterFilter`, except the callbacks are called in the order the rows are displayed in the grid. */
    forEachNodeAfterFilterAndSort(callback: (rowNode: IRowNode<TData>, index: number) => void): void;
    /**
     * Returns the filter component instance for a column.
     * `key` can be a string field name or a ColDef object (matches on object reference, useful if field names are not unique).
     * If your filter is created asynchronously, `getFilterInstance` will return `null` so you will need to use the `callback` to access the filter instance instead.
     */
    getFilterInstance<TFilter extends IFilter>(key: string | Column, callback?: (filter: TFilter | null) => void): TFilter | null | undefined;
    /** Destroys a filter. Useful to force a particular filter to be created from scratch again. */
    destroyFilter(key: string | Column): void;
    /** Gets the status panel instance corresponding to the supplied `id`. */
    getStatusPanel<TStatusPanel = IStatusPanel>(key: string): TStatusPanel | undefined;
    getColumnDef<TValue = any>(key: string | Column<TValue>): ColDef<TData, TValue> | null;
    /**
     * Returns the current column definitions.
    */
    getColumnDefs(): (ColDef<TData> | ColGroupDef<TData>)[] | undefined;
    /**
     * Informs the grid that a filter has changed. This is typically called after a filter change through one of the filter APIs.
     * @param source The source of the filter change event. If not specified defaults to `'api'`.
     */
    onFilterChanged(source?: FilterChangedEventSourceType): void;
    /**
     * Gets the grid to act as if the sort was changed.
     * Useful if you update some values and want to get the grid to reorder them according to the new values.
     */
    onSortChanged(): void;
    /**
     * Sets the state of all the column filters. Provide it with what you get from `getFilterModel()` to restore filter state.
     * If inferring cell data types, and row data is provided asynchronously and is yet to be set,
     * the filter model will be applied asynchronously after row data is added.
     * To always perform this synchronously, set `cellDataType = false` on the default column definition,
     * or provide cell data types for every column.
     */
    setFilterModel(model: any): void;
    /** Gets the current state of all the column filters. Used for saving filter state. */
    getFilterModel(): {
        [key: string]: any;
    };
    /** Returns the focused cell (or the last focused cell if the grid lost focus). */
    getFocusedCell(): CellPosition | null;
    /** Clears the focused cell. */
    clearFocusedCell(): void;
    /** Sets the focus to the specified cell. `rowPinned` can be either 'top', 'bottom' or null (for not pinned). */
    setFocusedCell(rowIndex: number, colKey: string | Column, rowPinned?: RowPinnedType): void;
    /** Adds a drop zone outside of the grid where rows can be dropped. */
    addRowDropZone(params: RowDropZoneParams): void;
    /** Removes an external drop zone added by `addRowDropZone`. */
    removeRowDropZone(params: RowDropZoneParams): void;
    /** Returns the `RowDropZoneParams` to be used by another grid's `addRowDropZone` method. */
    getRowDropZoneParams(events?: RowDropZoneEvents): RowDropZoneParams;
    private assertSideBarLoaded;
    /** Returns `true` if the side bar is visible. */
    isSideBarVisible(): boolean;
    /** Show/hide the entire side bar, including any visible panel and the tab buttons. */
    setSideBarVisible(show: boolean): void;
    /** Sets the side bar position relative to the grid. Possible values are `'left'` or `'right'`. */
    setSideBarPosition(position: 'left' | 'right'): void;
    /** Opens a particular tool panel. Provide the ID of the tool panel to open. */
    openToolPanel(key: string): void;
    /** Closes the currently open tool panel (if any). */
    closeToolPanel(): void;
    /** Returns the ID of the currently shown tool panel if any, otherwise `null`. */
    getOpenedToolPanel(): string | null;
    /** Force refresh all tool panels by calling their `refresh` method. */
    refreshToolPanel(): void;
    /** Returns `true` if the tool panel is showing, otherwise `false`. */
    isToolPanelShowing(): boolean;
    getToolPanelInstance(id: 'columns'): IColumnToolPanel | undefined;
    getToolPanelInstance(id: 'filters'): IFiltersToolPanel | undefined;
    getToolPanelInstance<TToolPanel = IToolPanel>(id: string): TToolPanel | undefined;
    /** Returns the current side bar configuration. If a shortcut was used, returns the detailed long form. */
    getSideBar(): SideBarDef | undefined;
    /** Tells the grid to recalculate the row heights. */
    resetRowHeights(): void;
    /**
     * Sets the `rowCount` and `maxRowFound` properties.
     * The second parameter, `maxRowFound`, is optional and if left out, only `rowCount` is set.
     * Set `rowCount` to adjust the height of the vertical scroll.
     * Set `maxRowFound` to enable / disable searching for more rows.
     * Use this method if you add or remove rows into the dataset and need to reset the number of rows or instruct the grid that the entire row count is no longer known.
     */
    setRowCount(rowCount: number, maxRowFound?: boolean): void;
    /** Tells the grid a row height has changed. To be used after calling `rowNode.setRowHeight(newHeight)`. */
    onRowHeightChanged(): void;
    /**
     * Gets the value for a column for a particular `rowNode` (row).
     * This is useful if you want the raw value of a cell e.g. if implementing your own CSV export.
     */
    getValue<TValue = any>(colKey: string | Column<TValue>, rowNode: IRowNode): TValue | null | undefined;
    /**
     * Add an event listener for the specified `eventType`.
     * Works similar to `addEventListener` for a browser DOM element.
     * Listeners will be automatically removed when the grid is destroyed.
     */
    addEventListener(eventType: string, listener: Function): void;
    /**
     * Add an event listener for all event types coming from the grid.
     * Listeners will be automatically removed when the grid is destroyed.
     */
    addGlobalListener(listener: Function): void;
    /** Remove an event listener. */
    removeEventListener(eventType: string, listener: Function): void;
    /** Remove a global event listener. */
    removeGlobalListener(listener: Function): void;
    dispatchEvent(event: AgEvent): void;
    /** Will destroy the grid and release resources. If you are using a framework you do not need to call this, as the grid links in with the framework lifecycle. However if you are using Web Components or native JavaScript, you do need to call this, to avoid a memory leak in your application. */
    destroy(): void;
    /** Returns `true` if the grid has been destroyed. */
    isDestroyed(): boolean;
    /** Reset the Quick Filter cache text on every rowNode. */
    resetQuickFilter(): void;
    /** Returns the list of selected cell ranges. */
    getCellRanges(): CellRange[] | null;
    /** Adds the provided cell range to the selected ranges. */
    addCellRange(params: CellRangeParams): void;
    /** Clears the selected ranges. */
    clearRangeSelection(): void;
    /** Reverts the last cell edit. */
    undoCellEditing(): void;
    /** Re-applies the most recently undone cell edit. */
    redoCellEditing(): void;
    /** Returns current number of available cell edit undo operations. */
    getCurrentUndoSize(): number;
    /** Returns current number of available cell edit redo operations. */
    getCurrentRedoSize(): number;
    /** Returns a list of models with information about the charts that are currently rendered from the grid. */
    getChartModels(): ChartModel[] | undefined;
    /** Returns the `ChartRef` using the supplied `chartId`. */
    getChartRef(chartId: string): ChartRef | undefined;
    /** Returns a base64-encoded image data URL for the referenced chartId. */
    getChartImageDataURL(params: GetChartImageDataUrlParams): string | undefined;
    /** Starts a browser-based image download for the referenced chartId. */
    downloadChart(params: ChartDownloadParams): void;
    /** Open the Chart Tool Panel. */
    openChartToolPanel(params: OpenChartToolPanelParams): void;
    /** Close the Chart Tool Panel. */
    closeChartToolPanel(params: CloseChartToolPanelParams): void;
    /** Used to programmatically create charts from a range. */
    createRangeChart(params: CreateRangeChartParams): ChartRef | undefined;
    /** Used to programmatically create pivot charts from a grid. */
    createPivotChart(params: CreatePivotChartParams): ChartRef | undefined;
    /** Used to programmatically create cross filter charts from a range. */
    createCrossFilterChart(params: CreateCrossFilterChartParams): ChartRef | undefined;
    /** Used to programmatically update a chart. */
    updateChart(params: UpdateChartParams): void;
    /** Restores a chart using the `ChartModel` that was previously obtained from `getChartModels()`. */
    restoreChart(chartModel: ChartModel, chartContainer?: HTMLElement): ChartRef | undefined;
    /** Copies data to clipboard by following the same rules as pressing Ctrl+C. */
    copyToClipboard(params?: IClipboardCopyParams): void;
    /** Cuts data to clipboard by following the same rules as pressing Ctrl+X. */
    cutToClipboard(params?: IClipboardCopyParams): void;
    /** Copies the selected rows to the clipboard. */
    copySelectedRowsToClipboard(params?: IClipboardCopyRowsParams): void;
    /** Copies the selected ranges to the clipboard. */
    copySelectedRangeToClipboard(params?: IClipboardCopyParams): void;
    /** Copies the selected range down, similar to `Ctrl + D` in Excel. */
    copySelectedRangeDown(): void;
    /** Pastes the data from the Clipboard into the focused cell of the grid. If no grid cell is focused, calling this method has no effect. */
    pasteFromClipboard(): void;
    /** Shows the column menu after and positions it relative to the provided button element. Use in conjunction with your own header template. */
    showColumnMenuAfterButtonClick(colKey: string | Column, buttonElement: HTMLElement): void;
    /** Shows the column menu after and positions it relative to the mouse event. Use in conjunction with your own header template. */
    showColumnMenuAfterMouseClick(colKey: string | Column, mouseEvent: MouseEvent | Touch): void;
    /** Hides any visible context menu or column menu. */
    hidePopupMenu(): void;
    /** Navigates the grid focus to the next cell, as if tabbing. */
    tabToNextCell(event?: KeyboardEvent): boolean;
    /** Navigates the grid focus to the previous cell, as if shift-tabbing. */
    tabToPreviousCell(event?: KeyboardEvent): boolean;
    /** Returns the list of active cell renderer instances. */
    getCellRendererInstances(params?: GetCellRendererInstancesParams<TData>): ICellRenderer[];
    /** Returns the list of active cell editor instances. Optionally provide parameters to restrict to certain columns / row nodes. */
    getCellEditorInstances(params?: GetCellEditorInstancesParams<TData>): ICellEditor[];
    /** If the grid is editing, returns back details of the editing cell(s). */
    getEditingCells(): CellPosition[];
    /** If a cell is editing, it stops the editing. Pass `true` if you want to cancel the editing (i.e. don't accept changes). */
    stopEditing(cancel?: boolean): void;
    /** Start editing the provided cell. If another cell is editing, the editing will be stopped in that other cell. */
    startEditingCell(params: StartEditingCellParams): void;
    /** Add an aggregation function with the specified key. */
    addAggFunc(key: string, aggFunc: IAggFunc): void;
    /** Add aggregations function with the specified keys. */
    addAggFuncs(aggFuncs: {
        [key: string]: IAggFunc;
    }): void;
    /** Clears all aggregation functions (including those provided by the grid). */
    clearAggFuncs(): void;
    /** Apply transactions to the server side row model. */
    applyServerSideTransaction(transaction: ServerSideTransaction): ServerSideTransactionResult | undefined;
    /** Batch apply transactions to the server side row model. */
    applyServerSideTransactionAsync(transaction: ServerSideTransaction, callback?: (res: ServerSideTransactionResult) => void): void;
    /**
     * Applies row data to a server side store.
     * New rows will overwrite rows at the same index in the same way as if provided by a datasource success callback.
     *
     * startRow is only applicable when `suppressServerSideInfiniteScroll=true`
    */
    applyServerSideRowData(params: {
        successParams: LoadSuccessParams;
        route?: string[];
        startRow?: number;
    }): void;
    /** Gets all failed server side loads to retry. */
    retryServerSideLoads(): void;
    flushServerSideAsyncTransactions(): void;
    /** Update row data. Pass a transaction object with lists for `add`, `remove` and `update`. */
    applyTransaction(rowDataTransaction: RowDataTransaction<TData>): RowNodeTransaction<TData> | null | undefined;
    /** Same as `applyTransaction` except executes asynchronously for efficiency. */
    applyTransactionAsync(rowDataTransaction: RowDataTransaction<TData>, callback?: (res: RowNodeTransaction<TData>) => void): void;
    /** Executes any remaining asynchronous grid transactions, if any are waiting to be executed. */
    flushAsyncTransactions(): void;
    /**
     * Marks all the currently loaded blocks in the cache for reload.
     * If you have 10 blocks in the cache, all 10 will be marked for reload.
     * The old data will continue to be displayed until the new data is loaded.
     */
    refreshInfiniteCache(): void;
    /**
     * Purges the cache.
     * The grid is then told to refresh. Only the blocks required to display the current data on screen are fetched (typically no more than 2).
     * The grid will display nothing while the new blocks are loaded.
     * Use this to immediately remove the old data from the user.
     */
    purgeInfiniteCache(): void;
    /**
     * Refresh a server-side store level.
     * If you pass no parameters, then the top level store is refreshed.
     * To refresh a child level, pass in the string of keys to get to the desired level.
     * Once the store refresh is complete, the storeRefreshed event is fired.
     */
    refreshServerSide(params?: RefreshServerSideParams): void;
    /** Returns info on all server side group levels. */
    getServerSideGroupLevelState(): ServerSideGroupLevelState[];
    /** The row count defines how many rows the grid allows scrolling to. */
    getInfiniteRowCount(): number | undefined;
    /** Returns `true` if grid allows for scrolling past the last row to load more rows, thus providing infinite scroll. */
    isLastRowIndexKnown(): boolean | undefined;
    /**
     * Returns an object representing the state of the cache. This is useful for debugging and understanding how the cache is working.
     */
    getCacheBlockState(): any;
    /** Get the index of the first displayed row due to scrolling (includes invisible rendered rows in the buffer). */
    getFirstDisplayedRow(): number;
    /** Get the index of the last displayed row due to scrolling (includes invisible rendered rows in the buffer). */
    getLastDisplayedRow(): number;
    /** Returns the displayed `RowNode` at the given `index`. */
    getDisplayedRowAtIndex(index: number): IRowNode<TData> | undefined;
    /** Returns the total number of displayed rows. */
    getDisplayedRowCount(): number;
    /**
     * Returns `true` when the last page is known.
     * This will always be `true` if you are using the Client-Side Row Model for pagination.
     * Returns `false` when the last page is not known; this only happens when using Infinite Row Model.
     */
    paginationIsLastPageFound(): boolean;
    /** Returns how many rows are being shown per page. */
    paginationGetPageSize(): number;
    /** Returns the 0-based index of the page which is showing. */
    paginationGetCurrentPage(): number;
    /** Returns the total number of pages. Returns `null` if `paginationIsLastPageFound() === false`. */
    paginationGetTotalPages(): number;
    /** The total number of rows. Returns `null` if `paginationIsLastPageFound() === false`. */
    paginationGetRowCount(): number;
    /** Navigates to the next page. */
    paginationGoToNextPage(): void;
    /** Navigates to the previous page. */
    paginationGoToPreviousPage(): void;
    /** Navigates to the first page. */
    paginationGoToFirstPage(): void;
    /** Navigates to the last page. */
    paginationGoToLastPage(): void;
    /** Goes to the specified page. If the page requested doesn't exist, it will go to the last page. */
    paginationGoToPage(page: number): void;
    /**
     * Sets columns to adjust in size to fit the grid horizontally.
     * Can provide params or a fixed pixel width to control how the columns are resized.
     * If inferring cell data types with custom column types
     * and row data is provided asynchronously, the column sizing will happen asynchronously when row data is added.
     * To always perform this synchronously, set `cellDataType = false` on the default column definition.
     **/
    sizeColumnsToFit(paramsOrGridWidth?: ISizeColumnsToFitParams | number): void;
    /** Call this if you want to open or close a column group. */
    setColumnGroupOpened(group: ProvidedColumnGroup | string, newValue: boolean): void;
    /** Returns the column group with the given name. */
    getColumnGroup(name: string, instanceId?: number): ColumnGroup | null;
    /** Returns the provided column group with the given name. */
    getProvidedColumnGroup(name: string): ProvidedColumnGroup | null;
    /** Returns the display name for a column. Useful if you are doing your own header rendering and want the grid to work out if `headerValueGetter` is used, or if you are doing your own column management GUI, to know what to show as the column name. */
    getDisplayNameForColumn(column: Column, location: HeaderLocation): string;
    /** Returns the display name for a column group (when grouping columns). */
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: HeaderLocation): string;
    /** Returns the column with the given `colKey`, which can either be the `colId` (a string) or the `colDef` (an object). */
    getColumn<TValue = any>(key: string | ColDef<TData, TValue> | Column<TValue>): Column<TValue> | null;
    /** Returns all the columns, regardless of visible or not. */
    getColumns(): Column[] | null;
    /** Applies the state of the columns from a previous state. Returns `false` if one or more columns could not be found. */
    applyColumnState(params: ApplyColumnStateParams): boolean;
    /** Gets the state of the columns. Typically used when saving column state. */
    getColumnState(): ColumnState[];
    /** Sets the state back to match the originally provided column definitions. */
    resetColumnState(): void;
    /** Gets the state of the column groups. Typically used when saving column group state. */
    getColumnGroupState(): {
        groupId: string;
        open: boolean;
    }[];
    /** Sets the state of the column group state from a previous state. */
    setColumnGroupState(stateItems: ({
        groupId: string;
        open: boolean;
    })[]): void;
    /** Sets the state back to match the originally provided column definitions. */
    resetColumnGroupState(): void;
    /** Returns `true` if pinning left or right, otherwise `false`. */
    isPinning(): boolean;
    /** Returns `true` if pinning left, otherwise `false`. */
    isPinningLeft(): boolean;
    /** Returns `true` if pinning right, otherwise `false`. */
    isPinningRight(): boolean;
    /** Returns the column to the right of the provided column, taking into consideration open / closed column groups and visible columns. This is useful if you need to know what column is beside yours e.g. if implementing your own cell navigation. */
    getDisplayedColAfter(col: Column): Column | null;
    /** Same as `getVisibleColAfter` except gives column to the left. */
    getDisplayedColBefore(col: Column): Column | null;
    /** Sets the visibility of a column. Key can be the column ID or `Column` object. */
    setColumnVisible(key: string | Column, visible: boolean): void;
    /** Same as `setColumnVisible`, but provide a list of column keys. */
    setColumnsVisible(keys: (string | Column)[], visible: boolean): void;
    /** Sets the column pinned / unpinned. Key can be the column ID, field, `ColDef` object or `Column` object. */
    setColumnPinned(key: string | ColDef | Column, pinned: ColumnPinnedType): void;
    /** Same as `setColumnPinned`, but provide a list of column keys. */
    setColumnsPinned(keys: (string | ColDef | Column)[], pinned: ColumnPinnedType): void;
    /**
     * Returns all the grid columns, same as `getColumns()`, except
     *
     *  a) it has the order of the columns that are presented in the grid
     *
     *  b) it's after the 'pivot' step, so if pivoting, has the value columns for the pivot.
     */
    getAllGridColumns(): Column[];
    /** Same as `getAllDisplayedColumns` but just for the pinned left portion of the grid. */
    getDisplayedLeftColumns(): Column[];
    /** Same as `getAllDisplayedColumns` but just for the center portion of the grid. */
    getDisplayedCenterColumns(): Column[];
    /** Same as `getAllDisplayedColumns` but just for the pinned right portion of the grid. */
    getDisplayedRightColumns(): Column[];
    /** Returns all columns currently displayed (e.g. are visible and if in a group, the group is showing the columns) for the pinned left, centre and pinned right portions of the grid. */
    getAllDisplayedColumns(): Column[];
    /** Same as `getAllGridColumns()`, except only returns rendered columns, i.e. columns that are not within the viewport and therefore not rendered, due to column virtualisation, are not displayed. */
    getAllDisplayedVirtualColumns(): Column[];
    /** Moves a column to `toIndex`. The column is first removed, then added at the `toIndex` location, thus index locations will change to the right of the column after the removal. */
    moveColumn(key: string | ColDef | Column, toIndex: number): void;
    /** Same as `moveColumn` but works on index locations. */
    moveColumnByIndex(fromIndex: number, toIndex: number): void;
    /** Same as `moveColumn` but works on list. */
    moveColumns(columnsToMoveKeys: (string | ColDef | Column)[], toIndex: number): void;
    /** Move the column to a new position in the row grouping order. */
    moveRowGroupColumn(fromIndex: number, toIndex: number): void;
    /** Sets the agg function for a column. `aggFunc` can be one of the built-in aggregations or a custom aggregation by name or direct function. */
    setColumnAggFunc(key: string | ColDef | Column, aggFunc: string | IAggFunc | null | undefined): void;
    /** Sets the column width on a single column. The finished flag gets included in the resulting event and not used internally by the grid. The finished flag is intended for dragging, where a dragging action will produce many `columnWidth` events, so the consumer of events knows when it receives the last event in a stream. The finished parameter is optional, and defaults to `true`. */
    setColumnWidth(key: string | ColDef | Column, newWidth: number, finished?: boolean, source?: ColumnEventType): void;
    /** Sets the column widths on multiple columns. This method offers better performance than calling `setColumnWidth` multiple times. The finished flag gets included in the resulting event and not used internally by the grid. The finished flag is intended for dragging, where a dragging action will produce many `columnWidth` events, so the consumer of events knows when it receives the last event in a stream. The finished parameter is optional, and defaults to `true`. */
    setColumnWidths(columnWidths: {
        key: string | ColDef | Column;
        newWidth: number;
    }[], finished?: boolean, source?: ColumnEventType): void;
    /** Get the pivot mode. */
    isPivotMode(): boolean;
    /** Returns the pivot result column for the given `pivotKeys` and `valueColId`. Useful to then call operations on the pivot column. */
    getPivotResultColumn<TValue = any>(pivotKeys: string[], valueColKey: string | ColDef<TData, TValue> | Column<TValue>): Column<TValue> | null;
    /** Set the value columns to the provided list of columns. */
    setValueColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Get a list of the existing value columns. */
    getValueColumns(): Column[];
    /** Remove the given column from the existing set of value columns. */
    removeValueColumn(colKey: (string | ColDef | Column)): void;
    /** Like `removeValueColumn` but remove the given list of columns from the existing set of value columns. */
    removeValueColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Add the given column to the set of existing value columns. */
    addValueColumn(colKey: (string | ColDef | Column)): void;
    /** Like `addValueColumn` but add the given list of columns to the existing set of value columns. */
    addValueColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Set the row group columns. */
    setRowGroupColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Remove a column from the row groups. */
    removeRowGroupColumn(colKey: string | ColDef | Column): void;
    /** Same as `removeRowGroupColumn` but provide a list of columns. */
    removeRowGroupColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Add a column to the row groups. */
    addRowGroupColumn(colKey: string | ColDef | Column): void;
    /** Same as `addRowGroupColumn` but provide a list of columns. */
    addRowGroupColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Get row group columns. */
    getRowGroupColumns(): Column[];
    /** Set the pivot columns. */
    setPivotColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Remove a pivot column. */
    removePivotColumn(colKey: string | ColDef | Column): void;
    /** Same as `removePivotColumn` but provide a list of columns. */
    removePivotColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Add a pivot column. */
    addPivotColumn(colKey: string | ColDef | Column): void;
    /** Same as `addPivotColumn` but provide a list of columns. */
    addPivotColumns(colKeys: (string | ColDef | Column)[]): void;
    /** Get the pivot columns. */
    getPivotColumns(): Column[];
    /** Same as `getAllDisplayedColumnGroups` but just for the pinned left portion of the grid. */
    getLeftDisplayedColumnGroups(): IHeaderColumn[];
    /** Same as `getAllDisplayedColumnGroups` but just for the center portion of the grid. */
    getCenterDisplayedColumnGroups(): IHeaderColumn[];
    /** Same as `getAllDisplayedColumnGroups` but just for the pinned right portion of the grid. */
    getRightDisplayedColumnGroups(): IHeaderColumn[];
    /** Returns all 'root' column headers. If you are not grouping columns, these return the columns. If you are grouping, these return the top level groups - you can navigate down through each one to get the other lower level headers and finally the columns at the bottom. */
    getAllDisplayedColumnGroups(): IHeaderColumn[] | null;
    /**
     * Auto-sizes a column based on its contents. If inferring cell data types with custom column types and row data is provided asynchronously,
     * the column sizing will happen asynchronously when row data is added. To always perform this synchronously,
     * set `cellDataType = false` on the default column definition.
     */
    autoSizeColumn(key: string | ColDef | Column, skipHeader?: boolean): void;
    /**
     * Same as `autoSizeColumn`, but provide a list of column keys. If inferring cell data types with custom column types
     * and row data is provided asynchronously, the column sizing will happen asynchronously when row data is added.
     * To always perform this synchronously, set `cellDataType = false` on the default column definition.
     */
    autoSizeColumns(keys: (string | ColDef | Column)[], skipHeader?: boolean): void;
    /**
     * Calls `autoSizeColumns` on all displayed columns. If inferring cell data types with custom column types
     * and row data is provided asynchronously, the column sizing will happen asynchronously when row data is added.
     * To always perform this synchronously, set `cellDataType = false` on the default column definition.
     */
    autoSizeAllColumns(skipHeader?: boolean): void;
    /** Set the pivot result columns. */
    setPivotResultColumns(colDefs: (ColDef | ColGroupDef)[]): void;
    /** Returns the grid's pivot result columns. */
    getPivotResultColumns(): Column[] | null;
    /** Get the current state of the grid. Can be used in conjunction with the `initialState` grid option to save and restore grid state. */
    getState(): GridState;
    /**
     * Returns the grid option value for a provided key.
     */
    getGridOption<Key extends keyof GridOptions>(key: Key): GridOptions[Key];
    /**
     * Updates a single `Managed` gridOption to the new value provided.
     * If updating multiple options, it is recommended to instead use `api.updateGridOptions()` which batches update logic.
     */
    setGridOption<Key extends keyof GridOptions & ManagedGridOptionKey>(key: Key, value: GridOptions[Key]): void;
    /**
     * Updates the provided subset of `Managed` gridOptions with the provided values.
     */
    updateGridOptions(options: Partial<ManagedGridOptions>): void;
    /** Used internally by grid. Not intended to be used by the client. Interface may change between releases. */
    __internalUpdateGridOptions(options: Partial<GridOptions>): void;
    private deprecatedUpdateGridOption;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Set the top pinned rows. Call with no rows / undefined to clear top pinned rows.
     **/
    setPivotMode(pivotMode: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Set the top pinned rows. Call with no rows / undefined to clear top pinned rows.
     **/
    setPinnedTopRowData(rows?: any[]): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Set the bottom pinned rows. Call with no rows / undefined to clear bottom pinned rows.
     * */
    setPinnedBottomRowData(rows?: any[]): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * DOM element to use as the popup parent for grid popups (context menu, column menu etc).
     * */
    setPopupParent(ePopupParent: HTMLElement): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     */
    setSuppressModelUpdateAfterUpdateTransaction(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Resets the data type definitions. This will update the columns in the grid.
     * */
    setDataTypeDefinitions(dataTypeDefinitions: {
        [cellDataType: string]: DataTypeDefinition<TData>;
    }): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Set whether the grid paginates the data or not.
     *  - `true` to enable pagination
     *  - `false` to disable pagination
     */
    setPagination(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `paginationPageSize`, then re-paginates the grid so the changes are applied immediately.
     * */
    paginationSetPageSize(size?: number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Resets the side bar to the provided configuration. The parameter is the same as the sideBar grid property. The side bar is re-created from scratch with the new config.
     * */
    setSideBar(def: SideBarDef | string | string[] | boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     */
    setSuppressClipboardPaste(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     */
    setGroupRemoveSingleChildren(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     */
    setGroupRemoveLowestSingleChildren(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     */
    setGroupDisplayType(value: RowGroupingDisplayType): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `groupIncludeFooter` property
     */
    setGroupIncludeFooter(value: boolean | UseGroupFooter<TData>): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `groupIncludeTotalFooter` property
     */
    setGroupIncludeTotalFooter(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     */
    setRowClass(className: string | undefined): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `deltaSort` property
     * */
    setDeltaSort(enable: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `suppressRowDrag` property.
     * */
    setSuppressRowDrag(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `suppressMoveWhenRowDragging` property.
     * */
    setSuppressMoveWhenRowDragging(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `suppressRowClickSelection` property.
     * */
    setSuppressRowClickSelection(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Enable/disable the Advanced Filter
     * */
    setEnableAdvancedFilter(enabled: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Updates the `includeHiddenColumnsInAdvancedFilter` grid option.
     * By default hidden columns are excluded from the Advanced Filter.
     * Set to `true` to include them.
     */
    setIncludeHiddenColumnsInAdvancedFilter(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * DOM element to use as the parent for the Advanced Filter, to allow it to appear outside of the grid.
     * Set to `null` to appear inside the grid.
     */
    setAdvancedFilterParent(advancedFilterParent: HTMLElement | null): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Updates the Advanced Filter Builder parameters.
     * */
    setAdvancedFilterBuilderParams(params?: IAdvancedFilterBuilderParams): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Pass a Quick Filter text into the grid for filtering.
     * */
    setQuickFilter(newFilter: string): void;
    /**
     * @deprecated As of v30, hidden columns are excluded from the Quick Filter by default. To include hidden columns, use `setIncludeHiddenColumnsInQuickFilter` instead.
     */
    setExcludeHiddenColumnsFromQuickFilter(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Updates the `includeHiddenColumnsInQuickFilter` grid option.
     * By default hidden columns are excluded from the Quick Filter.
     * Set to `true` to include them.
     */
    setIncludeHiddenColumnsInQuickFilter(value: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Updates the `quickFilterParser` grid option,
     * which changes how the Quick Filter splits the Quick Filter text into search terms.
     */
    setQuickFilterParser(quickFilterParser?: (quickFilter: string) => string[]): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Updates the `quickFilterMatcher` grid option,
     * which changes the matching logic for whether a row passes the Quick Filter.
     */
    setQuickFilterMatcher(quickFilterMatcher?: (quickFilterParts: string[], rowQuickFilterAggregateText: string) => boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * If `true`, the horizontal scrollbar will always be present, even if not required. Otherwise, it will only be displayed when necessary.
     * */
    setAlwaysShowHorizontalScroll(show: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * If `true`, the vertical scrollbar will always be present, even if not required. Otherwise it will only be displayed when necessary.
     * */
    setAlwaysShowVerticalScroll(show: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     */
    setFunctionsReadOnly(readOnly: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Call to set new column definitions. The grid will redraw all the column headers, and then redraw all of the rows.
     */
    setColumnDefs(colDefs: (ColDef<TData> | ColGroupDef<TData>)[], source?: ColumnEventType): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Call to set new auto group column definition. The grid will recreate any auto-group columns if present.
     * */
    setAutoGroupColumnDef(colDef: ColDef<TData>, source?: ColumnEventType): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Call to set new Default Column Definition.
     * */
    setDefaultColDef(colDef: ColDef<TData>, source?: ColumnEventType): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Call to set new Column Types.
     * */
    setColumnTypes(columnTypes: {
        string: ColDef<TData>;
    }, source?: ColumnEventType): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `treeData` property.
     * */
    setTreeData(newTreeData: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Set new datasource for Server-Side Row Model.
     * */
    setServerSideDatasource(datasource: IServerSideDatasource): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Updates the `cacheBlockSize` when requesting data from the server if `suppressServerSideInfiniteScroll` is not enabled.
     *
     * Note this purges all the cached data and reloads all the rows of the grid.
     * */
    setCacheBlockSize(blockSize: number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Set new datasource for Infinite Row Model.
     * */
    setDatasource(datasource: IDatasource): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Set new datasource for Viewport Row Model.
     * */
    setViewportDatasource(viewportDatasource: IViewportDatasource): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Set the row data.
     * */
    setRowData(rowData: TData[]): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the `enableCellTextSelection` property.
     * */
    setEnableCellTextSelection(selectable: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the height in pixels for the row containing the column label header.
     * */
    setHeaderHeight(headerHeight?: number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Switch between layout options: `normal`, `autoHeight`, `print`.
     * Defaults to `normal` if no domLayout provided.
     */
    setDomLayout(domLayout?: DomLayoutType): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the preferred direction for the selection fill handle.
     * */
    setFillHandleDirection(direction: 'x' | 'y' | 'xy'): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the height in pixels for the rows containing header column groups.
     * */
    setGroupHeaderHeight(headerHeight?: number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the height in pixels for the row containing the floating filters.
     * */
    setFloatingFiltersHeight(headerHeight?: number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the height in pixels for the row containing the columns when in pivot mode.
     * */
    setPivotHeaderHeight(headerHeight?: number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     * Sets the height in pixels for the row containing header column groups when in pivot mode.
     * */
    setPivotGroupHeaderHeight(headerHeight?: number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setAnimateRows(animateRows: boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setIsExternalFilterPresent(isExternalFilterPresentFunc: () => boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setDoesExternalFilterPass(doesExternalFilterPassFunc: (node: IRowNode) => boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setNavigateToNextCell(navigateToNextCellFunc: (params: NavigateToNextCellParams) => (CellPosition | null)): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setTabToNextCell(tabToNextCellFunc: (params: TabToNextCellParams) => (CellPosition | null)): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setTabToNextHeader(tabToNextHeaderFunc: (params: TabToNextHeaderParams) => (HeaderPosition | null)): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setNavigateToNextHeader(navigateToNextHeaderFunc: (params: NavigateToNextHeaderParams) => (HeaderPosition | null)): void;
    setRowGroupPanelShow(rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never'): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetGroupRowAgg(getGroupRowAggFunc: (params: GetGroupRowAggParams) => any): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetBusinessKeyForNode(getBusinessKeyForNodeFunc: (nodes: IRowNode) => string): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetChildCount(getChildCountFunc: (dataItem: any) => number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setProcessRowPostCreate(processRowPostCreateFunc: (params: ProcessRowParams) => void): void;
    /**
     * @deprecated v31 `getRowId` is a static property and cannot be updated.
     *  */
    setGetRowId(getRowIdFunc: GetRowIdFunc): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetRowClass(rowClassFunc: (params: RowClassParams) => string | string[]): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setIsFullWidthRow(isFullWidthRowFunc: (params: IsFullWidthRowParams) => boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setIsRowSelectable(isRowSelectableFunc: IsRowSelectable): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setIsRowMaster(isRowMasterFunc: IsRowMaster): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setPostSortRows(postSortRowsFunc: (params: PostSortRowsParams) => void): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetDocument(getDocumentFunc: () => Document): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetContextMenuItems(getContextMenuItemsFunc: GetContextMenuItems): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetMainMenuItems(getMainMenuItemsFunc: GetMainMenuItems): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setProcessCellForClipboard(processCellForClipboardFunc: (params: ProcessCellForExportParams) => any): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setSendToClipboard(sendToClipboardFunc: (params: {
        data: string;
    }) => void): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setProcessCellFromClipboard(processCellFromClipboardFunc: (params: ProcessCellForExportParams) => any): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setProcessPivotResultColDef(processPivotResultColDefFunc: (colDef: ColDef) => void): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setProcessPivotResultColGroupDef(processPivotResultColGroupDefFunc: (colDef: ColDef) => void): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setPostProcessPopup(postProcessPopupFunc: (params: PostProcessPopupParams) => void): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setInitialGroupOrderComparator(initialGroupOrderComparatorFunc: (params: InitialGroupOrderComparatorParams) => number): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetChartToolbarItems(getChartToolbarItemsFunc: GetChartToolbarItems): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setPaginationNumberFormatter(paginationNumberFormatterFunc: (params: PaginationNumberFormatterParams) => string): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetServerSideGroupLevelParams(getServerSideGroupLevelParamsFunc: (params: GetServerSideGroupLevelParamsParams) => ServerSideGroupLevelParams): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setIsServerSideGroupOpenByDefault(isServerSideGroupOpenByDefaultFunc: (params: IsServerSideGroupOpenByDefaultParams) => boolean): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setIsApplyServerSideTransaction(isApplyServerSideTransactionFunc: IsApplyServerSideTransaction): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setIsServerSideGroup(isServerSideGroupFunc: IsServerSideGroup): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetServerSideGroupKey(getServerSideGroupKeyFunc: GetServerSideGroupKey): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetRowStyle(rowStyleFunc: (params: RowClassParams) => {}): void;
    /**
     * @deprecated v31 Use `api.setGridOption` or `api.updateGridOptions` instead.
     *  */
    setGetRowHeight(rowHeightFunc: (params: RowHeightParams) => number): void;
}
