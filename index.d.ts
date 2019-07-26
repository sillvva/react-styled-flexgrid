import React from 'react';
import { StyledComponent } from 'styled-components';

export namespace ReactGridComponent {
    type GridWidth = string | number;
    type MinWidth = { min: GridWidth };
    type GridFlow = "row" | "column" | "dense" | "row dense" | "column dense";
    type AlignItems = "center" | "start" | "end" | "stretch" | "inherit" | "initial" | "unset";
    type AlignContent = "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly" | "stretch" | "inherit" | "initial" | "unset";
    type JustifyItems = "center" | "start" | "end" | "stretch" | "inherit" | "initial" | "unset";
    type JustifyContent = "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly" | "stretch" | "inherit" | "initial" | "unset";
    type GridAreas = string[][];
    type Columns = GridWidth | GridWidth[] | MinWidth;
    type Rows = GridWidth | GridWidth[];

    interface GridItemProps {
        children?: React.ReactNode;
        area?: string | { xs?: string, sm?: string, md?: string, lg?: string, xl?: string };
        column?: string | { xs?: string, sm?: string, md?: string, lg?: string, xl?: string };
        columnStart?: number | string | { xs?: number | string, sm?: number | string, md?: number | string, lg?: number | string, xl?: number | string };
        columnEnd?: number | string | { xs?: number | string, sm?: number | string, md?: number | string, lg?: number | string, xl?: number | string };
        row?: string | { xs?: string, sm?: string, md?: string, lg?: string, xl?: string };
        rowStart?: number | string | { xs?: number | string, sm?: number | string, md?: number | string, lg?: number | string, xl?: number | string };
        rowEnd?: number | string | { xs?: number | string, sm?: number | string, md?: number | string, lg?: number | string, xl?: number | string };
        align?: AlignItems | { xs?: AlignItems, sm?: AlignItems, md?: AlignItems, lg?: AlignItems, xl?: AlignItems };
        justify?: JustifyItems | { xs?: JustifyItems, sm?: JustifyItems, md?: JustifyItems, lg?: JustifyItems, xl?: JustifyItems };
        width?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        height?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        show?: boolean | { xs?: boolean, sm?: boolean, md?: boolean, lg?: boolean, xl?: boolean };
        itemProps?: object;
    }

    interface GridProps {
        children?: React.ReactNode;
        inline?: boolean | { xs?: boolean, sm?: boolean, md?: boolean, lg?: boolean, xl?: boolean };
        columns?: Columns | { xs?: Columns, sm?: Columns, md?: Columns, lg?: Columns, xl?: Columns };
        rows?: Rows | { xs?: Rows, sm?: Rows, md?: Rows, lg?: Rows, xl?: Rows };
        autoColWidth?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        autoRowHeight?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        areas?: GridAreas | { xs?: GridAreas, sm?: GridAreas, md?: GridAreas, lg?: GridAreas, xl?: GridAreas };
        flow?: GridFlow | { xs?: GridFlow, sm?: GridFlow, md?: GridFlow, lg?: GridFlow, xl?: GridFlow };
        gap?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        colGap?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        rowGap?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        align?: AlignContent | { xs?: AlignContent, sm?: AlignContent, md?: AlignContent, lg?: AlignContent, xl?: AlignContent };
        justify?: JustifyContent | { xs?: JustifyContent, sm?: JustifyContent, md?: JustifyContent, lg?: JustifyContent, xl?: JustifyContent };
        alignItems?: AlignItems | { xs?: AlignItems, sm?: AlignItems, md?: AlignItems, lg?: AlignItems, xl?: AlignItems };
        justifyItems?: JustifyItems | { xs?: JustifyItems, sm?: JustifyItems, md?: JustifyItems, lg?: JustifyItems, xl?: JustifyItems };
        width?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        height?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        show?: boolean | { xs?: boolean, sm?: boolean, md?: boolean, lg?: boolean, xl?: boolean };
        itemProps?: object;
    }

    interface GridRowProps {
        children: React.ReactNode;
    }
}

export class Grid extends React.Component<ReactGridComponent.GridProps, any> {
    static Row: React.FunctionComponent<ReactGridComponent.GridRowProps>;
    static Item: React.Component<ReactGridComponent.GridItemProps, any>;
}

export namespace ReactFlexComponent {
    type FlexWidth = string | number;
    type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
    type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
    type AlignItems = "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "inherit" | "initial" | "unset";
    type AlignContent = "stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "inherit" | "initial" | "unset";
    type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "inherit" | "initial" | "unset";
    type FlexSpace = string | number | { min: FlexWidth, grow: number } | { max: FlexWidth, shrink: number } | { exact: FlexWidth };

    interface FlexItemProps {
        children?: React.ReactNode;
        flex?: FlexSpace | { xs?: FlexSpace, sm?: FlexSpace, md?: FlexSpace, lg?: FlexSpace, xl?: FlexSpace };
        grow?: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
        shrink?: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
        basis?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
        align?: AlignItems | { xs?: AlignItems, sm?: AlignItems, md?: AlignItems, lg?: AlignItems, xl?: AlignItems };
        width?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
        height?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
        show?: boolean | { xs?: boolean, sm?: boolean, md?: boolean, lg?: boolean, xl?: boolean };
        itemProps?: object;
    }

    interface FlexProps {
        children?: React.ReactNode;
        inline?: boolean | { xs?: boolean, sm?: boolean, md?: boolean, lg?: boolean, xl?: boolean };
        dir?: FlexDirection | { xs?: FlexDirection, sm?: FlexDirection, md?: FlexDirection, lg?: FlexDirection, xl?: FlexDirection };
        wrap?: FlexWrap | { xs?: FlexWrap, sm?: FlexWrap, md?: FlexWrap, lg?: FlexWrap, xl?: FlexWrap };
        alignItems?: AlignItems | { xs?: AlignItems, sm?: AlignItems, md?: AlignItems, lg?: AlignItems, xl?: AlignItems };
        align?: AlignContent | { xs?: AlignContent, sm?: AlignContent, md?: AlignContent, lg?: AlignContent, xl?: AlignContent };
        justify?: JustifyContent | { xs?: JustifyContent, sm?: JustifyContent, md?: JustifyContent, lg?: JustifyContent, xl?: JustifyContent };
        width?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
        height?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
        show?: boolean | { xs?: boolean, sm?: boolean, md?: boolean, lg?: boolean, xl?: boolean };
        itemProps?: object;
    }
}

export class Flex extends React.Component<ReactFlexComponent.FlexProps, any> {
    static Item: React.Component<ReactFlexComponent.FlexItemProps, any>;
}