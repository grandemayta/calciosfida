/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React, { Component, TouchableOpacity, Text }               from "react-native";
import { ButtonStyle }                                            from "../../styles/widgets";
import { Actions }                                                from "react-native-router-flux";


class Button extends Component {

    static propTypes = {
        page: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <TouchableOpacity onPress={Actions[this.props.page]} style={ButtonStyle.btn}>
                <Text style={ButtonStyle.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    };

}

export default Button;