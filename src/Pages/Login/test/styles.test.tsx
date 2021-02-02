import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {
  Page,
  Container,
  Wrapper,
  LoginBox,
  Title,
  LoginButtonContainer,
  GoogleButton,
  Icon,
  ButtonText,
} from '../styles';

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

test('LoginBox', () => {
  const tree = renderer.create(<LoginBox />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Title', () => {
  const tree = renderer.create(<Title />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('LoginButtonContainer', () => {
  const tree = renderer.create(<LoginButtonContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('GoogleButton', () => {
  const tree = renderer.create(<GoogleButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Icon', () => {
  const tree = renderer.create(<Icon />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ButtonText', () => {
  const tree = renderer.create(<ButtonText />).toJSON();
  expect(tree).toMatchSnapshot();
});
