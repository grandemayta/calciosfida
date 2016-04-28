/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { TabContainer }                     from "../../components/containers";
import { Info, Card }                       from "../index";


class TabProfile extends React.Component {

    render() {
        return (
            <TabContainer>
                <Info/>
                <Card/>
            </TabContainer>
        );
    };

}

export default TabProfile;