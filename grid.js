import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpointWrapper, px, fr } from "@sillvva/react-styled-flexgrid/common";
const showContainerBuilder = (inline, show) => (show == null || show === true ? (inline ? "inline-grid" : "grid") : "none");
const showItemBuilder = show => (show == null || show === true ? "block" : "none");
const columnBuilder = columns => {
    if (columns) {
        if (columns instanceof Array) {
            return columns
                .map(width => {
                    return px(width);
                })
                .join(" ");
        } else if (columns instanceof Object) {
            return `repeat(auto-fit,minmax(${px(columns.min)},1fr));`;
        } else return fr(columns);
    }
    return null;
};
const rowBuilder = rows => {
    if (rows) {
        if (rows instanceof Array) {
            return rows
                .map(width => {
                    return px(width);
                })
                .join(" ");
        } else {
            return fr(rows);
        }
    }
    return null;
};
const areaBuilder = areas => {
    if (areas) {
        const maxColumns = areas.reduce((prev, cur) => {
            return Math.max(prev, cur.length);
        }, 0);
        return areas
            .map(row => {
                const lastColumn = row.slice(-1)[0];
                return [...row, ...Array(maxColumns - row.length).fill(lastColumn)].join(" ");
            })
            .join('" "');
    }
    return null;
};
const ptGridWidth = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const ptColumns = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(ptGridWidth),
    PropTypes.shape({
        min: ptGridWidth
    })
]);
const ptRows = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(ptGridWidth)]);
const ptAreas = PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string));
const ptFlow = PropTypes.oneOf(["row", "column", "dense", "row dense", "column dense"]);
const ptAlign = PropTypes.oneOf(["center", "start", "end", "stretch", "space-around", "space-between", "space-evenly", "inherit", "initial", "unset"]);
const ptAlignItems = PropTypes.oneOf(["center", "start", "end", "stretch", "inherit", "initial", "unset"]);
const ptJustifyItems = PropTypes.oneOf(["center", "start", "end", "stretch", "inherit", "initial", "unset"]);
const gridItemPropTypes = {
    area: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string
        })
    ]),
    column: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string
        })
    ]),
    columnStart: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),
    columnEnd: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),
    row: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string
        })
    ]),
    rowStart: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),
    rowEnd: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),
    align: PropTypes.oneOfType([
        ptAlignItems,
        PropTypes.shape({
            xs: ptAlignItems,
            sm: ptAlignItems,
            md: ptAlignItems,
            lg: ptAlignItems,
            xl: ptAlignItems
        })
    ]),
    justify: PropTypes.oneOfType([
        ptJustifyItems,
        PropTypes.shape({
            xs: ptJustifyItems,
            sm: ptJustifyItems,
            md: ptJustifyItems,
            lg: ptJustifyItems,
            xl: ptJustifyItems
        })
    ]),
    width: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    height: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    show: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            xs: PropTypes.bool,
            sm: PropTypes.bool,
            md: PropTypes.bool,
            lg: PropTypes.bool,
            xl: PropTypes.bool
        })
    ]),
    itemProps: PropTypes.object
};
const gridPropTypes = {
    inline: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            xs: PropTypes.bool,
            sm: PropTypes.bool,
            md: PropTypes.bool,
            lg: PropTypes.bool,
            xl: PropTypes.bool
        })
    ]),
    columns: PropTypes.oneOfType([
        ptColumns,
        PropTypes.shape({
            xs: ptColumns,
            sm: ptColumns,
            md: ptColumns,
            lg: ptColumns,
            xl: ptColumns
        })
    ]),
    rows: PropTypes.oneOfType([
        ptRows,
        PropTypes.shape({
            xs: ptRows,
            sm: ptRows,
            md: ptRows,
            lg: ptRows,
            xl: ptRows
        })
    ]),
    autoColWidth: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    autoRowHeight: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    areas: PropTypes.oneOfType([
        ptAreas,
        PropTypes.shape({
            xs: ptAreas,
            sm: ptAreas,
            md: ptAreas,
            lg: ptAreas,
            xl: ptAreas
        })
    ]),
    flow: PropTypes.oneOfType([
        ptFlow,
        PropTypes.shape({
            xs: ptFlow,
            sm: ptFlow,
            md: ptFlow,
            lg: ptFlow,
            xl: ptFlow
        })
    ]),
    gap: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    colGap: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    rowGap: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    align: PropTypes.oneOfType([
        ptAlign,
        PropTypes.shape({
            xs: ptAlign,
            sm: ptAlign,
            md: ptAlign,
            lg: ptAlign,
            xl: ptAlign
        })
    ]),
    justify: PropTypes.oneOfType([
        ptAlign,
        PropTypes.shape({
            xs: ptAlign,
            sm: ptAlign,
            md: ptAlign,
            lg: ptAlign,
            xl: ptAlign
        })
    ]),
    alignItems: PropTypes.oneOfType([
        ptAlignItems,
        PropTypes.shape({
            xs: ptAlignItems,
            sm: ptAlignItems,
            md: ptAlignItems,
            lg: ptAlignItems,
            xl: ptAlignItems
        })
    ]),
    justifyItems: PropTypes.oneOfType([
        ptJustifyItems,
        PropTypes.shape({
            xs: ptJustifyItems,
            sm: ptJustifyItems,
            md: ptJustifyItems,
            lg: ptJustifyItems,
            xl: ptJustifyItems
        })
    ]),
    width: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    height: PropTypes.oneOfType([
        ptGridWidth,
        PropTypes.shape({
            xs: ptGridWidth,
            sm: ptGridWidth,
            md: ptGridWidth,
            lg: ptGridWidth,
            xl: ptGridWidth
        })
    ]),
    show: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            xs: PropTypes.bool,
            sm: PropTypes.bool,
            md: PropTypes.bool,
            lg: PropTypes.bool,
            xl: PropTypes.bool
        })
    ]),
    itemProps: PropTypes.object
};
export const GridContainer = styled.div`
    ${({ flow }) => breakpointWrapper("grid-auto-flow", flow)}
    ${({ columns }) => breakpointWrapper("grid-template-columns", columns, columnBuilder)}
    ${({ rows }) => breakpointWrapper("grid-template-rows", rows, rowBuilder)}
    ${({ autoColWidth }) => breakpointWrapper("grid-auto-columns", autoColWidth, px)}
    ${({ autoRowHeight }) => breakpointWrapper("grid-auto-rows", autoRowHeight, px)}
    ${({ areas }) => breakpointWrapper("grid-template-areas", areas, areaBuilder)}
    ${({ gap }) => breakpointWrapper("grid-gap", gap, px)}
    ${({ colGap }) => breakpointWrapper("column-gap", colGap, px)}
    ${({ rowGap }) => breakpointWrapper("row-gap", rowGap, px)}
    ${({ align }) => breakpointWrapper("align-content", align)}
    ${({ justify }) => breakpointWrapper("justify-content", justify)}
    ${({ alignItems }) => breakpointWrapper("align-items", alignItems)}
    ${({ justifyItems }) => breakpointWrapper("justify-items", justifyItems)}
    ${({ width }) => breakpointWrapper("width", width, px)}
    ${({ height }) => breakpointWrapper("height", height, px)}
    ${({ height }) => breakpointWrapper("line-height", height, px)}
    ${({ show, inline }) => breakpointWrapper("display", show, showContainerBuilder.bind(this, inline))}
`;
GridContainer.propTypes = gridPropTypes;
export const GridItemContainer = styled.div`
    ${({ area }) => breakpointWrapper("grid-area", area)} 
    ${({ column }) => breakpointWrapper("grid-column", column)} 
    ${({ columnStart }) => breakpointWrapper("grid-column-start", columnStart, Math.abs)} 
    ${({ columnEnd }) => breakpointWrapper("grid-column-end", columnEnd, Math.abs)} 
    ${({ row }) => breakpointWrapper("grid-row", row)} 
    ${({ rowStart }) => breakpointWrapper("grid-row-start", rowStart, Math.abs)} 
    ${({ rowEnd }) => breakpointWrapper("grid-row-end", rowEnd, Math.abs)}
    ${({ align }) => breakpointWrapper("align-self", align)}
    ${({ justify }) => breakpointWrapper("justify-self", justify)}
    ${({ width }) => breakpointWrapper("width", width, px)}
    ${({ height }) => breakpointWrapper("height", height, px)}
    ${({ height }) => breakpointWrapper("line-height", height, px)}
    ${({ show }) => breakpointWrapper("display", show, showItemBuilder)}
`;
GridItemContainer.propTypes = gridItemPropTypes;
export class Grid extends React.Component {
    static get Row() {
        return props => React.createElement(React.Fragment, props, props.children);
    }
    static get Item() {
        return props => {
            return React.createElement(GridItemContainer, props, React.Children.map(props.children, child => {
                return child.type ? React.cloneElement(child, props.itemProps) : child;
            }));
        };
    }
    render() {
        return React.createElement(GridContainer, this.props, React.Children.map(this.props.children, child => {
            return child.type ? React.cloneElement(child, this.props.itemProps) : child;
        }));
    }
}
