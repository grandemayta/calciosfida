/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { ScrollView, StyleSheet, Text, View }                       from "react-native";
import { Header }                           from "../../components";
import ScrollableTabView                    from "react-native-scrollable-tab-view";

let Style = StyleSheet.create({
    default: {
        flex: 1,
        height: 60
    }
});

class Profile extends React.Component {

    render() {
        return (
            <ScrollableTabView tabBarPosition="top" initialPage={0} renderTabBar={() => <Header text="Profilo"/>}>
                <ScrollView>
                    <View>
                        <Text>Info</Text>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View>
                        <Text>Scheda</Text>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        );
    };

}

export default Profile;