import React from "react";
import { Flex, Grid } from "./index";
import './example.css';

function App() {
    return (
        <div className="App">
            <Flex height={60} alignItems="center" className="navbar">
                <Flex.Item width={100}>Logo</Flex.Item>
                <Flex.Item as="nav" flex={{ min: "auto", grow: 1 }}>
                    <Flex as="ul" height={60} alignItems="center">
                        <Flex.Item as="li">
                            Services
                        </Flex.Item>
                        <Flex.Item as="li">
                            Pricing
                        </Flex.Item>
                    </Flex>
                </Flex.Item>
                <Flex.Item>User</Flex.Item>
            </Flex>
            <br />
            <Grid columns={{xs: [ 100, 100 ], md: [ 100, 100, 100, 100 ]}} gap={5} alignItems="stretch" justifyItems="stretch">
                <Grid.Item height={100} style={{ background: "grey" }} />
                <Grid.Item height={100} style={{ background: "grey" }} />
                <Grid.Item height={100} style={{ background: "grey" }} />
                <Grid.Item height={100} style={{ background: "grey" }} />
            </Grid>
        </div>
    );
}

export default App;
