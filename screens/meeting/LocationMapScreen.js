import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE  }  from 'react-native-maps';
import roomPin from '../../assets/images/pin.png';
import Theme from '../../constants/Theme';
import { MapStyle } from '../../constants/MapStyle';

const LocationMapScreen = () =>{
    const dummyMarkers = [
        {  
            key: 'ABCD',
            title: 'Ali Kayahan',
            description: 'Home',
            latlng:{
                latitude: 52.582972,
                longitude: -2.119449,
            }
        }
    ];
    const [markers, setMarkers] = useState(dummyMarkers);
    return(
        <View style={styles.container}>
            <MapView 
                style={styles.mapStyle} 
                customMapStyle={MapStyle}
                provider={PROVIDER_GOOGLE}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.key}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    >
                        
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
    profilePicShadow: {
        shadowColor: Theme.color.black,
        shadowOpacity: 0.50,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 10,
    },  
    imageContainer: {
        borderWidth: 2,
        borderColor: Theme.color.white,
        borderRadius: 20,
        overflow: 'hidden',
    },
    profilePic: {
        width:52,
        height:52
    },
});

export default LocationMapScreen;