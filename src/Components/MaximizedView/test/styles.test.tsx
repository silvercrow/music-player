import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {
  CloseButton,
  Cover,
  Shadow,
  Art,
  SongInfo,
  SongTitle,
  SongSubTitle,
  ButtonsBar,
  PlayButton,
  StopButton,
  VolumeTitle,
  RangeBar,
  Square,
  CloseButtonBox,
  Arrow,
} from '../styles';

test('CloseButton', () => {
  const tree = renderer.create(<CloseButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Cover', () => {
  const tree = renderer.create(<Cover />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Shadow', () => {
  const tree = renderer.create(<Shadow />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Art', () => {
  const tree = renderer.create(<Art />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SongInfo', () => {
  const tree = renderer.create(<SongInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SongTitle', () => {
  const tree = renderer.create(<SongTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SongSubTitle', () => {
  const tree = renderer.create(<SongSubTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ButtonsBar', () => {
  const tree = renderer.create(<ButtonsBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PlayButton', () => {
  const tree = renderer.create(<PlayButton isPlaying={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('StopButton', () => {
  const tree = renderer.create(<StopButton isPlaying={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('VolumeTitle', () => {
  const tree = renderer.create(<VolumeTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('RangeBar', () => {
  const tree = renderer.create(<RangeBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Square', () => {
  const tree = renderer.create(<Square />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CloseButtonBox', () => {
  const tree = renderer.create(<CloseButtonBox />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Arrow', () => {
  const tree = renderer.create(<Arrow />).toJSON();
  expect(tree).toMatchSnapshot();
});
