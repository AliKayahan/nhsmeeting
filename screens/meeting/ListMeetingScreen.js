import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomHeaderButton from '../../components/ui/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Background from '../../components/Background';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import MeetingCard from '../../components/ui/MeetingCard';

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
                        '2020-03-24': [{name: 'item for 24 - any js object', color: '#AE2573'}],
                        '2020-03-25': [{name: 'item for 25 - any js object', color: '#FFC649'}],
                        '2020-03-26': [],
                        '2020-03-27': [{name: 'item for 27 A', color: '#AE2573'}, {name: 'item for 27 B', color: '#79BE23'}],
                        '2020-03-28': [{name: 'item for 28 A', color: '#0072CE'}, {name: 'item for 28 B', color: '#41B6E6'}],
                        '2020-03-29': [{name: 'item for 29 A', color: '#AE2573'}, {name: 'item for 29 B', color: '#FFC649'}],
                        '2020-03-30': [{name: 'item for 30 A', color: '#FFC649'}, {name: 'item for 30 B', color: '#AE2573'}],
                    }}
                    // Callback that gets called when items for a certain month should be loaded (month became visible)
                    //loadItemsForMonth={(month) => {console.log(month)}}
                    // Callback that fires when the calendar is opened or closed
                    //onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                    // Callback that gets called on day press
                    //onDayPress={(day)=>{console.log('day pressed')}}
                    // Callback that gets called when day changes while scrolling agenda list
                    //onDayChange={(day)=>{console.log('day changed')}}
                    // Initially selected day
                    selected={'2020-03-25'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2020-03-23'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2020-03-30'}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Specify how each item should be rendered in agenda
                    renderItem={(item, firstItemInDay) => {
                        return (
                            <MeetingCard 
                                item={item} 
                                onGotoDetail={() => {
                                        props.navigation.navigate('MeetingDetailScreen',{
                                            item: item
                                        })
                                    }} />);
                                }}
                    // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
                    //renderDay={(day, item) => {return (<View />);}}
                    // Specify how empty date content with no items should be rendered
                    //renderEmptyDate={() => {return (<View />);}}
                    // Specify how agenda knob should look like
                    //renderKnob={() => {return (<View />);}}
                    // Specify what should be rendered instead of ActivityIndicator
                    //renderEmptyData = {() => {return (<View />);}}
                    // Specify your item comparison function for increased performance
                    //rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                    // Hide knob button. Default = false
                    //hideKnob={true}
                    // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                    //markedDates={{
                    //    '2012-05-16': {selected: true, marked: true},
                    //    '2012-05-17': {marked: true},
                    //    '2012-05-18': {disabled: true}
                    //}}
                    // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
                    //disabledByDefault={true}
                    // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
                    //onRefresh={() => console.log('refreshing...')}
                    // Set this true while waiting for new data from a refresh
                    refreshing={false}
                    // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
                    //refreshControl={null}
                    // Agenda theme
                    theme={{
                        backgroundColor: Theme.color.white,
                        agendaKnobColor: Theme.color.grey2,
                       'stylesheet.agenda.main':{knobContainer: styles.knobContainer} 
                        //'stylesheet.agenda.list': { content: { borderTopColor: Theme.color.grey4, borderTopWidth: 1 } },
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
    knobContainer: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        height: 24,
        bottom: 0,
        backgroundColor: Theme.color.white,
        alignItems: 'center',
        borderBottomColor: Theme.color.grey4, 
        borderBottomWidth: 1 
    }
});

export default ListMeetingScreen;