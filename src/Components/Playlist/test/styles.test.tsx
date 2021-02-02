import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { PlaylistBox } from '../styles';

test('PlaylistBox', () => {
  const tree = renderer.create(<PlaylistBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
