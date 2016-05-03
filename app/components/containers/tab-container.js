/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { ScrollView }                                             from "react-native";
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
            <ScrollableTabView >
                {this.props.children}
            </ScrollableTabView>
        );
    };

}

export default TabContainer;