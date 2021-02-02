import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Page, Container, Wrapper, Loader } from '../styles';

test('Page', () => {
  const tree = renderer.create(<Page />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Container', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Wrapper', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Loader', () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
