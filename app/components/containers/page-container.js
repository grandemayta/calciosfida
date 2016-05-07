/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React, { Component, ScrollView, View }                     from "react-native";
import { Header }                                                 from "../../components/widgets";
import { PageContainerStyle }                                     from "../../styles/containers";


class PageContainer extends Component {

    static propTypes = {
        enableScroll: React.PropTypes.bool
    };

    static defaultProps = {
        enableScroll: false
    };

    render() {
        return (
            <View style={PageContainerStyle.mainContainer}>
                <ScrollView scrollEnabled={this.props.enableScroll}>
                    {this.props.children}
                </ScrollView>
            </View>
        );
    };

}

export default PageContainer;