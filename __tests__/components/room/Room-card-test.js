import React from 'react';

import renderer from 'react-test-renderer';
import RoomCard from '../../../components/room/RoomCard';

/**
 * Unit test for RoomCard component
 * We are passing some sample icons to be rendered
 */
test('Room Card component renders correctly', () => {
  const tree = renderer.create(<RoomCard 
    name={"Test Room"}
    building={"Test Building"}
    floor={"4"}
    images={[]}  
    features={['ios-snow', 'ios-videocam', 'ios-car']}  
    capacity={10}
    onViewDetail={() => {
        props.navigation.navigate('RoomDetailScreen', {
            roomId: "TestId",
            roomName: "Test Room"
        })
    }} />).toJSON();
  expect(tree).toMatchSnapshot();
});