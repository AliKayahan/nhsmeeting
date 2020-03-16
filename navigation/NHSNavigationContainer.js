import React from 'react';
import {NHSSideNavigatior} from './NHSNavigator';
import {NavigationContainer} from '@react-navigation/native';


const NHSNavigationContainer = (props) =>{
    return (
        <NavigationContainer>
            <NHSSideNavigatior />
        </NavigationContainer>
    );
};

export default NHSNavigationContainer;