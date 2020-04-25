export const FETCH_ROOMS = "FETCH_ROOMS";
import ROOMS from '../../data/dummy-data';

export const fetchRooms = (city) => {
    return async dispatch => {
        const response = await fetch("https://www.zohoapis.com/crm/v2/coql", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Zoho-oauthtoken 1000.7ac2565bb686ce1b22d8e1234835a347.a69831daa8312ce4d33683b134c8b03e'
            },
            body: JSON.stringify({
                "select_query" : "select Name, Floor, Features, Facility, Description,Images, Facility.Name, Facility.Has_Parking from Rooms where Name != 'void'"
            })
        });

        const resData = await response.json();
        const matchingRooms = [];
        console.log(resData)
        resData.data.map((val) => {
            console.log(val);
        });
        //console.log(resData.data);
        dispatch({
            type: FETCH_ROOMS,
            availableRooms: ROOMS
        })
    }
}