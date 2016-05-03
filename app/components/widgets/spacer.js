/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { StyleSheet, View }                                       from "react-native";
import { SpacerStyle }                                            from "../../styles/widgets";


class Spacer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: props.size
        };
    };

    setHeight() {
        switch (this.state.size) {
            case "10":
                return SpacerStyle._10;
            case "20":
                return SpacerStyle._20;
            case "30":
                return SpacerStyle._30;
            case "40":
                return SpacerStyle._40;
            case "50":
                return SpacerStyle._50;
            case "60":
                return SpacerStyle._60;
            case "70":
                return SpacerStyle._70;
            case "80":
                return SpacerStyle._80;
            case "90":
                return SpacerStyle._90;
            case "100":
                return SpacerStyle._100;
            default:
                return SpacerStyle._10;
        }
    };

    render() {
        return (
            <View style={[SpacerStyle.default, this.setHeight()]}/>
        );
    };

}

export default Spacer;