import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import FeatureIcon from '../../components/room/FeatureIcon';

const RoomDetailScreen = (props) =>{
    // const roomId = props.navigation.getParam('roomId');
    // const selectedRoom = useSelector(state => 
    //     state.rooms.availableRooms.find(room => room.id === roomId)
    // );

    return(
    <View>
      {/* Removed header as we already have a native one */}
        <View style={styles.imageContainer}>
          {/* TODO: We need to get room images via uri */}
        <Image
          style={{width: "100%", height: "110%"}}
          source={{uri: 'https://www.citizenm.com/cache/images/citizenm_schipol_2-0199_web_00ecec985a24cc.jpg'}}
        />
        </View>
        {/* Room Info Section */}
        <View style={styles.infoContainer}>
          {/* TODO: We need to use text styling from NHSStyle.js */}
          <Text style={styles.officeName}>Apple Office</Text>
          <Text style={styles.officeInfo}>Room 505, Floor. 3</Text>   
        <View style={styles.containerIcon}>
          <Ionicons name="md-contact" style={styles.iconStyle}size={18} color="#2F80ED" />
          <Text style={styles.iconStyle}>10 Rooms</Text>
        </View>
        <View style={styles.containerIcon}>
          <Ionicons name="md-pin" style={styles.iconStyles} size={18} color="#2F80ED" />
          <Text style={styles.iconStyle}>Albion Street, Wolverhampton, WV1 3EB</Text>
        </View>
        <View style={styles.roomFacilities}>
          {/* TODO:Need to fix size, may be we can adjust the box size by using font size */}
          <FeatureIcon size={18} icons={['ios-snow', 'ios-videocam', 'ios-mic', 'ios-wifi', 'ios-car']} />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
        </View>
     </View>
    );
};

export const RoomDetailNavOptions = navData => {
  // Updated react-navigation, removed parameters for now (working on seperate branch)
    return{
        headerTitle: 'Room Details'
    };
}

// We should use colors from Theme, text styling from NHSStyles
const styles = StyleSheet.create({
    containerHeader: {
      backgroundColor: '#2F80ED',
      flexDirection: 'row',
      height: '8%'
    }, 
    headerText: {
      color: '#fff',
      alignSelf: 'center',
      marginLeft: '30%',
      marginTop: 10
    },
    arrowStyle: {
      color: '#fff',
      marginLeft: 20,
      marginTop: 10
    },
    imageContainer: {
      height: 200
    },
    infoContainer: {
      backgroundColor: '#f2f2f2',
      height: '100%',
      borderRadius: 10
    },
    officeName: {
      marginTop: 20,
      marginLeft: 20,
      fontSize: 11,
      fontWeight: 'bold',
      color: 'orange'
    },
    officeInfo: {
      marginTop: 8,
      marginLeft: 20,
      fontSize: 18
    },
    containerIcon: {
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 20, 
    },
    iconStyle: {
      paddingRight: 2.8
    },
    iconStyles: {
      paddingRight: 5,
      paddingLeft: 1.5, 
    },
    roomFacilities: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'center',
    },
    facilityIcons: {
      padding: 18,
      color: 'grey',   
    }, 
    descriptionHeader: {
      marginLeft: 20,
      fontSize: 17
    },
    descriptionText: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      lineHeight: 25
    }
  });

export default RoomDetailScreen;