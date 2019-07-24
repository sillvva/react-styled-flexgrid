const React = require("react");
const styled = require("styled-components");
const PropTypes = require("prop-types");
const px = n => (typeof n === "number" ? n + "px" : n.length > 0 ? n : "0");
const fr = n => (typeof n === "number" ? `repeat(${n}, 1fr)` : n);
const alignment = (type, align, justify) => {
    return align && justify
        ? `place-${type}: ${align === justify ? align : `${align} ${justify}`};`
        : [ align && `align-${type}: ${align};`, justify && `justify-${type}: ${justify};` ].join(" ");
};
const GridContainer = styled.div`
    display: grid;
    ${({ flow }) => flow && `grid-auto-flow: ${flow};`}
    ${({ columns }) => {
        if (columns) {
            if (columns instanceof Array) {
                return `grid-template-columns: ${columns
                    .map(width => {
                        return px(width);
                    })
                    .join(" ")}`;
            }
            else if (columns instanceof Object) {
                return `grid-template-columns: repeat(auto-fit,minmax(${px(columns.min)},1fr));`;
            }
            else return `grid-template-columns: ${fr(columns)};`;
        }
    }}}
    ${({ rows }) => {
        if (rows) {
            if (rows instanceof Array) {
                return `grid-template-rows: ${rows
                    .map(width => {
                        return px(width);
                    })
                    .join(" ")};`;
            }
            else {
                return `grid-template-rows: ${fr(rows)};`;
            }
        }
    }}
    ${({ minRowHeight }) => {
        if (minRowHeight) return `grid-auto-rows: ${minRowHeight};`;
        return null;
    }}
    ${({ areas }) => {
        if (areas) {
            const maxColumns = areas.reduce((prev, cur) => {
                return Math.max(prev, cur.length);
            }, 0);
            return `grid-template-areas: "${areas
                .map(row => {
                    const lastColumn = row.slice(-1)[0];
                    return [ ...row, ...Array(maxColumns - row.length).fill(lastColumn) ].join(" ");
                })
                .join('" "')}";`;
        }
        return null;
    }}
    ${({ gap }) => gap && `grid-gap: ${px(gap)};`}
    ${({ colGap }) => colGap && `column-gap: ${px(colGap)};`}
    ${({ rowGap }) => rowGap && `row-gap: ${px(rowGap)};`}
    ${({ align, justify }) => (align || justify) && alignment("content", align, justify)}
    ${({ alignItems, justifyItems }) => (alignItems || justifyItems) && alignment("items", alignItems, justifyItems)}
    ${({ height }) => height && `height: ${px(height)};`}
`;
GridContainer.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])),
        PropTypes.shape({
            min: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
        })
    ]),
    rows: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])) ]),
    minRowHeight: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    areas: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    flow: PropTypes.onef([ "row", "column", "dense", "row dense", "column dense" ]),
    gap: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    colGap: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    rowGap: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    align: PropTypes.oneOf([
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
        "first baseline",
        "last baseline",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "unset"
    ]),
    justify: PropTypes.oneOf([
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "normal",
        "baseline",
        "first baseline",
        "last baseline",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "unset"
    ]),
    alignItems: PropTypes.oneOf([
        "auto",
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "first baseline",
        "last baseline",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "unset"
    ]),
    justifyItems: PropTypes.oneOf([
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "left",
        "right",
        "normal",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "unset"
    ]),
    height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
};
const GridRow = props => <React.Fragment>{props.children}</React.Fragment>;
const GridItem = styled.div`
    ${({ area }) => area && `grid-area: ${area};`} 
    ${({ column }) => column && `grid-column: ${column};`} 
    ${({ columnStart }) => columnStart && `grid-column-start: ${Math.abs(columnStart)};`} 
    ${({ columnEnd }) => columnEnd && `grid-column-end: ${Math.abs(columnEnd)};`} 
    ${({ row }) => row && `grid-row: ${row};`} 
    ${({ rowStart }) => rowStart && `grid-row-start: ${Math.abs(rowStart)};`} 
    ${({ rowEnd }) => rowEnd && `grid-row-end: ${Math.abs(rowEnd)};`} 
    ${({ align, justify }) => (align || justify) && alignment("self", align, justify)};
    ${({ width }) => width && `width: ${px(width)};`}
    ${({ height }) => height && `height: ${px(height)};`}
`;
GridItem.propTypes = {
    area: PropTypes.string,
    column: PropTypes.string,
    columnStart: PropTypes.number,
    columnEnd: PropTypes.number,
    row: PropTypes.string,
    rowStart: PropTypes.number,
    rowEnd: PropTypes.number,
    align: PropTypes.oneOf([
        "auto",
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "first baseline",
        "last baseline",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "unset"
    ]),
    justify: PropTypes.oneOf([
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "left",
        "right",
        "normal",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "unset"
    ]),
    width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
};

class Grid extends React.Component {
    static get Row() {
        return GridRow;
    }
    static get Item() {
        return GridItem;
    }
    render() {
        return <GridContainer {...this.props}>{this.props.children}</GridContainer>;
    }
}

module.exports = {
    Grid
};
