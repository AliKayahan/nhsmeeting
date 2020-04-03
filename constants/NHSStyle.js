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
        lineHeight: 45
    },
    subTitle: {
        fontFamily: 'Frutiger-Light',
        fontSize: 18,
        color: Theme.color.black,
        lineHeight: 20
    },
    headerBold: {
        fontFamily: 'Frutiger-Bold',
        fontSize: 17,
        color: Theme.color.black,
        lineHeight:22
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
    mediumLightText: {
        fontFamily: 'Frutiger-Light',
        fontSize: 16,
        color: Theme.color.grey5,
    },
    bigText: {
        fontFamily: 'Frutiger',
        fontSize: 22,
        color: Theme.color.grey1
    },
    buttonLabel: {
        fontFamily: 'Frutiger-Light-Bold',
        fontSize: 16,
        paddingTop: 12
    },
    rgbaTeal20: {
        backgroundColor: "rgba(65, 182, 230, 0.20)",
    },
    rgbaPurple20: {
        backgroundColor: "rgba(174, 37, 115, 0.20)",
    },
    rgbaYellow20: {
        backgroundColor: "rgba(255, 184, 28, 0.20)",
    },
});