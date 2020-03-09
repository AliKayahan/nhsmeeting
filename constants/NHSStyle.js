/** 
 * App-wide styling goes here
*/
import React from 'react';
import {StyleSheet} from 'react-native';
import Theme from '../constants/Theme';

// We are creating a generic style object to be used with all components.
export default NHSStyle = StyleSheet.create({
    input: {
        width: 320
    },  
    header1: {
        fontFamily: 'Frutiger',
        fontSize: 44,
        color: Theme.color.black,
        lineHeight: 50
    }   
});