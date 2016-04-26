/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { Header }                           from "../../components";
import ScrollableTabView                    from "react-native-scrollable-tab-view";
import { Info, Card }                       from "../index";


class TabProfile extends React.Component {

    render() {
        return (
            <ScrollableTabView renderTabBar={() => <Header text="Profilo"/>}>
                <Info/>
                <Card/>
            </ScrollableTabView>
        );
    };

}

export default TabProfile;