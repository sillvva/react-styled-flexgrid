const React = require("react");
const { Grid } = require(".");

const WindowsIcon = props => {
    return (
        <Grid
            columns={[ (props.size || 200) / 2, (props.size || 200) / 2 ]}
            rows={[ (props.size || 200) / 2, (props.size || 200) / 2 ]}
            gap={Math.min(2, (props.size || 200) / 40)}
            alignItems="center"
            justifyItems="center">
            <Grid.Item style={{ backgroundColor: "rgb(242, 80, 34)" }} width="100%" height="100%">
                &nbsp;
            </Grid.Item>
            <Grid.Item style={{ backgroundColor: "rgb(127, 186, 0)" }} width="100%" height="100%">
                &nbsp;
            </Grid.Item>
            <Grid.Item style={{ backgroundColor: "rgb(1, 164, 239)" }} width="100%" height="100%">
                &nbsp;
            </Grid.Item>
            <Grid.Item style={{ backgroundColor: "rgb(255, 185, 1)" }} width="100%" height="100%">
                &nbsp;
            </Grid.Item>
        </Grid>
    );
};

module.exports = WindowsIcon;
