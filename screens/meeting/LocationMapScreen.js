import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapStyle } from '../../constants/MapStyle';
import Avatar from '../../components/profile/Avatar';
import Theme from '../../constants/Theme';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

const { block, set, greaterThan, lessThan, Value, cond, sub } = Animated

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
                <View style={styles.panelHandle} />
            </View>
        </View>
      )

    const renderInner = () => (
        <View style={styles.panel}>
            
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
                    snapPoints = {[450, 300, 80]}
                    renderContent = {renderHeader}
                    renderHeader = {renderInner}
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
        backgroundColor: '#F5FCFF',
    },
    box: {
        width: 200,
        height: 200,
    },
    panelContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    panel: {
        height: 600,
        padding: 20,
        backgroundColor: '#f7f5eee9',
    },
    header: {
        backgroundColor: Theme.color.white,
        shadowColor: '#000000',
        height: 50,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 40,
        borderRadius: 4,
        backgroundColor: 'red',
        marginBottom: 10,
        marginLeft: 10
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#318bfb',
        alignItems: 'center',
        marginVertical: 10,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    photo: {
        width: '100%',
        height: 225,
        marginTop: 30,
    },
  });

export default LocationMapScreen;