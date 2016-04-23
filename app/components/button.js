/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { StyleSheet, TouchableOpacity, Text }                     from "react-native";


let Style = StyleSheet.create({
    btn: {
        alignSelf: "center",
        width: 200,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 2,
        backgroundColor: "#4CAF50"
    },
    text: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 18
    }
});


class Button extends React.Component {

    render() {
        return (
            <TouchableOpacity style={Style.btn}>
                <Text style={Style.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    };

}

export default Button;