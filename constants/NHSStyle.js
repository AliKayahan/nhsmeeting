/** 
 * App-wide styling goes here
*/
import React from 'react';
import {StyleSheet} from 'react-native';
import Theme from '../constants/Theme';

// We are creating a generic style object to be used with all components.
export default NHSStyle = StyleSheet.create({
    input: {
        width: 320,
        marginVertical: 12
    },  
    bigHeader: {
        fontFamily: 'Frutiger',
        fontSize: 44,
        color: Theme.color.black,
        lineHeight: 50
    },
    mediumHeader: {
        fontFamily: 'Frutiger',
        fontSize: 34,
        color: Theme.color.black,
        lineHeight: 50
    },
    header: {
        fontFamily: 'Frutiger',
        fontSize: 18,
        color: Theme.color.black,
        lineHeight: 22
    },
    smallText: {
        fontFamily: 'Frutiger',
        fontSize: 14,
        color: Theme.color.grey1
    },
    mediumText: {
        fontFamily: 'Frutiger',
        fontSize: 16,
        color: Theme.color.grey1
    },
    bigText: {
        fontFamily: 'Frutiger',
        fontSize: 22,
        color: Theme.color.grey1
    }
});