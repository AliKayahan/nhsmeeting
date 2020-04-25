export const FETCH_ROOMS = "FETCH_ROOMS";
import Room from '../../models/room';
/**
 * This function is used to fetch rooms in the city given
 * @param {String} city 
 */
export const fetchRooms = (city) => {
    return async dispatch => {
        const response = await fetch("https://www.zohoapis.com/crm/v2/coql", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Zoho-oauthtoken 1000.9ffcf1132519863442c12739a6b81420.98d153e11b65b58f070ccc1d8ade30fc'
            },
            body: JSON.stringify({
                "select_query" : "select Name, Floor, Type, Capacity, Features, Facility, Description,Images, Facility.Name, Facility.Has_Parking from Rooms where Name != 'void'"
            })
        });
        ['ios-snow', 'ios-videocam', 'ios-mic', 'ios-wifi', 'ios-car']
        const iconReplacements = {"Wifi": "ios-wifi", "Air Conditioner": "ios-snow", "Projector": "ios-videocam","Cafe":"ios-cafe", "Tv": "ios-tv", "Microphone": "ios-mic","ios-car":"ios-car"}
        const resData = await response.json();
        const matchingRooms = [];
        console.log(resData)
        resData.data.map((val) => {
            const images = val["Images"].split(",");
            let featuresText = val["Facility.Has_Parking"] ? [...val["Features"],'ios-car'] : val["Features"];
            let featuresIcon = []
            featuresText.map((val) => {
                featuresIcon.push(iconReplacements[val])
            });
            matchingRooms.push(new Room(
                val["id"],
                val["Facility.Name"],
                val["Name"],
                val["Floor"],
                val["Capacity"],
                val["Type"],
                images,
                val["Description"],
                featuresIcon
            ));
        });
        dispatch({
            type: FETCH_ROOMS,
            availableRooms: matchingRooms
        })
    }
}