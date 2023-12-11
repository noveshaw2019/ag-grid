// Type definitions for @ag-grid-community/core v31.0.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { AgPickerField, IPickerFieldParams } from "./agPickerField";
import { Component } from "./component";
import { VirtualList } from "./virtualList";
export interface RichSelectParams<TValue = any> extends IPickerFieldParams {
    value?: TValue;
    valueList?: TValue[];
    allowTyping?: boolean;
    cellRenderer?: any;
    cellRowHeight?: number;
    searchDebounceDelay?: number;
    filterList?: boolean;
    searchType?: 'match' | 'matchAny' | 'fuzzy';
    highlightMatch?: boolean;
    placeholder?: string;
    initialInputValue?: string;
    valueFormatter?: (value: TValue) => any;
    searchStringCreator?: (values: TValue[]) => string[];
}
export declare class AgRichSelect<TValue = any> extends AgPickerField<TValue, RichSelectParams<TValue>, VirtualList> {
    private searchString;
    private listComponent;
    protected values: TValue[];
    private currentList;
    private cellRowHeight;
    private highlightedItem;
    private lastRowHovered;
    private searchStringCreator;
    private eLoading;
    private userComponentFactory;
    private eInput;
    constructor(config?: RichSelectParams<TValue>);
    protected postConstruct(): void;
    private createLoadingElement;
    private createListComponent;
    private renderSelectedValue;
    private getCurrentValueIndex;
    private highlightFilterMatch;
    private highlightSelectedValue;
    setRowHeight(height: number): void;
    protected createPickerComponent(): VirtualList<Component>;
    setSearchStringCreator(searchStringFn: (values: TValue[]) => string[]): void;
    setValueList(params: {
        valueList: TValue[];
        refresh?: boolean;
    }): void;
    showPicker(): void;
    private showCurrentValueInPicker;
    protected beforeHidePicker(): void;
    private onWrapperFocus;
    private onWrapperFocusOut;
    private buildSearchStringFromKeyboardEvent;
    private searchTextFromCharacter;
    searchTextFromString(str: string | null | undefined): void;
    private buildSearchStrings;
    private getSuggestionsAndFilteredValues;
    private filterListModel;
    private runSearch;
    private displayOrHidePicker;
    private clearSearchString;
    private selectListItem;
    setValue(value: TValue, silent?: boolean, fromPicker?: boolean): this;
    private createRowComponent;
    private getRowForMouseEvent;
    private onPickerMouseMove;
    private onNavigationKeyDown;
    protected onEnterKeyDown(e: KeyboardEvent): void;
    private onTabKeyDown;
    private onListValueSelected;
    private dispatchPickerEvent;
    getFocusableElement(): HTMLElement;
    protected onKeyDown(event: KeyboardEvent): void;
    destroy(): void;
}
