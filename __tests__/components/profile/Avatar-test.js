import React from 'react';

import renderer from 'react-test-renderer';
import Avatar from '../../../components/profile/Avatar';

/**
 * Unit test for Avatar component
 */
test('Avatar component renders correctly', () => {
  const tree = renderer.create(<Avatar />).toJSON();
  expect(tree).toMatchSnapshot();
});