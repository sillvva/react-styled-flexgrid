import React from "react";
import { Flex, Grid } from "./index";
import './example.css';

function App() {
    const menuHeight = 60;

    return (
        <div className="App">
            <Flex height={menuHeight} alignItems="center" className="navbar">
                <Flex.Item width={100}>Logo</Flex.Item>
                <Flex.Item as="nav" flex={{ min: "auto", grow: 1 }}>
                    <Flex as="ul" alignItems="center">
                        <Flex.Item as="li">
                            <Flex as="a" href="/services" alignItems="center" height={menuHeight}>
                                Services
                            </Flex>
                        </Flex.Item>
                        <Flex.Item as="li">
                        <Flex as="a" href="/pricing" alignItems="center" height={menuHeight}>
                                Services
                            </Flex>
                        </Flex.Item>
                    </Flex>
                </Flex.Item>
                <Flex.Item>
                    <Flex as="a" href="/account" alignItems="center" height={menuHeight}>
                        Account
                    </Flex>
                </Flex.Item>
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
