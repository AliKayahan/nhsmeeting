import React from 'react';

import renderer from 'react-test-renderer';
import MeetingCard from '../../../components/ui/MeetingCard';

/**
 * Unit test for MeetingCard component
 */
test('MeetingCard component renders correctly', () => {
  const tree = renderer.create(<MeetingCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
