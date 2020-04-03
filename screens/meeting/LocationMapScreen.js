import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapStyle } from '../../constants/MapStyle';
import Avatar from '../../components/profile/Avatar';
import Theme from '../../constants/Theme';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated'
import NHSStyle from '../../constants/NHSStyle';

const LocationMapScreen = () =>{
    const dummyMarkers = [
        {  
            key: 'ABCD',
            title: 'Ali',
            description: 'Home',
            latlng:{
                latitude: 52.582972,
                longitude: -2.119449,
            },
            picture: 'https://randomuser.me/api/portraits/men/15.jpg',
            room: false
        },
        {  
            key: 'ABCDE',
            title: 'Carmi',
            description: 'Home',
            latlng:{
                latitude: 52.595881,
                longitude: -2.149304,
            },
            picture: 'https://randomuser.me/api/portraits/men/17.jpg',
            room: false
        },
        ,
        {  
            key: 'ABCDF',
            title: 'Ben',
            description: 'Home',
            latlng:{
                latitude: 52.587824,
                longitude: -2.138212,
            },
            picture: 'https://randomuser.me/api/portraits/men/19.jpg',
            room: false
        },
        {  
            key: 'FFFF',
            title: 'Room 505',
            description: 'Home',
            latlng:{
                latitude: 52.580108,
                longitude: -2.130829,
            },
            picture: '',
            room: true
        }
    ];
    const [markers, setMarkers] = useState(dummyMarkers);

    const renderHeader = name => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
      )

    const renderInner = () => (
        <View style={styles.panel}>
            <View style={styles.roomName}>
                <Text style={NHSStyle.header}>Apple Room</Text>
            </View>
        </View>
      )
    return(
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                customMapStyle={MapStyle}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 52.580108,
                    longitude: -2.130829,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.key}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    > 
                    {/* TODO: Convert to custom marker https://github.com/react-native-community/react-native-maps */}
                        {marker.room ? <Image source={require('../../assets/images/pin.png')} /> : <Avatar profilePicture={marker.picture} />}
                    </Marker>
                ))}
            </MapView>
            <View style={styles.bottomSheetContainer}>
                <BottomSheet
                    snapPoints = {[250, 250, 80]}
                    renderContent = {renderInner}
                    renderHeader = {renderHeader}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    bottomSheetContainer: {
        flex: 1,
        alignSelf: 'flex-start',
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
    },
    panel: {
        height: 600,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.70)',
    },
    header: {
        backgroundColor: 'rgba(255, 255, 255, 0.70)',
        shadowColor: Theme.color.grey4,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomColor: Theme.color.grey3,
        borderBottomWidth: 1
    },
    panelHeader: {
        alignItems: 'center',
        height:10
    },
    panelHandle: {
        width: 40,
        height: 6,
        borderRadius: 4,
        backgroundColor: Theme.color.purple1,
        marginTop: -5,
    }
  });

export default LocationMapScreen;