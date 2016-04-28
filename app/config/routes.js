/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { Scene, Router }                    from "react-native-router-flux";
import * as Features                        from "../features";
import { Header }                           from "../components/widgets";


class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar="true">
                    <Scene key="home" component={Features.Home}/>
                    <Scene key="profile" component={Features.TabProfile}/>
                </Scene>
            </Router>
        );
    };

}

export default Routes;