import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Theme from '../../constants/Theme';

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
        shadowColor: Theme.color.black,
        shadowOpacity: 0.50,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 10,
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