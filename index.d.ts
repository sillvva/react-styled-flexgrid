import React from 'react';
import { StyledComponent } from 'styled-components';

export namespace ReactGridComponent {
    type GridWidth = string | number;
    type MinWidth = { min: string | number };
    type GridFlow = "row" | "column" | "dense" | "row dense" | "column dense";
    type AlignItems = "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" | "self-start" | "self-end" | "baseline" | "first baseline" | "last baseline" | "safe center" | "unsafe center" | "inherit" | "initial" | "unset";
    type AlignContent = "center" | "start" | "end" | "flex-start" | "flex-end" | "normal" | "baseline" | "first baseline" | "last baseline" | "space-between" | "space-around" | "space-evenly" | "stretch" | "safe center" | "unsafe center" | "inherit" | "initial" | "unset";
    type JustifyItems = "auto" | "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" | "self-start" | "self-end" | "left" | "right" | "baseline" | "first baseline" | "last baseline" | "safe center" | "unsafe center" | "inherit" | "initial" | "unset";
    type JustifyContent = "center" | "start" | "end" | "flex-start" | "flex-end" | "left" | "right" | "normal" | "space-between" | "space-around" | "space-evenly" | "stretch" | "safe center" | "unsafe center" | "inherit" | "initial" | "unset";
    type GridAreas = string[][];

    interface GridProps {
        children?: React.ReactNode;
        columns?: GridWidth | GridWidth[] | MinWidth;
        rows?: GridWidth | GridWidth[];
        minRowHeight?: GridWidth;
        areas?: GridAreas;
        flow?: GridFlow;
        gap?: GridWidth;
        colGap?: GridWidth;
        rowGap?: GridWidth;
        align?: AlignContent;
        justify?: JustifyContent;
        alignItems?: AlignItems;
        justifyItems?: JustifyItems;
        height?: GridWidth;
    }

    interface GridRowProps {
        children: React.ReactNode;
    }

    interface GridItemProps {
        children?: React.ReactNode;
        area?: string;
        column?: string;
        columnStart?: number;
        columnEnd?: number;
        row?: string;
        rowStart?: number;
        rowEnd?: number;
        align?: AlignItems;
        justify?: JustifyItems;
    }
}

export class Grid extends React.Component<ReactGridComponent.GridProps, any> {
    static Item: StyledComponent<"div", any, ReactGridComponent.GridItemProps, never>;
}

export let GridContainer: StyledComponent<"div", any, ReactGridComponent.GridProps, never>;
export let GridItem: StyledComponent<"div", any, ReactGridComponent.GridItemProps, never>;
export let GridRow: React.FunctionComponent<ReactGridComponent.GridRowProps>;