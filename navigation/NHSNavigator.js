import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/user/LoginScreen';
import ListRoomScreen, { ListRoomNavOptions } from '../screens/room/ListRoomScreen';
import RoomDetailScreen, { RoomDetailNavOptions } from '../screens/room/RoomDetailScreen';
import Theme from '../constants/Theme';
import EditRoomScreen from '../screens/room/EditRoomScreen';
import AddRoomScreen from '../screens/room/AddRoomScreen';

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

const NHSStackNavigator = createStackNavigator();

export const NHSNavigator = () => {
    return (
        <NHSStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
            {/* <NHSStackNavigator.Screen 
                name="Login" 
                component={LoginScreen} 
                options= {{headerShown: false}}
            /> */}
            <NHSStackNavigator.Screen 
                name="ListRoom" 
                component={ListRoomScreen}
                options={ListRoomNavOptions} 
            />
            <NHSStackNavigator.Screen 
                name="RoomDetail" 
                component={RoomDetailScreen}
                options={RoomDetailNavOptions} 
            />
        </NHSStackNavigator.Navigator>
    );
}

const NHSAdminStackNavigator = createStackNavigator();

export const NHSAdminNavigator = () => {
    return(
        <NHSAdminStackNavigator screenOptions={defaultNavigationOptions}>
            <NHSAdminStackNavigator.Screen 
                name="EditRoom"
                component={EditRoomScreen} />
            <NHSAdminStackNavigator.Screen 
                name="AddRoom"
                component={AddRoomScreen} />
        </NHSAdminStackNavigator>
    );
}