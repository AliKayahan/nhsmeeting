import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapStyle } from '../../constants/MapStyle';
import Avatar from '../../components/profile/Avatar';
import Theme from '../../constants/Theme';
import BottomSheet from 'reanimated-bottom-sheet';
import NHSStyle from '../../constants/NHSStyle';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

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
    //TODO convert into components
    const renderInner = () => (
        <View style={styles.panel}>
            <View style={styles.roomName}>
                <Text style={NHSStyle.header}>Apple Room</Text>
                <Text style={{...NHSStyle.smallText, marginTop: 4}}>Albion Street, Wolverhampton WV1 3EB · 1,9 km</Text>
            </View>
            <View style={styles.meetingTime}>
                <Ionicons style={{marginRight: 5}} color={Theme.color.teal} name='ios-clock' size={25} />
                <Text style={{...NHSStyle.smallText, color: Theme.color.teal, paddingTop: 4}}>10:00AM - 11:00AM</Text>
            </View>
            <View style={styles.directionsButtonContainer}>
                <Button 
                    mode="contained" 
                    uppercase={false}
                    color={Theme.color.blue1}
                    contentStyle={styles.searchButtonContent}
                    labelStyle={NHSStyle.buttonLabel}
                    style={styles.directionsButton}
                    onPress={() => console.log('Open Maps')}>
                    Directions - 6 mins drive
                </Button>
            </View>
            {/* TODO: Make images clickable/gallery */}
            <View style={styles.imageContainer}>
                <View style={styles.bigImageContainer}>
                    <Image style={styles.bigImage} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOUOqMhQqecVomakcHLaC8irVMIeJk1UwwNs4DMojTymcu_snY&usqp=CAU'}} />
                </View>
                <View style={styles.thumbContainer}>
                    <Image style={styles.smallImage} source={{uri: 'https://i0.wp.com/iqsmartcenter655.com/wp-content/uploads/2018/07/room-view-2.jpg'}} />
                    <Image style={styles.smallImage} source={{uri: 'https://images.homify.com/c_fill,f_auto,h_700,q_auto/v1571350662/p/photo/image/3233644/TTI_09.jpg'}} />
                </View>
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
                    latitude: 52.562972,
                    longitude: -2.129449,
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
                    snapPoints = {[420, 420, 150]}
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
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
        //backgroundColor: '#F6F6F7',
    },
    header: {
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
        //backgroundColor: '#F6F6F7',
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
        marginTop: -7,
    },
    meetingTime: {
        flexDirection: 'row',
        width: 180,
        height: 40,
        backgroundColor: NHSStyle.rgbaTeal20.backgroundColor,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    directionsButtonContainer:{
        width: '100%',
        shadowColor: Theme.color.grey4,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        marginTop: 15,
    },
    directionsButton: {
        height: 55
    },
    imageContainer: {
        marginTop: 15,
        flexDirection: 'row'
    },
    thumbContainer: {
        flexDirection: 'column',
        marginLeft: 3
    },
    bigImage: {
        width: 245,
        height: 155
    },
    smallImage: {
        marginBottom: 3,
        width: 125,
        height: 76
    }
  });

export default LocationMapScreen;