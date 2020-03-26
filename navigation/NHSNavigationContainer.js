import React from 'react';
import {MainNavigator} from './NHSNavigator';
import {NavigationContainer} from '@react-navigation/native';


const NHSNavigationContainer = (props) =>{
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};

export default NHSNavigationContainer;