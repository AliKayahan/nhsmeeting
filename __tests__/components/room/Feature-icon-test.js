import React from 'react';

import renderer from 'react-test-renderer';
import FeatureIcon from '../../../components/room/FeatureIcon';

/**
 * Unit test for FeatureIcon component
 * We are passing some sample icons to be rendered
 */
test('Feature Icon component renders correctly', () => {
  const tree = renderer.create(<FeatureIcon icons={['ios-snow', 'ios-videocam', 'ios-car']} />).toJSON();
  expect(tree).toMatchSnapshot();
});