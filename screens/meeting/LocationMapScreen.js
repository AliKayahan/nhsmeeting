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
            title: 'Ali Kayahan',
            description: 'Home',
            latlng:{
                latitude: 52.582972,
                longitude: -2.119449,
            },
            room: false
        },
        {  
            key: 'FFFF',
            title: 'Room 505',
            description: 'Home',
            latlng:{
                latitude: 52.604108,
                longitude: -2.140829,
            },
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
                    latitude: 52.582972,
                    longitude: -2.119449,
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
                        {marker.room ? <Image source={require('../../assets/images/pin.png')} /> : <Avatar />}
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