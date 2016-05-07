/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React, { Component, Text, View }                 from "react-native";
import { PageContainer }                                from "../../../components/containers";

class Info extends Component {

    static defaultProps = {
        enableScroll: true
    };

    render() {
        return (
            <PageContainer enableScroll={this.props.enableScroll}>
                <Text>Player Info</Text>
            </PageContainer>
        );
    };

}

export default Info;