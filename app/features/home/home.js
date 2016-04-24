/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                         from "react-native";
import { Text, View }                                from "react-native";
import { Header, Button, Spacer }                    from "../../components";


class Home extends React.Component {

    render() {
        return (
            <View>
                <Header text="Home"/>
                <Spacer value="100"/>
                <Button page="profile" navigator={this.props.navigator} text="Profilo"/>
                <Spacer value="30"/>
                <Button text="Squadra"/>
                <Spacer value="30"/>
                <Button text="Sfide"/>
            </View>
        );
    };

}

export default Home;