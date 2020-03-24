import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomHeaderButton from '../../components/ui/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Background from '../../components/Background';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const ListMeetingScreen = (props) =>{
    return(
        <Background>
            <View style={styles.headerContainer}>
                <View style={styles.textContainer}>
                    <Text style={NHSStyle.mediumHeader}>Hi John,</Text>
                    <Text style={NHSStyle.bigText}>
                        April, 25 Monday  <Ionicons name='md-calendar' size={22} color={Theme.color.grey1} />
                    </Text>
                </View>
                <View style={styles.profilePicShadow}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.profilePic} source={{uri: 'https://randomuser.me/api/portraits/men/17.jpg'}} />
                    </View>
                </View>
            </View>
            <View style={styles.calendarContainer}>
                <Agenda 
                    items={{
                        '2020-03-24': [{name: 'item 1 - any js object'}],
                        '2020-03-25': [{name: 'item 2 - any js object', height: 80}],
                        '2020-03-26': [],
                        '2020-03-27': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
                    }}
                />
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
        width: 280,
    },
    profilePicShadow: {
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 10,
    },  
    imageContainer: {
        marginLeft: 5,
        borderWidth: 5,
        borderColor: Theme.color.white,
        borderRadius: 20,
        overflow: 'hidden',
    },
    profilePic: {
        width:80,
        height:80
    },
    calendarContainer: {
        backgroundColor: 'white',
        height: '82%',
        width: '100%',
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    calendarTheme: {}
});

export default ListMeetingScreen;