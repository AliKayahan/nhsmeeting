import React from 'react';
import LoginScreen from '../../../screens/user/LoginScreen'
import renderer from 'react-test-renderer';
/**
 * Integration test for Login Screen
 */
test('Login UI renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});