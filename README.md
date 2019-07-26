# react-styled-flexgrid
![Size](https://img.shields.io/github/repo-size/sillvva/react-styled-flexgrid)
![License](https://img.shields.io/github/license/sillvva/react-styled-flexgrid.svg)
![Version](https://img.shields.io/github/tag/sillvva/react-styled-flexgrid.svg)
![LastCommit](https://img.shields.io/github/last-commit/sillvva/react-styled-flexgrid.svg)


A Package for CSS Grid and Flexbox React Components

## Demo

[![Edit react-styled-flexgrid](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-styled-flexgrid-hoesk?fontsize=14)

## Table of Contents

1. [Breakpoints](#breakpoints)
2. [CSS Grid](#css-grid)
   * [The Grid Component](#the-grid-component)
   * [The Grid.Row Component](#the-gridrow-component)
   * [The Grid.Item Component](#the-griditem-component)
3. [Flexbox](#flexbox)
   * [The Flex Component](#the-flex-component)
   * [The Flex.Item Component](#the-flexitem-component)
4. [Change Log](#change-log)

---

## Breakpoints

**react-styled-grid** allows you to specify different configurations for your grid and flexbox components for different screen sizes. The breakpoints used are as follows:

| Breakpoint | Screen Width |
|------------|--------------|
| xs         | >= 0px +     |
| sm         | >= 576px +   |
| md         | >= 768px +   |
| lg         | >= 992px +   |
| xl         | >= 1199px +  |

#### Using Breakpoints

For each of the props of the `Flex` and `Flex.Item` components, you can define a different value for each breakpoint. Each breakpoint defines the properties for the screen width listed or higher. If you define a higher break point, it's values will take precedent. If you define the `xs` breakpoint, but no others, then it wil be treated the same as having no breakpoints.

For example: 

```xml
<Flex justify={{xs: "right", md: "center"}}></Flex>
```

# CSS Grid

For more detailed information on how CSS Grid works, visit this [complete guide](https://css-tricks.com/snippets/css/complete-guide-grid/).

The CSS Grid components are made of three parts: `Grid`, `Grid.Row`, and `Grid.Item`. Here is a grid of ratings that adds a second column at larger screen sizes:

## CSS Grid Example

```xml
const Ratings = (props) => {
    const columnBuilder = (columns) => {
        return Array(columns).fill("1fr 110px").join(" ");
    };

    return (
        <Grid
            colGap={{xs: 5, lg: 30}}
            rowGap={{xs: 5, lg: 10}}
            columns={{xs: columnBuilder(1), lg: columnBuilder(2)}}>
            {Array(2).fill(1).map((col, i) => (
                <Grid.Row key={"ratings" + i}>
                    <Grid.Item show={{xs: i === 0, lg: true}}>
                        <h5>Skill</h5>
                    </Grid.Item>
                    <Grid.Item justify="right" show={{xs: i === 0, lg: true}}>
                        <h5>Rating</h5>
                    </Grid.Item>
                </Grid.Row>
            ))}
            <RatedItem name="Angular" rating={3} />
            <RatedItem name="Bootstrap Framework" rating={5} />
            <RatedItem name="CSS3" rating={5} />
            <RatedItem name="Express" rating={3.5} />
            <RatedItem name="HTML5" rating={5} />
            <RatedItem name="JavaScript" rating={5} />
            <RatedItem name="jQuery" rating={5} />
            <RatedItem name="JSON" rating={5} />
            <RatedItem name="Node.Js" rating={3.5} />
            <RatedItem name="PHP" rating={4} />
            <RatedItem name="PhpStorm" rating={4} />
            <RatedItem name="React" rating={4} />
            <RatedItem name="SASS / SCSS" rating={4} />
            <RatedItem name="TypeScript" rating={3.5} />
        </Grid>
    );
};
```

## The `Grid` Component

### Global Props

* `as` - define the flex container as a specific element, by tag name.
   * Default: `"div"`
* `style` - define additional inline styles
* `className` - add additional css classes

### Grid Props

* `inline` - (Type: `Boolean`) determines whether to use `display: grid` or `display: inline-grid`;
* `columns` - defines the column sizes for the grid
   * Type: `String` - Example: `"1fr 110px 1fr 110px"`
   * Type: `Array` - Example: `["1fr", 110, "1fr", 110]`
   * `{min: Integer | String}` - creates equal width columns with a minimum width. Items in a grid with this type of column definition will wrap.
* `rows` - defines the row sizes for the grid.
   * Type: `String` - Example: `"100px 100px"`
   * Type: `Array` - Example: `[100, "100px"]`
* `areas` - defines a grid template by referencing the names of the grid areas which are specified with the `area` prop of the `Grid.Item` component. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.
   * Type: `String[][]` - Example: `[["Header", "Header"],["Sidebar", "Body"]]`
* `autoColWidth` and `autoRowHeight` - (`Integer | String`) defines the cell size for sections of a grid not defined by `columns` and `rows`. For example, if a grid had 5 items in a grid of `columns={[100, 100]} rows={[100, 100]}`, then `autoRowHeight` would define the height of the 5th item as it is placed into a third undefined row.
* `flow` - If you have grid items that you don't explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items. This property controls how the auto-placement algorithm works.
   * Default: `"row"`
   * `row` - tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary
   * `column` - tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
   * `row dense` and `column dense` - tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later
* `gap` - (Type: `Integer | String`) defines the gap between cells in CSS units
* `colGap` - (Type: `Integer | String`) defines the gap between cell columns in CSS units
* `rowGap` - (Type: `Integer | String`) defines the gap between cell rows in CSS units
* `align` - Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. This property aligns the grid along the vertical (column) axis.
   * `start` - aligns the grid to be flush with the start edge of the grid container
   * `end` - aligns the grid to be flush with the end edge of the grid container
   * `center` - aligns the grid in the center of the grid container
   * `stretch` - resizes the grid items to allow the grid to fill the full height of the grid container
   * `space-around` - places an even amount of space between each grid item, with half-sized spaces on the far ends
   * `space-between` - places an even amount of space between each grid item, with no space at the far ends
   * `space-evenly` - places an even amount of space between each grid item, including the far ends
* `justify` - Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. This property aligns the grid along the horizontal (row) axis.
   * `start` - aligns the grid to be flush with the start edge of the grid container
   * `end` - aligns the grid to be flush with the end edge of the grid container
   * `center` - aligns the grid in the center of the grid container
   * `stretch` - resizes the grid items to allow the grid to fill the full height of the grid container
   * `space-around` - places an even amount of space between each grid item, with half-sized spaces on the far ends
   * `space-between` - places an even amount of space between each grid item, with no space at the far ends
   * `space-evenly` - places an even amount of space between each grid item, including the far ends
* `alignItems` - Aligns grid items along the vertical (column) axis. This value applies to all grid items inside the container.
   * Default: `"stretch"`
   * `start` - aligns items to be flush with the start edge of their cell
   * `end` - aligns items to be flush with the end edge of their cell
   * `center` - aligns items in the center of their cell
   * `stretch` - fills the whole width of the cell
* `justifyItems` - Aligns grid items along the horizontal (row) axis. This value applies to all grid items inside the container.
   * Default: `"stretch"`
   * `start` - aligns items to be flush with the start edge of their cell
   * `end` - aligns items to be flush with the end edge of their cell
   * `center` - aligns items in the center of their cell
   * `stretch` - fills the whole width of the cell
* `width` - (Type: `Integer | String`) The width of the grid container in CSS units
* `height` - (Type: `Integer | String`) The height of the grid container in CSS units
* `show` - (Type: `Boolean`) controls whether the grid container is present
* `itemProps` - defines a global set of props for the immediate children of this component.

## The `Grid.Row` Component

This is simply a higher order component for rendering an array of multiple grid items as seen in the example above.

## The `Grid.Item` Component

### Global Props

* `as` - define the flex container as a specific element, by tag name.
   * Default: `"div"`
* `style` - define additional inline styles
* `className` - add additional css classes

### Grid.Item Props

* `area` - (Type: `String`) gives an item a name so that it can be referenced by a template created with the `areas` prop of the `Grid` component.
* `column` - (Type: `String`) same as `[columnStart] / [columnEnd]`
* `columnStart` - (Type: `Integer | String`) determines a grid item's location within the grid by referring to specific grid lines.
* `columnEnd` - (Type: `Integer | String`) determines a grid item's location within the grid by referring to specific grid lines.
* `row` - (Type: `String`) same as `[rowStart] / [rowEnd]`
* `rowStart` - (Type: `Integer | String`) determines a grid item's location within the grid by referring to specific grid lines.
* `rowEnd` - (Type: `Integer | String`) determines a grid item's location within the grid by referring to specific grid lines.
* `align` - (Type: `String`) aligns a grid item inside a cell along the vertical (column) axis. This value applies to a grid item inside a single cell.
   * Default: `"stretch"`
   * `start` - aligns item to be flush with the start edge of their cell
   * `end` - aligns item to be flush with the end edge of their cell
   * `center` - aligns item in the center of their cell
   * `stretch` - fills the whole width of the cell 
* `justify` - (Type: `String`) aligns a grid item inside a cell along the horizontal (row) axis. This value applies to a grid item inside a single cell.
   * Default: `"stretch"`
   * `start` - aligns item to be flush with the start edge of their cell
   * `end` - aligns item to be flush with the end edge of their cell
   * `center` - aligns item in the center of their cell
   * `stretch` - fills the whole width of the cell
* `width` - (Type: `Integer | String`) The width of the grid item in CSS units
* `height` - (Type: `Integer | String`) The height of the grid item in CSS units
* `show` - (Type: `Boolean`) controls whether the grid item is present
* `itemProps` - defines a global set of props for the immediate children of this component.

# Flexbox

For more information on how flexbox works, visit this [complete guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

The Flexbox components are made of two parts: `Flex` and `Flex.Item`. Here is a navbar example of flexbox usage:

## Flexbox Example
```xml
const Navbar = (props) => {
    const navbarHeight = 60;

    return (
        <Flex as="header" height={navbarHeight} alignItems="center" className="navbar">
            <Flex.Item width={100}>Logo</Flex.Item>
            <Flex.Item 
                as="nav" 
                flex={{ min: "auto", grow: 1 }} 
                itemProps={{ alignItems: "center", height: navbarHeight, inline: true }}>
                <Flex as="a" href="/services">
                    Services
                </Flex>
                <Flex as="a" href="/pricing">
                    Services
                </Flex>
            </Flex.Item>
            <Flex.Item>
                <Flex as="a" href="/account" alignItems="center" height={navbarHeight}>
                    Account
                </Flex>
            </Flex.Item>
        </Flex>
    );
};
```

## The `Flex` Component

This is the flexbox container component.

### Global Props

* `as` - define the flex container as a specific element, by tag name.
   * Default: `"div"`
* `style` - define additional inline styles
* `className` - add additional css classes

### Flex Props

* `inline` - (Type: `Boolean`) determines whether to use `display: flex` or `display: inline-flex`;
* `dir` - defines the direction of the main axis
   * Default: `"row"`
   * `row` - left to right in `ltr`; right to left in `rtl`
   * `row-reverse` - right to left in `ltr`; left to right in `rtl`
   * `column` - same as `row` but top to bottom
   * `column-reverse` - same as `row-reverse` but bottom to top
* `wrap` - defines the wrapping behavior
   * Default: `"nowrap"`
   * `nowrap` - all flex items will be on one line
   * `wrap` - flex items will wrap onto multiple lines, from top to bottom
   * `wrap-reverse` - flex items will wrap onto multiple lines from bottom to top
* `justify` - defines the alignment along the main axis
    * Default: `"flex-start"`
    * `flex-start` - items are packed toward the start of the main axis (see `dir`)
    * `flex-end` - items are packed toward the end of the main axis (see `dir`)
    * `center` - items are centered along the main axis
    * `space-between` - items are evenly distributed on the main axis; first item is on the start line, last item on the end line.
    * `space-around` - items are evenly distributed on the main axis with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
    * `space-evenly` - items are distributed so that the spacing between any two items (and the space to the edges) is equal.
* `align` - This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how `justify` aligns individual items within the main-axis. **Note:** this property has no effect when items are not wrapped.
    * Default: `"stretch"`
    * `flex-start` - lines packed to the start of the container
    * `flex-end` - lines packed to the end of the container
    * `center` - lines packed to the center of the container
    * `space-between` - lines evenly distributed; the first line is at the start of the container while the last one is at the end
    * `space-around` - lines evenly distributed with equal space around each line
    * `stretch` - lines stretch to take up the remaining space
* `alignItems` - defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the `justify` version for the cross-axis (perpendicular to the main-axis).
    * Default: `"stretch"`
    * `stretch` - stretch to fill the container (still respect min-width/max-width)
    * `flex-start` - cross-start margin edge of the items is placed on the cross-start line
    * `flex-end` - cross-end margin edge of the items is placed on the cross-end line
    * `center` - items are centered in the cross-axis
    * `baseline` - items are aligned such as their baselines align
* `width` - (Type: `Integer | String`) The width of the flex container in CSS units
* `height` - (Type: `Integer | String`) The height of the flex container in CSS units
* `show` - (Type: `Boolean`) controls whether the flex container is present
* `itemProps` - defines a global set of props for the immediate children of this component.

#### The difference between `align` and `alignItems`:

`align` aligns rows of items when wrapping occurs perpendicular to the main axis.

`alignItems` aligns items in each row perpendicular to the main axis of that row.

## The `Flex.Item` Component

### Global Props

* `as` - define the flex item as a specific element, by tag name.
   * Default: `"div"`
* `style` - define additional inline styles
* `className` - add additional css classes

### Flex.Item Props

* `order` - controls the order in which a flex item appears in the flex container.
   * Type: `Integer`
* `flex` - defines the size of the flex item
   * Type: `Integer` - a unitless value that serves as the flex item's ratio of available space inside the flex container. 
   * `{min: Integer | String, grow: Integer}`
      * `min` - the minimum width of the flex item in CSS units
      * `grow` - the ratio of available space it grows to inside the flex container. If set to 0, the item will remain a fixed width.
   * `{max: Integer | String, shrink: Integer}`
      * `max` - the maximum width of the flex item in CSS units
      * `shrink` - defines the ability for a flex item to shrink. If set to 0, the item will remain a fixed width.
* `grow` - the ratio of available space it grows to inside the flex container.
* `shrink` - defines the ability for a flex item to shrink.
* `basis` - defines the default size of an element before the remaining space is distributed.
* `align` - defines how the flex item is laid out perpendicular to the main axis.
    * Default: `"stretch"`
    * `stretch` - stretch to fill the container (still respect min-width/max-width)
    * `flex-start` - cross-start margin edge of the items is placed on the cross-start line
    * `flex-end` - cross-end margin edge of the items is placed on the cross-end line
    * `center` - items are centered in the cross-axis
    * `baseline` - items are aligned such as their baselines align
* `width` - (Type: `Integer | String`) The width of the flex item in CSS units
* `height` - (Type: `Integer | String`) The height of the flex item in CSS units
* `show` - (Type: `Boolean`) controls whether the flex item is present
* `itemProps` - defines a global set of props for the immediate children of this component.

# Change Log

| Date       | Version | Description |
|------------|---------|-------------|
| 07-23-2019 | 1.0.0   | Initial commit.<br>Includes CSS Grid support. |
| 07-25-2019 | 1.1.0   | Flexbox added.<br>Breakpoint support added.<br>`show`, `inline`, and `itemProps` props added.<br>Documentation added. |
