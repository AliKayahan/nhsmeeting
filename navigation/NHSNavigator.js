import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import LoginScreen from '../screens/user/LoginScreen';
import ListRoomScreen, { ListRoomNavOptions } from '../screens/room/ListRoomScreen';
import RoomDetailScreen, { RoomDetailNavOptions } from '../screens/room/RoomDetailScreen';
import Theme from '../constants/Theme';
import EditRoomScreen from '../screens/room/EditRoomScreen';
import AddRoomScreen from '../screens/room/AddRoomScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, SafeAreaView } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListMeetingScreen, { ListMeetingNavOptions } from '../screens/meeting/ListMeetingScreen';
import SearchRoomScreen from '../screens/room/SearchRoomScreen';
import { DefaultHeaderOptions } from './DefaultHeaderOptions';

// The default NHSNavigator styling and customization settings goes here
const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Theme.color.blue1
    },
    cardStyle:{
        backgroundColor: Theme.color.background2
    },
    headerTintColor: Theme.color.white
}
// This is the bottom tab navigator located at home screen
// TODO: update this to match with bottom tab navigation design
const Tab = createBottomTabNavigator();

export const TabNavigator = (props) => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="List Meetings" 
                component={ListMeetingScreen}
            />
            <Tab.Screen
                name="Search Room" 
                component={SearchRoomScreen} 
            />
        </Tab.Navigator>
    );
}
// We are creating the main side drawer navigation
// The first screen is forwarded to bottom tab navigation
const NHSDrawerNavigatior = createDrawerNavigator();

export const NHSSideNavigatior = (props) =>{
    return(
        <NHSDrawerNavigatior.Navigator>
            <NHSDrawerNavigatior.Screen 
                name="Tabs" 
                component={TabNavigator}
            />
            <NHSDrawerNavigatior.Screen 
                name="List Rooms" 
                component={ListRoomScreen}
            />                
        </NHSDrawerNavigatior.Navigator>
    );
}
// This is the site-wide navigation stack
// We should include most of the navigation elements here
const MainStackNavigator = createStackNavigator();

export const MainNavigator = (props) => {
    return (
        <MainStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
            <MainStackNavigator.Screen 
                name="Home" 
                component={NHSSideNavigatior}
                options={DefaultHeaderOptions}
            />
            <MainStackNavigator.Screen 
                name="RoomDetailScreen" 
                component={RoomDetailScreen}
            />
        </MainStackNavigator.Navigator>
    );
}

/**
 * Please note that DefaultHeaderOptions is used for generic headbar rendering
 */