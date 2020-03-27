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
    }
})
export default MeetingDetailScreen;