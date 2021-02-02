import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Wrapper, Range } from '../styles';

test('Wrapper', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Range', () => {
  const tree = renderer.create(<Range />).toJSON();
  expect(tree).toMatchSnapshot();
});
