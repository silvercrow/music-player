import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { TableBox, Table, Thead, TR, Tbody, TD } from '../styles';

test('TableBox', () => {
  const tree = renderer.create(<TableBox />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Table', () => {
  const tree = renderer.create(<Table />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Thead', () => {
  const tree = renderer.create(<Thead />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TR', () => {
  const tree = renderer.create(<TR />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tbody', () => {
  const tree = renderer.create(<Tbody />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TD', () => {
  const tree = renderer.create(<TD />).toJSON();
  expect(tree).toMatchSnapshot();
});
