/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                        from "react-native";
import { StyleSheet }               from "react-native";


let HeaderStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        paddingTop: 20,
        backgroundColor: "#03A9F4"
    },
    text: {
        flex: 6,
        alignItems: "center",
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 20
    },
    backButton: {
        flex: 1,
        paddingLeft: 10
    },
    menuButton: {
        flex: 1,
        textAlign: "right",
        paddingRight: 10
    }
});


export default HeaderStyle;