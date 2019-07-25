import React from 'react';
import { StyledComponent } from 'styled-components';

export namespace ReactGridComponent {
    type GridWidth = string | number;
    type MinWidth = { min: GridWidth };
    type GridFlow = "row" | "column" | "dense" | "row dense" | "column dense";
    type AlignItems = "center" | "start" | "end" | "stretch" | "inherit" | "initial" | "unset";
    type AlignContent = "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly" | "stretch" | "inherit" | "initial" | "unset";
    type JustifyItems = "center" | "start" | "end" | "left" | "right" | "stretch" | "inherit" | "initial" | "unset";
    type JustifyContent = "center" | "start" | "end" | "left" | "right" | "space-between" | "space-around" | "space-evenly" | "stretch" | "inherit" | "initial" | "unset";
    type GridAreas = string[][];
    type Columns = GridWidth | GridWidth[] | MinWidth;
    type Rows = GridWidth | GridWidth[];

    interface GridProps {
        children?: React.ReactNode;
        columns?: Columns | { xs?: Columns, sm?: Columns, md?: Columns, lg?: Columns, xl?: Columns };
        rows?: Rows | { xs?: Rows, sm?: Rows, md?: Rows, lg?: Rows, xl?: Rows };
        minRowHeight?: GridWidth | { xs?: minRowHeight, sm?: minRowHeight, md?: minRowHeight, lg?: minRowHeight, xl?: minRowHeight };
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
    }

    interface GridRowProps {
        children: React.ReactNode;
    }

    interface GridItemProps {
        children?: React.ReactNode;
        area?: string | { xs?: string, sm?: string, md?: string, lg?: string, xl?: string };
        column?: string | { xs?: string, sm?: string, md?: string, lg?: string, xl?: string };
        columnStart?: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
        columnEnd?: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
        row?: string | { xs?: string, sm?: string, md?: string, lg?: string, xl?: string };
        rowStart?: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
        rowEnd?: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
        align?: AlignItems | { xs?: AlignItems, sm?: AlignItems, md?: AlignItems, lg?: AlignItems, xl?: AlignItems };
        justify?: JustifyItems | { xs?: JustifyItems, sm?: JustifyItems, md?: JustifyItems, lg?: JustifyItems, xl?: JustifyItems };
        width?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
        height?: GridWidth | { xs?: GridWidth, sm?: GridWidth, md?: GridWidth, lg?: GridWidth, xl?: GridWidth };
    }
}

export class Grid extends React.Component<ReactGridComponent.GridProps, any> {
    static Row: React.FunctionComponent<ReactGridComponent.GridRowProps>;
    static Item: StyledComponent<"div", any, ReactGridComponent.GridItemProps, never>;
}

export let GridContainer: StyledComponent<"div", any, ReactGridComponent.GridProps, never>;
export let GridRow: React.FunctionComponent<ReactGridComponent.GridRowProps>;
export let GridItem: StyledComponent<"div", any, ReactGridComponent.GridItemProps, never>;

export namespace ReactFlexComponent {
    type FlexWidth = string | number;
    type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
    type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
    type AlignItems = "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "inherit" | "initial" | "unset";
    type AlignContent = "stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "inherit" | "initial" | "unset";
    type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "inherit" | "initial" | "unset";
    type FlexSpace = string | number | { min: FlexWidth, grow: number } | { max: FlexWidth, shrink: number } | { exact: FlexWidth };

    interface FlexProps {
        children?: React.ReactNode;
        dir?: FlexDirection | { xs?: FlexDirection, sm?: FlexDirection, md?: FlexDirection, lg?: FlexDirection, xl?: FlexDirection };
        wrap?: FlexWrap | { xs?: FlexWrap, sm?: FlexWrap, md?: FlexWrap, lg?: FlexWrap, xl?: FlexWrap };
        alignItems?: AlignItems | { xs?: AlignItems, sm?: AlignItems, md?: AlignItems, lg?: AlignItems, xl?: AlignItems };
        align?: AlignContent | { xs?: AlignContent, sm?: AlignContent, md?: AlignContent, lg?: AlignContent, xl?: AlignContent };
        justify?: JustifyContent | { xs?: JustifyContent, sm?: JustifyContent, md?: JustifyContent, lg?: JustifyContent, xl?: JustifyContent };
        width?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
        height?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
    }

    interface FlexItemProps {
        children?: React.ReactNode;
        flex?: FlexSpace | { xs?: FlexSpace, sm?: FlexSpace, md?: FlexSpace, lg?: FlexSpace, xl?: FlexSpace };
        grow?: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
        shrink?: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
        basis?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
        align?: AlignItems | { xs?: AlignItems, sm?: AlignItems, md?: AlignItems, lg?: AlignItems, xl?: AlignItems };
        width?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
        height?: FlexWidth | { xs?: FlexWidth, sm?: FlexWidth, md?: FlexWidth, lg?: FlexWidth, xl?: FlexWidth };
    }
}

export class Flex extends React.Component<ReactFlexComponent.FlexProps, any> {
    static Item: StyledComponent<"div", any, ReactFlexComponent.FlexItemProps, never>;
}

export let FlexContainer: StyledComponent<"div", any, ReactFlexComponent.FlexProps, never>;
export let FlexItem: StyledComponent<"div", any, ReactFlexComponent.FlexItemProps, never>;