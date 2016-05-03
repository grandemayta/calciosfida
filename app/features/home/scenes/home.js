/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                         from "react-native";
import { View, Text }                                from "react-native";
import { PageContainer }                             from "../../../components/containers";
import { Button, Spacer }                            from "../../../components/widgets";


class Home extends React.Component {

    render() {
        return (
            <PageContainer enableScroll="false">
                <Button page="profile" text="Profilo"/>
                <Spacer size="30"/>
                <Button page="info" text="Squadra"/>
                <Spacer size="30"/>
                <Button page="challenge" text="Sfide"/>
            </PageContainer>
        );
    };

}

export default Home;