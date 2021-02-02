import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MusicBox, MusicPlayer, Queue, PlayTitle } from '../styles';

test('MusicBox', () => {
  const tree = renderer.create(<MusicBox />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('MusicPlayer', () => {
  const tree = renderer.create(<MusicPlayer />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Queue', () => {
  const tree = renderer.create(<Queue />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PlayTitle', () => {
  const tree = renderer.create(<PlayTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
