/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { Scene }                            from "react-native-router-flux";
import { MainContainer }                    from "../../components/containers";
import { Header }                           from "../../components/widgets";
import { Home }                             from "./scenes";


export default (

    <Scene key="home" component={()=>
        <MainContainer>
            <Header title="Home"/>
            <Home/>
        </MainContainer>
    }/>

);