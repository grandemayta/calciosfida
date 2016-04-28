/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                         from "react-native";
import { View, Text }                                from "react-native";
import { PageContainer }                             from "../../components/containers";
import { Button, Spacer }                            from "../../components/widgets";


class Home extends React.Component {

    render() {
        return (
            <PageContainer title="Home" showHeader="true" enableScroll="false">
                <Spacer value="100"/>
                <Button page="profile" navigator={this.props.navigator} text="Profilo"/>
                <Spacer value="30"/>
                <Button text="Squadra"/>
                <Spacer value="30"/>
                <Button text="Sfide"/>
            </PageContainer>
        );
    };

}

export default Home;