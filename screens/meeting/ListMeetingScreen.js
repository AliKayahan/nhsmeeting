import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomHeaderButton from '../../components/ui/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Background from '../../components/Background';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';

const ListMeetingScreen = (props) =>{
    return(
        <Background>
            <View style={styles.headerContainer}>
                <View style={styles.textContainer}>
                    <Text style={NHSStyle.mediumHeader}>Hi John,</Text>
                    <Text style={NHSStyle.bigText}>April, 25 Monday</Text>
                </View>
                <View style={styles.profilePicShadow}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.profilePic} source={{uri: 'https://randomuser.me/api/portraits/men/17.jpg'}} />
                    </View>
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 20,
        paddingLeft: 20,
        flex:1,
        flexDirection: 'row'
    },
    textContainer:{
        width: 280
    },
    profilePicShadow: {
        shadowColor: Theme.color.black,
        shadowOpacity: 0.25,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 10,
    },  
    imageContainer: {
        marginLeft: 5,
        borderWidth: 5,
        borderColor: Theme.color.white,
        borderRadius: 10,
        overflow: 'hidden',
    },
    profilePic: {
        width:80,
        height:80
    }
});

export default ListMeetingScreen;