import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpointWrapper, px } from "./common";
const flexBuilder = flex => {
    if (flex) {
        if (typeof flex === "string" || typeof flex === "number") {
            return `${flex};`;
        } else {
            if (flex.min) {
                return `${flex.grow} 0 ${px(flex.min)};`;
            } else if (flex.max) {
                return `0 ${flex.shrink} ${px(flex.max)};`;
            } else {
                return `0 0 ${px(flex.exact)};`;
            }
        }
    }
    return null;
};
const showContainerBuilder = (show, inline) => (show == null || show === true ? (inline ? "inline-flex" : "flex") : "none");
const showItemBuilder = show => (show == null || show === true ? "block" : "none");
const ptFlexDir = PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]);
const ptFlexWrap = PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]);
const ptAlign = PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "inherit",
    "initial",
    "unset"
]);
const ptJustify = PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "inherit",
    "initial",
    "unset"
]);
const ptAlignItems = PropTypes.oneOf(["stretch", "flex-start", "flex-end", "center", "baseline", "inherit", "initial", "unset"]);
const ptFlexWidth = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const ptFIFlex = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
        min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        grow: PropTypes.number.isRequired
    }),
    PropTypes.shape({
        max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        shrink: PropTypes.number.isRequired
    }),
    PropTypes.shape({
        exact: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    })
]);
const flexItemPropTypes = {
    order: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),
    flex: PropTypes.oneOfType([
        ptFIFlex,
        PropTypes.shape({
            xs: ptFIFlex,
            sm: ptFIFlex,
            md: ptFIFlex,
            lg: ptFIFlex,
            xl: ptFIFlex
        })
    ]),
    grow: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),
    shrink: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),
    basis: PropTypes.oneOfType([
        ptFlexWidth,
        PropTypes.shape({
            xs: ptFlexWidth,
            sm: ptFlexWidth,
            md: ptFlexWidth,
            lg: ptFlexWidth,
            xl: ptFlexWidth
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
    width: PropTypes.oneOfType([
        ptFlexWidth,
        PropTypes.shape({
            xs: ptFlexWidth,
            sm: ptFlexWidth,
            md: ptFlexWidth,
            lg: ptFlexWidth,
            xl: ptFlexWidth
        })
    ]),
    height: PropTypes.oneOfType([
        ptFlexWidth,
        PropTypes.shape({
            xs: ptFlexWidth,
            sm: ptFlexWidth,
            md: ptFlexWidth,
            lg: ptFlexWidth,
            xl: ptFlexWidth
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
    itemProps: PropTypes.object,
    as: PropTypes.string
};
const flexPropTypes = {
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
    dir: PropTypes.oneOfType([
        ptFlexDir,
        PropTypes.shape({
            xs: ptFlexDir,
            sm: ptFlexDir,
            md: ptFlexDir,
            lg: ptFlexDir,
            xl: ptFlexDir
        })
    ]),
    wrap: PropTypes.oneOfType([
        ptFlexWrap,
        PropTypes.shape({
            xs: ptFlexWrap,
            sm: ptFlexWrap,
            md: ptFlexWrap,
            lg: ptFlexWrap,
            xl: ptFlexWrap
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
        ptJustify,
        PropTypes.shape({
            xs: ptJustify,
            sm: ptJustify,
            md: ptJustify,
            lg: ptJustify,
            xl: ptJustify
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
    width: PropTypes.oneOfType([
        ptFlexWidth,
        PropTypes.shape({
            xs: ptFlexWidth,
            sm: ptFlexWidth,
            md: ptFlexWidth,
            lg: ptFlexWidth,
            xl: ptFlexWidth
        })
    ]),
    height: PropTypes.oneOfType([
        ptFlexWidth,
        PropTypes.shape({
            xs: ptFlexWidth,
            sm: ptFlexWidth,
            md: ptFlexWidth,
            lg: ptFlexWidth,
            xl: ptFlexWidth
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
    itemProps: PropTypes.object,
    as: PropTypes.string
};
export default class Flex extends React.Component {
    static get Item() {
        return (props) => {
            const FlexItemContainer = styled(props.as ? props.as : 'div')`
                box-sizing: border-box;
                ${({ order }) => breakpointWrapper("order", order)}
                ${({ flex }) => breakpointWrapper("flex", flex, flexBuilder)}
                ${({ grow }) => breakpointWrapper("flex-grow", grow)}
                ${({ shrink }) => breakpointWrapper("flex-shrink", shrink)}
                ${({ basis }) => breakpointWrapper("flex-basis", basis, px)}
                ${({ align }) => breakpointWrapper("align-self", align)}
                ${({ width }) => breakpointWrapper("width", width, px)}
                ${({ height }) => breakpointWrapper("height", height, px)}
                ${({ height }) => breakpointWrapper("line-height", height, px)}
                ${({ show }) => breakpointWrapper("display", show, showItemBuilder)}
            `;
            FlexItemContainer.propTypes = flexItemPropTypes;
            return React.createElement(FlexItemContainer, props, React.Children.map(props.children, child => {
                return child.type ? React.cloneElement(child, props.itemProps) : child;
            }));
        };
    }
    render() {
        const FlexContainer = styled(this.props.as ? this.props.as : 'div')`
            box-sizing: border-box;
            ${({ dir }) => breakpointWrapper("flex-dir", dir)}
            ${({ wrap }) => breakpointWrapper("flex-wrap", wrap)}
            ${({ align }) => breakpointWrapper("align-content", align)}
            ${({ justify }) => breakpointWrapper("justify-content", justify)}
            ${({ alignItems }) => breakpointWrapper("align-items", alignItems)}
            ${({ width }) => breakpointWrapper("width", width, px)}
            ${({ height }) => breakpointWrapper("height", height, px)}
            ${({ height }) => breakpointWrapper("line-height", height, px)}
            ${({ show, inline }) => breakpointWrapper("display", show, showContainerBuilder, inline)}
        `;
        FlexContainer.propTypes = flexPropTypes;
        return React.createElement(FlexContainer, this.props, React.Children.map(this.props.children, child => {
            return child.type ? React.cloneElement(child, this.props.itemProps) : child;
        }));
    }
}
