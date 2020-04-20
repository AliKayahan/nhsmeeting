import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import { createTopTabNavigator } from 'react-natigation';
import Background from '../../components/Background';
import Theme from '../../constants/Theme';
import NHSStyle from '../../constants/NHSStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';



const TabNavigator = createTopTabNavigator({
    All, 
    Available, 
    Unavailable,
  });

<Searchbar/>

const All = props => {
    return(
        <Background>
            <View style = {styles.membersContainer}>
            <ScrollView>
                <View style={styles.contactContainer}>
                    <View style={[styles.profilePic]}>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                    </View>  
                    <View style={styles.membersDetail}>
                        <View style={style.flexcontact}>
                            <View style={[NHSStyle.header, {lineHeight: 21}]}>Bill Anderson</View>
                            <Text style={styles.notif}></Text>
                        </View>

                        <View style={style.flexcontact}>
                            <Text style={NHSStyle.smallText}>Manager</Text>
                            <View style={styles.host}>
                                <Text style={[NHSStyle.smallText, color={Theme: teal}]}>Host</Text>
                            </View>
                        </View>
                    </View> 
                </View>

                <View style={styles.contactContainer}>
                    <View style={[styles.profilePic]}>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                    </View>  
                    <View style={styles.membersDetail}>
                        <Text style={NHSStyle.smallText}>Bill Anderson</Text>
                        <Text style={[NHSStyle.header, {lineHeight: 21}]}>Manager</Text>
                    </View>                 
                </View>

                <View style={styles.contactContainer}>
                    <View style={[styles.profilePic]}>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                    </View> 
                    <View style={styles.membersDetail}>
                        <Text style={NHSStyle.smallText}>Bill Anderson</Text>
                        <Text style={[NHSStyle.header, {lineHeight: 21}]}>Manager</Text>
                    </View>                 
                </View>

                <View style={styles.contactContainer}>
                    <View style={[styles.profilePic]}>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                    </View>  
                    <View style={styles.membersDetail}>
                        <Text style={NHSStyle.smallText}>Bill Anderson</Text>
                        <Text style={[NHSStyle.header, {lineHeight: 21}]}>Manager</Text>
                    </View>                 
                </View>

                <View style={styles.contactContainer}>
                    <View style={[styles.profilePic]}>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}} style={styles.profilePic} />
                    </View>  

                    <View style={styles.membersDetail}>
                        <Text style={NHSStyle.smallText}>Bill Anderson</Text>
                        <Text style={[NHSStyle.header, {lineHeight: 21}]}>Manager</Text>
                    </View>                 
                </View>







                <View style={styles.contactContainer}>
                    <View  style={[styles.statusContainer, styles.statusFounder]}>
                        <Text style={styles.statusIcon}></Text>
                    </View>





                    <View style={styles.membersDetail}>
                        <Text style={NHSStyle.smallText}>Bill Anderson</Text>
                        <Text style={[NHSStyle.header, {lineHeight: 21}]}>Manager</Text>
                    </View>                 
                </View>

            </ScrollView>
            </View>
        </Background>

)}

const styles = StyleSheet.create({
    membersContainer: {
        flexDirection: "column",
        height: 60,
        padding:20,
        width: '100%',
        borderRadius: 5,
    },
    profilePic: {
        width:52,
        height:52,       
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    contactContainer: {
            backgroundColor: Theme.color.white,
            width: "100%",
            height: "100%",
            borderRadius: 10,
            shadowColor: Theme.color.grey4,
            shadowOpacity: 1,
            shadowOffset: {width:0, height: 3},
            shadowRadius: 4,
            elevation: 6,
    },
    flexcontact: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    host: {
        right: 10,
    },
    notif: {
        width: 10,
        height: 10,
        right: 10,
        padding: 20,
        borderRadius: '100%',
        backgroundColor: Theme.color.blue1,
    },
})

export default AllMembersScreen;