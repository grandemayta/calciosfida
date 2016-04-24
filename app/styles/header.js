/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                        from "react-native";
import { StyleSheet }               from "react-native";


let HeaderStyle = StyleSheet.create({
    default: {
        flex: 1,
        flexDirection: "row",
        height: 60,
        paddingTop: 20,
        backgroundColor: "#03A9F4"
    },
    text: {
        flex: 1,
        marginTop: 6,
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 20
    },
    backButton: {
        position: "absolute",
        paddingTop: 6,
        left: 10
    },
    menuButton: {
        position: "absolute",
        paddingTop: 6,
        right: 10
    }
});


export default HeaderStyle;