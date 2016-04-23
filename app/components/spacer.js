/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { StyleSheet, View }                                       from "react-native";


let Style = StyleSheet.create({
    default: {alignSelf: "center"},
    _10: {height: 10},
    _20: {height: 20},
    _30: {height: 30},
    _40: {height: 40},
    _50: {height: 50},
    _60: {height: 60},
    _70: {height: 70},
    _80: {height: 80},
    _90: {height: 90},
    _100: {height: 100}
});


class Spacer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    };

    setHeight() {
        switch (this.state.value) {
            case "10":
                return Style._10;
            case "20":
                return Style._20;
            case "30":
                return Style._30;
            case "40":
                return Style._40;
            case "50":
                return Style._50;
            case "60":
                return Style._60;
            case "70":
                return Style._70;
            case "80":
                return Style._80;
            case "90":
                return Style._90;
            case "100":
                return Style._100;

            default:
                return Style._10;
        }
    };

    render() {
        return (
            <View style={[Style.default, this.setHeight()]}/>
        );
    };

}

export default Spacer;