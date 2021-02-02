import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Content } from '../styles';

test('Content', () => {
  const tree = renderer.create(<Content />).toJSON();
  expect(tree).toMatchSnapshot();
});
