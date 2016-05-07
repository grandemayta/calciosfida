/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React, { Component, ScrollView }                           from "react-native";
import ScrollableTabView                                          from "react-native-scrollable-tab-view";
import { Header }                                                 from "../../components/widgets";


class TabContainer extends Component {

    render() {
        return (
            <ScrollableTabView>
                {this.props.children}
            </ScrollableTabView>
        );
    };

}

export default TabContainer;