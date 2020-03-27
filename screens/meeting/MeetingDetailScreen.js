import React from 'react';
import {View, Text, StyleSheet, Image, Svg,Path} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/ui/HeaderButton';
import Background from '../../components/Background';
import Theme from '../../constants/Theme';
import NHSStyle from '../../constants/NHSStyle';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const MeetingDetailScreen = props => {
    return(
        <Background>
                <View style={styles.meetingContainer}>
                    <View style={styles.meetingTextContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.borderLine}></View>                   
                            <Text style={[NHSStyle.bigTextBold, {color: Theme.color.black, paddingTop: 10}]}>Month Planning</Text>
                        </View>
                        <Text style={[NHSStyle.mediumText, {paddingLeft: 15, paddingTop: 5}]}>Business Meeting</Text>
                    </View>
                </View>
                <View style={styles.detailContainer}>
                <ScrollView>
                    <View style={styles.memberHeader}>
                        <Text style={[NHSStyle.header, {color: Theme.color.purple1}]}>Members (9)</Text>
                    </View>
                    <View style={styles.memberContainer}>
                        <View style={styles.memberContent}>
                            <View style={styles.imageContainer}>
                                <View  style={[styles.statusContainer, styles.statusFounder]}>
                                    <Text style={styles.statusIcon}></Text>
                                </View>
                                <Image source={{uri: 'https://randomuser.me/api/portraits/men/17.jpg'}} style={styles.profilePic} />
                            </View>
                            <View style={styles.imageContainer}>
                                <View  style={[styles.statusContainer, styles.statusCancel]}>
                                    <Text style={styles.statusIcon}></Text>
                                </View>
                                <Image source={{uri: 'https://randomuser.me/api/portraits/men/17.jpg'}} style={styles.profilePic} />
                            </View>
                            <View style={styles.imageContainer}>
                                <View  style={[styles.statusContainer, styles.statusOk]}>
                                    <Text style={styles.statusIcon}></Text>
                                </View>
                                <Image source={{uri: 'https://randomuser.me/api/portraits/men/17.jpg'}} style={styles.profilePic} />
                            </View>
                            <View style={styles.imageContainer}>
                                <View  style={[styles.statusContainer, styles.statusOk]}>
                                    <Text style={styles.statusIcon}></Text>
                                </View>
                                <Image source={{uri: 'https://randomuser.me/api/portraits/men/17.jpg'}} style={styles.profilePic} />
                            </View>
                            <View style={styles.allMemberContainer}>
                                <Text style={styles.allMemberText}>+ 5</Text>
                            </View>
                        </View>
                        <View style={styles.addMemberContainer}>
                            <View style={{paddingTop: 5}}>
                                <Ionicons name="ios-add" size={25} color={Theme.color.green1}  />
                            </View>
                        </View>
                    </View>
                    <View style={styles.goingContainer}>
                        <Text style={NHSStyle.header}>Are you going ?</Text>
                        <View style={styles.goingIcon}>
                            <Ionicons name="ios-checkmark-circle" size={45} color={Theme.color.green1} style={{paddingRight: 25}} />
                            <Ionicons name="ios-close-circle" size={45} color={Theme.color.red}  />
                        </View>
                    </View>
                    <View style={styles.meetingDetailContainer}>
                        <View style={[styles.meetingDetailIcon, styles.rgbaTeal20]}>
                            <Ionicons name="ios-calendar" size={23} color={Theme.color.teal} />
                        </View>
                        <View style={styles.meetingDetailText}>
                            <Text style={[NHSStyle.smallText, {lineHeight: 21}]}>Monday, April 10</Text>
                            <Text  style={NHSStyle.header}>10:00 AM -11:00 AM</Text>
                        </View>
                    </View>
                    <View style={styles.meetingDetailContainer}>
                        <View style={[styles.meetingDetailIcon, styles.rgbaPurple20]}>
                            <Ionicons name="ios-pin" size={23} color={Theme.color.purple1} />
                        </View>
                        <View style={styles.meetingDetailText}>
                            <Text style={[NHSStyle.smallText, {lineHeight: 21}]}>Location</Text>
                            <Text  style={NHSStyle.header}>WV1 3EB, Wolverhampton</Text>
                        </View>
                    </View>
                    <View style={styles.meetingDetailContainer}>
                        <View style={[styles.meetingDetailIcon, styles.rgbaYellow20]}>
                            <Ionicons name="ios-pin" size={23} color={Theme.color.yellow} />
                        </View>
                        <View style={styles.meetingDetailText}>
                            <View style={styles.meetingFlex}>
                                <Text style={[NHSStyle.smallText, {lineHeight: 21}]}>Apple Office</Text>
                                <Text style={[NHSStyle.smallText, {lineHeight: 21}]}>10 seat</Text>
                            </View>
                            <View style={styles.meetingFlex}>
                                <Text  style={NHSStyle.header}>Room 505, 3. floor</Text>
                                <View style={styles.featureIconContainer}>
                                    {/* <FeatureIcon  /> */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={[NHSStyle.header, {lineHeight: 25}]}>Description</Text>
                        <Text  style={NHSStyle.smallText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor.</Text>
                    </View>
                </ScrollView>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    meetingContainer:{
        flexDirection: "row",
        alignItems: "center",
        height: 115,
        padding:15,
    },
    meetingTextContainer: {
        height: 90,
        paddingTop:15,
        paddingBottom: 15
    },
    detailContainer: {
        backgroundColor: Theme.color.white,
        width: "100%",
        height: "100%",
        borderRadius: 20,
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width:14, height: 0},
        shadowRadius: 10,
    },
    headerContainer:{
        flexDirection: "row",
        alignItems: "center",
    },
    borderLine:{
        backgroundColor: Theme.color.yellow,
        width:3,
        height:25,
        marginRight:10
    },
    memberHeader:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20
    },
    memberContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    memberContent:{
        flexDirection: "row",
    },
    imageContainer:{
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 10,
        marginRight: 9
    },
    profilePic: {
        width: 52,
        height: 52,
        borderRadius: 15,
    },
    allMemberContainer:{
        backgroundColor: Theme.color.grey2,
        width: 52,
        height: 52,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    allMemberText: {
        color: Theme.color.purple2,
        fontSize: 16
    },
    addMemberContainer:{
        borderColor: Theme.color.green1,
        borderWidth: 1,
        borderStyle: "dotted",
        width: 50,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    statusContainer:{
        overflow: "hidden",
        width: 20,
        height: 20,
        borderRadius: 10,
        position: "absolute",
        top: -3,
        left: 40,
        zIndex: 99
    },
    statusIcon:{
        width: 20,
        height: 20,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: Theme.color.white,
    },
    statusFounder: {
        backgroundColor: Theme.color.blue1
    },
    statusCancel: {
        backgroundColor: Theme.color.red
    },
    statusOk: {
        backgroundColor: Theme.color.green1
    },
    goingContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Theme.color.lightgrey1,
        backgroundColor: Theme.color.background2,
        padding: 15,
        paddingVertical: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"space-between"
    },
    goingIcon:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"space-between"
    },
    meetingDetailContainer: {
        flexDirection: "row",
        height:83,
        borderBottomWidth: 1,
        borderColor: Theme.color.lightgrey1,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "center",
        width: "100%",
    },
    meetingDetailIcon: {
        width:52,
        height:52,       
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    meetingDetailText: {
        paddingTop:10,
        width: "83.5%" ,
    },
    meetingFlex: {
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    featureIconContainer:{
        flexDirection: "row",
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
    descContainer:{
        padding: 15,
    },
})
export default MeetingDetailScreen;