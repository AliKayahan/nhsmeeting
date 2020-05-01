export const FETCH_ROOMS = "FETCH_ROOMS";
import Room from '../../models/room';
/**
 * This function is used to fetch rooms in the city given
 * from the back-end
 * @param {String} city 
 */
export const fetchRooms = (city) => {
    return async dispatch => { // The async method is used to be sure that we gather the response from server before updating Redux state
        const response = await fetch("https://www.zohoapis.com/crm/v2/coql", { // The RESTful API url of our back-end
            method: 'POST',// Method type to gather rooms
            headers: {// We should pass our access token with the authorization header
                'Content-Type': 'application/json',
                'Authorization': 'Zoho-oauthtoken 1000.9029a2c2a8960a29a14184267a704833.3400d41ac955cb1b5d33672ef31e09d8' // TODO: this token should be refreshed for each 55 mins
            },
            body: JSON.stringify({ // Our back-end query to fetch necessary information of the rooms selected
                "select_query" : "select Name, Floor, Type, Capacity, Features, Facility, Description,Images, Facility.Name, Facility.Has_Parking from Rooms where Name != 'void'"
            })
        });
        //iconReplacement is used to map Text definitions if the room features with icon pack
        const iconReplacements = {"Wifi": "ios-wifi", "Air Conditioner": "ios-snow", "Projector": "ios-videocam","Cafe":"ios-cafe", "Tv": "ios-tv", "Microphone": "ios-mic","ios-car":"ios-car"}
        const resData = await response.json();// We are waiting for response from the back-end
        const matchingRooms = [];// We will be storing gathared rooms in this array and pass this as state
        resData.data.map((val) => {// This loop is used to create new Room objects from matching back-end records
            const images = val["Images"].split(",");// Comma seperated images should be formatted as array
            let featuresText = val["Facility.Has_Parking"] ? [...val["Features"],'ios-car'] : val["Features"];// If the facility has parking we are adding it as room feature
            let featuresIcon = [] ;// We will transform features texts into icon names and store in this array
            featuresText.map((val) => { // Iterating each feature text and replacing with icon name equivelant
                featuresIcon.push(iconReplacements[val]) // Pushing icon name to the array
            });
            // We are using our data model to create a new room object with the data gathered
            matchingRooms.push(new Room(
                val["id"],
                val["Facility.Name"], // This is a lookup field
                val["Name"],
                val["Floor"],
                val["Capacity"],
                val["Type"],
                images,
                val["Description"],
                featuresIcon
            ));
        });
        dispatch({ // After getting the result from async code above we can now update the state
            type: FETCH_ROOMS, // This is the type of this action, used const to prevent any typo related bugs.
            availableRooms: matchingRooms // Passing all selected rooms to our Redux store.
        })
    }
}