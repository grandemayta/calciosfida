/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React, { Component }                           from "react-native";
import { Scene, Router }                              from "react-native-router-flux";
import Features                                       from "../features";


class Routes extends Component {

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar="true">
                    { Features.map((feature) => feature) }
                </Scene>
            </Router>
        );
    };

}

export default Routes;