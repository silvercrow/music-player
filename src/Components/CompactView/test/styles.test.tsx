import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {
  ExtendButton,
  Content,
  ArtCover,
  InfoWrapper,
  Title,
  Subtitle,
  ButtonsWrapper,
  StopButton,
  Arrow,
} from '../styles';

test('ExtendButton', () => {
  const tree = renderer.create(<ExtendButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Content', () => {
  const tree = renderer.create(<Content />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('ArtCover', () => {
  const tree = renderer.create(<ArtCover />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('InfoWrapper', () => {
  const tree = renderer.create(<InfoWrapper />).toJSON();
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
test('ButtonsWrapper', () => {
  const tree = renderer.create(<ButtonsWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('StopButton', () => {
  const tree = renderer.create(<StopButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Arrow', () => {
  const tree = renderer.create(<Arrow />).toJSON();
  expect(tree).toMatchSnapshot();
});
