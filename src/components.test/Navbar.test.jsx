// eslint-disable-next-line no-unused-vars
import React from 'react';
import { test} from 'vitest';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import Navbar from '../components/Navbar/Navbar';

const dom = new JSDOM();
// eslint-disable-next-line no-undef
global.document = dom.window.document;
// eslint-disable-next-line no-undef
global.window = dom.window;
// eslint-disable-next-line no-undef
global.localStorage = {
  getItem: () => {},
  setItem: () => {},
};
test('renders Navbar component', () => {
  render(<Navbar />);
});
