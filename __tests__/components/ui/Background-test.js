import React from 'react';

import renderer from 'react-test-renderer';
import Background from '../../../components/Background';

/**
 * Unit test for Background component
 */
test('Background component renders correctly', () => {
  const tree = renderer.create(<Background />).toJSON();
  expect(tree).toMatchSnapshot();
});