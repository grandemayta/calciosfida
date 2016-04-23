/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { StyleSheet, View,  Text }                                from "react-native";


let Style = StyleSheet.create({
    default: {
        alignSelf: "stretch",
        height: 60,
        paddingTop: 20,
        backgroundColor: "#03A9F4"
    },
    text: {
        marginTop: 6,
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 20
    }
});


class Header extends React.Component {

    render() {
        return (
            <View style={Style.default}>
                <Text style={Style.text}>{this.props.text}</Text>
            </View>
        );
    };

}

export default Header;