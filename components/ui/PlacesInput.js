import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Theme from '../../constants/Theme';
import NHSStyle from '../../constants/NHSStyle';
import {Ionicons} from '@expo/vector-icons';

const NHSHQ = { description: 'NHS Headquarters', geometry: { location: { lat: 53.723529, lng: -0.412577 } }};

const PlacesInput = (props) =>{
    return(
        <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                props.onSelect({data: data, details: details});
            }}

            getDefaultValue={() => ''}

            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyDdM5Erng7EUpDQVeWb7D_9jl7oaCS1U0g',
                language: 'en', // language of the results,
                location: '52.436385,-1.801235',
                types: '(regions)', // default: 'geocode' 
                components: 'country:gb'
            }}

            styles={{
                separator: {
                    width: 0
                },
                textInput: {
                    margin:0,
                    width: '110%',
                    height: 50,
                    paddingLeft: 0
                },
                textInputContainer: {
                    borderTopColor: Theme.color.grey1,
                    padding:0,
                    width: '100%',
                    height:60,
                    backgroundColor: Theme.color.white
                },
                description: {...NHSStyle.mediumLightText, color: Theme.color.black},
                predefinedPlacesDescription: {
                    color: Theme.color.blue1
                },
                row: {
                    height: 56,
                    borderBottomColor: Theme.color.grey2,
                    borderBottomWidth: 2,
                    paddingTop: 18
                }
            }}
            listUnderlayColor={Theme.color.lightgrey1}
            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                //type: 'establishment'
            }}
            
            GooglePlacesDetailsQuery={{
                // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                fields: 'formatted_address',
            }}

            //filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            predefinedPlaces={[NHSHQ]}
            renderLeftButton={() => (
                <View
                style={{height:25, width:25, 
                alignItems: "center", 
                justifyContent: "center", 
                marginTop: 20, 
                marginLeft:15}}>
                    <Ionicons name="ios-pin" size={22} style={{color: Theme.color.grey1}} />
                </View>
            )} 
            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            //renderLeftButton={()  => <Ionicons name="ios-menu" />}
            //renderRightButton={() => <Text>Custom text after the input</Text>}
        />
    );
};

const styles = StyleSheet.create({

});

export default PlacesInput;