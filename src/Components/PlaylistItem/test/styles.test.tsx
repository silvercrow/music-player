import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ListItem, ArtCover, ItemInfo, Title, Subtitle } from '../styles';

test('ListItem', () => {
  const tree = renderer.create(<ListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ArtCover', () => {
  const tree = renderer.create(<ArtCover />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ItemInfo', () => {
  const tree = renderer.create(<ItemInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Title', () => {
  const tree = renderer.create(<Title />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Subtitle', () => {
  const tree = renderer.create(<Subtitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
