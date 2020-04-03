import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Theme from '../../constants/Theme';
import NHSStyle from '../../constants/NHSStyle';

const Avatar = () =>{
    return(
        <View style={styles.profilePicShadow}>
            <View style={styles.imageContainer}>
                <Image style={styles.profilePic} source={{uri: 'https://randomuser.me/api/portraits/men/17.jpg'}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profilePicShadow: {
        borderWidth:4,
        borderColor: NHSStyle.rgbaTeal20.backgroundColor,
        borderRadius: 20,
    },  
    imageContainer: {
        borderWidth: 2,
        borderColor: Theme.color.white,
        borderRadius: 20,
        overflow: 'hidden',
    },
    profilePic: {
        width:52,
        height:52
    },
});

export default Avatar;