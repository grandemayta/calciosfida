/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React, { Component, View }                                 from "react-native";
import { SpacerStyle }                                            from "../../styles/widgets";


class Spacer extends Component {

    static propTypes = {
        size: React.PropTypes.string.isRequired
    };

    setHeight() {
        switch (this.props.size) {
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