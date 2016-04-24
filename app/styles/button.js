/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                        from "react-native";
import { StyleSheet }               from "react-native";


let ButtonStyle = StyleSheet.create({
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

export default ButtonStyle;