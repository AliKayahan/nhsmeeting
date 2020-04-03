import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapStyle } from '../../constants/MapStyle';
import Avatar from '../../components/profile/Avatar';
import roomPin from '../../assets/images/pin.png'
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
  });

export default LocationMapScreen;