/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                            from "react-native";
import { Text, View }                                   from "react-native";
import { PageContainer }                                from "../../../components/containers";

class Info extends React.Component {

    render() {
        return (
            <PageContainer>
                <Text>Player Info</Text>
            </PageContainer>
        );
    };

}

export default Info;