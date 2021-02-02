import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Container, FooterNav, FooterNavItem } from '../styles';

test('Container', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('FooterNav', () => {
  const tree = renderer.create(<FooterNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('FooterNavItem', () => {
  const tree = renderer.create(<FooterNavItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
