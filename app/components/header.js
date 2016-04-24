/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                                      from "react-native";
import { StyleSheet, View,  Text }                                from "react-native";
import HeaderStyle                                                from "../styles/header";
import Icon                                                       from "react-native-vector-icons/FontAwesome";


class Header extends React.Component {

    render() {
        return (
            <View style={HeaderStyle.container}>
                <Icon style={HeaderStyle.backButton} name="chevron-left" size={26} color="#FFFFFF"/>
                <Text style={HeaderStyle.text}>{this.props.text}</Text>
                <Icon style={HeaderStyle.menuButton} name="bars" size={26} color="#FFFFFF"/>
            </View>
        );
    };

}

export default Header;