/**
 * These are used to create links from types to relevant documentation.
 */
const TYPE_LINKS: Record<string, string> = {
    AgChartTheme: './integrated-charts-customisation/#custom-chart-themes',
    AgChartThemeName: './integrated-charts-customisation/#provided-themes',
    AgChartThemeDefinition: 'https://charts.ag-grid.com/themes-api',
    AgChartThemeOverrides: 'https://charts.ag-grid.com/themes-api/#reference-AgChartTheme-overrides',
    AgChartThemePalette: 'https://charts.ag-grid.com/themes-api/#reference-AgChartTheme-palette',
    AgCartesianChartOptions: './integrated-charts-customisation/#overriding-themes',
    AgCartesianAxesTheme: './integrated-charts-customisation/#overriding-themes',
    AgCartesianSeriesTheme: './integrated-charts-customisation/#overriding-themes',
    AgBarSeriesOptions: './integrated-charts-customisation/#bar-overrides',
    AgLineSeriesOptions: './integrated-charts-customisation/#line-overrides',
    AgAreaSeriesOptions: './integrated-charts-customisation/#area-overrides',
    AgScatterSeriesOptions: './integrated-charts-customisation/#scatter-overrides',
    AgHistogramSeriesOptions: './integrated-charts-customisation/#histogram-overrides',
    AgPolarChartOptions: './integrated-charts-customisation/#overriding-themes',
    AgPolarAxesTheme: './integrated-charts-customisation/#overriding-themes',
    AgPolarSeriesTheme: './integrated-charts-customisation/#overriding-themes',
    AgPieSeriesOptions: './integrated-charts-customisation/#pie-overrides',
    Blob: 'https://developer.mozilla.org/en-US/docs/Web/API/Blob',
    CellPosition: './keyboard-navigation/#cellposition',
    CellRange: './range-selection/#range-selection-api',
    ChartModel: './integrated-charts-api-save-restore-charts/#api-reference',
    ColDef: './column-properties/',
    ColGroupDef: './column-properties/#reference-columnGroups',
    AbstractColDef: './column-properties/',
    ColumnGroup: './column-object-group/',
    ProvidedColumnGroup: './column-object-group#reference-ProvidedColumnGroup',
    Column: './column-object/',
    ColumnEventType: './column-events/',
    CreatePivotChartParams: './integrated-charts-api-pivot-chart/#pivot-chart-api',
    CreateRangeChartParams: './integrated-charts-api-range-chart/#range-chart-api',
    GetChartImageDataUrlParams: './integrated-charts-api-downloading-image',
    CsvExportParams: './csv-export/#csvexportparams',
    Document: 'https://developer.mozilla.org/en-US/docs/Web/API/Document',
    ExcelAlignment: './excel-export-api/#excelalignment',
    ExcelBorder: './excel-export-api/#excelborder',
    ExcelBorders: './excel-export-api/#excelborders',
    ExcelCell: './excel-export-api/#excelcell',
    ExcelData: './excel-export-api/#exceldata',
    ExcelDataType: './excel-export-api/#exceldatatype',
    ExcelOOXMLDataType: './excel-export-api/#excelooxmldatatype',
    ExcelExportParams: './excel-export-api/#excelexportparams',
    ExcelExportMultipleSheetParams: './excel-export-api/#excelexportmultiplesheetparams',
    ExcelFont: './excel-export-api/#excelfont',
    ExcelHeaderFooterConfig: './excel-export-api/#excelheaderfooterconfig',
    ExcelHeaderFooter: './excel-export-api/#excelheaderfooter',
    ExcelHeaderFooterContent: './excel-export-api/#excelheaderfootercontent',
    ExcelHeaderFooterImage: './excel-export-api/#excelheaderfooterimage',
    ExcelImage: './excel-export-api/#excelimage',
    ExcelImagePosition: './excel-export-api/#excelimageposition',
    ExcelInterior: './excel-export-api/#excelinterior',
    ExcelNumberFormat: './excel-export-api/#excelnumberformat',
    ExcelProtection: './excel-export-api/#excelprotection',
    ExcelStyle: './excel-export-api/#excelstyle',
    ExcelSheetConfig: './excel-export-api/#excelsheetconfig',
    ExcelSheetPageSetup: './excel-export-api/#excelsheetpagesetup',
    ExcelSheetMargin: './excel-export-api/#excelsheetmargin',
    ExcelTableConfig: './excel-export-api/#exceltableconfig',
    GridApi: './grid-api/',
    GridOptions: './grid-options/',
    AgPublicEventType: './grid-events/',
    AgEventListener: './grid-events/',
    HeaderPosition: './keyboard-navigation/#headerposition',
    HTMLElement: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement',
    IAggFunc: './aggregation-custom-functions/#custom-aggregation-functions',
    IDatasource: './infinite-scrolling/#datasource-interface',
    IFilterComp: './component-filter/',
    IFloatingFilterComp: './component-floating-filter/',
    IServerSideDatasource: './server-side-model-datasource/#registering-the-datasource',
    IViewportDatasource: './viewport/#interface-iviewportdatasource',
    IComponent: './components',
    KeyboardEvent: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
    MouseEvent: 'https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent',
    RowNode: './row-object/',
    IRowNode: './row-object/',
    ServerSideTransaction: './server-side-model-transactions/#transaction-api',
    Touch: 'https://developer.mozilla.org/en-US/docs/Web/API/Touch',
} as const;

export function getTypeLink(type: string | undefined) {
    if (typeof type === 'string') {
        // handle removal of generics.
        const cleanType = type?.split('<')[0];
        return TYPE_LINKS[cleanType];
    }
    return undefined;
}
