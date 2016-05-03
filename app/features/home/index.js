/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                            from "react-native";
import { Scene }                        from "react-native-router-flux";
import { Header }                       from "../../components/widgets";
import Home                             from "./scenes/home";


export default (

    <Scene key="home" navBar={Header}>
        <Scene key="homemain" component={Home}/>
    </Scene>

);