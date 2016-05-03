/**
 *
 *  @author: Gabriel Mayta
 *
 */

"use strict";

import React                                from "react-native";
import { TabContainer }                     from "../../../components/containers";
import Info                                 from "../../tab-profile-info/scenes/info";
import Card                                 from "../../tab-profile-card/scenes/card";


class TabProfile extends React.Component {

    render() {
        return (
            <TabContainer>
                <Info tabLabel="Informazioni"/>
                <Card tabLabel="Scheda"/>
            </TabContainer>
        );
    };

}

export default TabProfile;