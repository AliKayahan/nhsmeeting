import React from 'react';
import {NHSNavigator} from './NHSNavigator';
import {NavigationContainer} from '@react-navigation/native';


const NHSNavigationContainer = (props) =>{
    return (
        <NavigationContainer>
            <NHSNavigator />
        </NavigationContainer>
    );
};

export default NHSNavigationContainer;