/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { ScrollView, View }                                       from "react-native";
import ScrollableTabView                                          from "react-native-scrollable-tab-view";
import { Header }                                                 from "../../components/widgets";


class TabContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        };
    };

    render() {
        return (
            <ScrollableTabView renderTabBar={() => <Header text={this.state.title}/>}>
                {this.props.children}
            </ScrollableTabView>
        );
    };

}

export default TabContainer;