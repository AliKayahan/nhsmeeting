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

const TabStackNavigator = createStackNavigator();

export const TabStackNavigatorComponent = (props) => {
    return (
        <TabStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
            {/* <NHSStackNavigator.Screen 
                name="Login" 
                component={LoginScreen} 
                options= {{headerShown: false}}
            /> */}
            <TabStackNavigator.Screen 
                name="Home" 
                component={TabNavigator}
                options={ListRoomNavOptions} 
            />
            <TabStackNavigator.Screen 
                name="RoomDetailScreen" 
                component={RoomDetailScreen}
                options={RoomDetailNavOptions} 
            />
        </TabStackNavigator.Navigator>
    );
}
const DrawerStackNavigator = createStackNavigator();

export const DrawerStackNavigatorComponent = (props) => {
    return (
        <DrawerStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
            <DrawerStackNavigator.Screen 
                name="ListRoom" 
                component={ListRoomScreen}
                options={ListRoomNavOptions} 
            />
            <DrawerStackNavigator.Screen 
                name="RoomDetailScreen" 
                component={RoomDetailScreen}
                options={RoomDetailNavOptions} 
            />
        </DrawerStackNavigator.Navigator>
    );
}
const NHSAdminStackNavigator = createStackNavigator();

export const NHSAdminNavigator = (props) => {
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

const NHSDrawerNavigatior = createDrawerNavigator();

export const NHSSideNavigatior = (props) =>{
    return(
        <NHSDrawerNavigatior.Navigator
            drawerContentOptions={{
                activeTintColor: Theme.color.blue1,
            }}
            drawerContent={
                props => {
                    return(
                        <View style={{flex:1, paddingTop:20}}>
                            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
                                <DrawerItemList {...props}>
                                    <Text>Hello</Text>
                                </DrawerItemList>
                            </SafeAreaView>
                        </View>
                    );
                }
            }
        >
            <NHSDrawerNavigatior.Screen 
                name="Home" 
                component={TabStackNavigatorComponent} 
            /> 
            <NHSDrawerNavigatior.Screen 
                name="ListRoom" 
                component={ListRoomScreen}
                options={ListRoomNavOptions}
            />                
        </NHSDrawerNavigatior.Navigator>
    );
}