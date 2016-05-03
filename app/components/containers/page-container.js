/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { ScrollView, View }                                       from "react-native";
import { Header }                                                 from "../../components/widgets";
import { PageContainerStyle }                                     from "../../styles/containers";


class PageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enableScroll: props.hasOwnProperty("enableScroll") ? (props.enableScroll == "true") : true
        };
    };

    render() {
        return (
            <View style={PageContainerStyle.mainContainer}>
                <ScrollView scrollEnabled={this.state.enableScroll}>
                    {this.props.children}
                </ScrollView>
            </View>
        );
    };

}

export default PageContainer;