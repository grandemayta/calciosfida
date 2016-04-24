/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { StyleSheet, TouchableOpacity, Text }                     from "react-native";
import ButtonStyle                                                from "../styles/button";


class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: props.page,
            navigator: props.navigator
        };

    };

    handleNavigation() {
        this.state.navigator.push({id: this.state.page});
    };

    render() {
        return (
            <TouchableOpacity onPress={this.handleNavigation.bind(this)} style={ButtonStyle.btn}>
                <Text style={ButtonStyle.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    };

}

export default Button;