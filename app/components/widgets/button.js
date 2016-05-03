/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { StyleSheet, TouchableOpacity, Text }                     from "react-native";
import { ButtonStyle }                                            from "../../styles/widgets";
import { Actions }                                                from "react-native-router-flux";


class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: props.page
        };
    };

    render() {
        return (
            <TouchableOpacity onPress={Actions[this.state.page]} style={ButtonStyle.btn}>
                <Text style={ButtonStyle.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    };

}

export default Button;