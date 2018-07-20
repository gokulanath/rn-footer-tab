import React from "react";
import { TabNavigator } from "react-navigation";
import { Footer, FooterTab, Button, Text as NBText } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../views/Home';
import First from '../views/First';
import Second from '../views/Second';

export const Tab = TabNavigator({
  Home: {screen: Home},
  First: {screen: First},
  Second: {screen: Second}
}, 
{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarComponent: props => {
    return (
        <Footer>
            <FooterTab>
                <Button
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate("Home")}>
                    <Icon  name="cloud-off" size={30} color="#FFFFFF" />
                    <NBText>Home</NBText>
                </Button>
                <Button
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate("First")}>
                     <Icon  name="settings" size={30} color="#FFFFFF" />
                    <NBText>Settings</NBText>
                </Button>
                <Button
                    vertical
                    active={props.navigationState.index === 2}
                    onPress={() => props.navigation.navigate("Second")}>
                     <Icon  name="help" size={30} color="#FFFFFF" />
                    <NBText>Help</NBText>
                </Button>
            </FooterTab>
        </Footer>
    );
}

});