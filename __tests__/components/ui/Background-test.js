import React from 'react';

import renderer from 'react-test-renderer';
import Background from '../../../components/Background';
import { View, Text } from 'react-native';

/**
 * Unit test for Background component
 */
test('Background component renders correctly', () => {
  const tree = renderer.create(<Background ><View><Text>Test Output</Text></View></Background>).toJSON();
  expect(tree).toMatchSnapshot();
});