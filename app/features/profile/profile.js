/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { Text, View }                       from "react-native";
import ScrollableTabView                    from "react-native-scrollable-tab-view";


class Profile extends React.Component {

    render() {
        return (
            <ScrollableTabView>
                <View>
                    <Text>Info</Text>
                </View>
                <View>
                    <Text>Scheda</Text>
                </View>
            </ScrollableTabView>
        );
    };

}

export default Profile;