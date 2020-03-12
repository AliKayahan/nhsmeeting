import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Theme from '../../constants/Theme';
import NHSStyle from '../../constants/NHSStyle';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

const RoomCard = (props) =>{
    return(
        <View style={styles.roomCardContainer}>
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
                        <FontAwesome name='glass' />
                    </View>
                </View>
            </View>
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
        height: 205,
        backgroundColor: Theme.color.white,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: Theme.color.grey4,
        shadowOpacity: .26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
    },
    roomCardHeader: {
        borderLeftWidth: 3,
        borderLeftColor: Theme.color.purple1,
        height: 34,
        marginTop: 10,
        paddingLeft: 15
    },
    roomCardBody: {
        marginTop: 14,
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

    }
});

export default RoomCard;