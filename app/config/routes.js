/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                          from "react-native";
import { Scene, Router }                              from "react-native-router-flux";
import Features                                       from "../features/features.module";


class Routes extends React.Component {

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