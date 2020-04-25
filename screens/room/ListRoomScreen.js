import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';
import RoomCard from '../../components/room/RoomCard';

// We are planning to list and manage room state within this function
const ListRoomScreen = props => {
    //Select rooms from redux store
    fetch("https://www.zohoapis.com/crm/v2/coql", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Zoho-oauthtoken 1000.227a30d61df73df6ec238dab519fa97c.f0bf1dc8b6f65e66aa17c33d6b573700'
        },
        body: JSON.stringify({
            "select_query" : "select Name from Facilities where City = 'Wolverhampton'"
        })
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json.data);
    })
    // .catch((err) => {
    //     console.log(err);
    // })
    const rooms = useSelector(state => state.rooms.availableRooms);
    return (
        <View style={styles.roomCardContainer}>
            <FlatList 
                data={rooms} 
                renderItem={itemData => (
                    <RoomCard 
                        name={itemData.item.name}
                        building={itemData.item.building}
                        floor={itemData.item.floor}
                        images={itemData.item.images}  
                        features={itemData.item.features}  
                        capacity={itemData.item.capacity}
                        onViewDetail={() => {
                            props.navigation.navigate('RoomDetailScreen', {
                                roomId: itemData.item.id,
                                roomName: itemData.item.name
                            })
                        }}
                    >
                    </RoomCard>
                )} 
            />
        </View>
    );
};

export const ListRoomNavOptions = (navData) => {
    return {
        headerTitle: 'Matching Rooms'
    }
}

const styles = StyleSheet.create({

});

export default ListRoomScreen;