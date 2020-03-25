import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NHSStyle from '../../constants/NHSStyle';
import Theme from '../../constants/Theme';
import {Ionicons} from '@expo/vector-icons';

const MeetingCard = (props) =>{
    return(
        <TouchableOpacity   
            style={styles.agendaItem} 
            onPress={props.onGotoDetail}>
            <View style={{...styles.itemColorBorder, backgroundColor: props.item.color}}></View>
            <View style={{padding:10}}>
                <Text style={NHSStyle.headerBold}>Month Planning</Text>
                <Text style={[NHSStyle.mediumLightText, {color: Theme.color.black}]}>
                    10:00 AM -11:00
                    <Text style={{color: Theme.color.grey5, fontSize: 14}}> | </Text> 
                    Room 505
                </Text>
                <View style={styles.location}>
                    <View>
                        <Ionicons name="ios-pin" size={18} color={Theme.color.teal} />
                    </View>
                    <View  style={styles.locationText}>
                        <Text style={NHSStyle.smallText}>Apple Office, WV1 3AB</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    agendaItem: {
        backgroundColor: Theme.color.grey2,
        flex: 1,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 17,
        color: Theme.color.black,
        flexDirection: 'row',
        overflow: "hidden",
      },
      location:{
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center"
      },
      locationText:{
        paddingLeft: 5, 
        paddingTop: 8
      },
      itemColorBorder:{
        width: 4,
        height: 90
      }
});

export default MeetingCard;