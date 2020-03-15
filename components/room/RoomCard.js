import React from 'react';
import {View, Platform, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import Theme from '../../constants/Theme';
import NHSStyle from '../../constants/NHSStyle';
import {Ionicons} from '@expo/vector-icons';
import FeatureIcon from './FeatureIcon';
/**
 * Lists rooms in a card format.
 * Used to list rooms after search.
 * @param {*} props 
 */
const RoomCard = (props) =>{
    let TouchableComponent = TouchableOpacity;

    // A little fix for android devices to provide ripple effect on room card press
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback
    }

    return(
        <View style={styles.roomCardContainer}>
            <TouchableComponent onPress={props.onViewDetail} useForeground>
                <View style={styles.roomCard}>
                    <View style={styles.roomCardHeader}>
                        <Text style={[NHSStyle.smallText]}>{props.building}</Text>
                        <Text style={[NHSStyle.header]}>{props.name}, {props.floor}. floor</Text>
                    </View>
                    <View style={styles.roomCardBody}>
                        <View style={styles.roomImageContainer}>
                            <Image style={styles.roomImage} source={{uri: props.images[0]}} />
                        </View>
                        <View style={styles.roomInfoContainer}>
                            <View style={styles.itemContainer}>
                                <Ionicons name='md-contact' size={25} color={Theme.color.teal} />
                                <Text style={[NHSStyle.mediumText, styles.featureText]}>{props.capacity} Seats</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Ionicons name='ios-pin' size={25} style={{paddingLeft:3}} color={Theme.color.teal} />
                                <Text style={[NHSStyle.mediumText, styles.featureText, {paddingLeft:9}]}>WV1 3AB,{'\n'}Wolverhampton</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <FeatureIcon icons={props.features} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    roomCardContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    roomCard: {
        width: 380,
        height: 215,
        backgroundColor: Theme.color.white,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        overflow: 'hidden' // Fixes android flat corner issue during ripple effect
    },
    roomCardHeader: {
        borderLeftWidth: 3,
        borderLeftColor: Theme.color.purple1,
        height: 34,
        marginTop: 15,
        paddingLeft: 15
    },
    roomCardBody: {
        marginTop: 17,
        flexDirection: 'row'
    },
    roomImageContainer: {
        marginLeft: 18,
        borderRadius: 10,
        width: 173,
        height: 132,
        overflow: 'hidden'
    },
    roomImage: {
        width: '100%',
        height: '100%'
    },
    roomInfoContainer: {
        marginLeft: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },  
    featureText: {
        paddingLeft: 6,
        paddingTop: 6
    },
    iconContainer: {
        paddingLeft: 3
    }
});

export default RoomCard;