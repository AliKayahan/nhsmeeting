import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomHeaderButton from './HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';

export const BurgerMenu = (props) =>{
    return(
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title="Menu" 
                iconName="ios-menu"
                onPress={() => {
                    props.navData.navigation.dispatch(DrawerActions.toggleDrawer());
                }}
            />
        </HeaderButtons>
    );
};

export const NotificationBell = (props) => {
    return(
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title="Menu"
                iconName="ios-notifications"
                onPress={()=>{ }}
            />
        </HeaderButtons>
    )
}

const styles = StyleSheet.create({

});
