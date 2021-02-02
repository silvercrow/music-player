import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Container, Logo, Menu, MenuItem, SingOutButton } from '../styles';

test('Container', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Logo', () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Menu', () => {
  const tree = renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('MenuItem', () => {
  const tree = renderer.create(<MenuItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SingOutButton', () => {
  const tree = renderer.create(<SingOutButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
