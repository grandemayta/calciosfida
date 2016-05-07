/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React, { Component, Text, View }                 from "react-native";
import { PageContainer }                                from "../../../components/containers";

class Card extends Component {

    static defaultProps = {
        enableScroll: true
    };

    render() {
        return (
            <PageContainer enableScroll={this.props.enableScroll}>
                <Text>Player Card</Text>
            </PageContainer>
        );
    };

}

export default Card;