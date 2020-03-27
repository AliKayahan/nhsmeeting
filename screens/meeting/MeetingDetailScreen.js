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
    
})
export default MeetingDetailScreen;