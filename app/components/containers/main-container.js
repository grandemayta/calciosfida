/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React, { Component, ScrollView, View }                     from "react-native";
import { Header }                                                 from "../../components/widgets";
import { MainContainerStyle }                                     from "../../styles/containers";


class MainContainer extends Component {

    render() {
        return (
            <View style={MainContainerStyle.container}>
                {this.props.children}
            </View>
        );
    };


}

export default MainContainer;