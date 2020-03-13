import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Theme from  '../../constants/Theme';

/**
 * The component renders icons given as string array.
 * Please note that the icon names should match with Ionicon set;
 * https://expo.github.io/vector-icons/
 * @param {*} props 
 */
// TODO: We should add limit property to limit the count of icons listed at a time.
const FeatureIcon = (props) =>{
    return(
        <View style={styles.iconListContainer}>
            {props.icons.map((icon, key) => (
                <View style={styles.icon} key={key}>
                    <Ionicons name={icon} size={18} color={Theme.color.purple2} />
                </View> 
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    iconListContainer:{
        flexDirection: 'row',
        marginTop: 12
    },  
    icon: {
        width: 30,
        height: 30,
        backgroundColor: Theme.color.grey2,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    }
});

export default FeatureIcon;