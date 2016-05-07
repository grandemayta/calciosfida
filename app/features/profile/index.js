/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                         from "react-native";
import { Scene }                                     from "react-native-router-flux";
import { MainContainer, TabContainer }               from "../../components/containers";
import { Header }                                    from "../../components/widgets";
import { Info, Card }                                from "./scenes";


export default (

    <Scene key="profile" component={()=>
        <MainContainer>
            <Header title="Profilo"/>
            <TabContainer>
                <Info tabLabel="Informazioni"/>
                <Card tabLabel="Scheda"/>
            </TabContainer>
        </MainContainer>
    }/>

);