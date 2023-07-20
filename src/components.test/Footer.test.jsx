// eslint-disable-next-line no-unused-vars
import React from 'react';
import { test, assert } from 'vitest';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import Footer from '../components/Footer/Footer';

const dom = new JSDOM();
// eslint-disable-next-line no-undef
global.document = dom.window.document;
// eslint-disable-next-line no-undef
global.window = dom.window;

test('Footer renders and displays contact information', () => {
  const { getByText } = render(<Footer />);
  assert.ok(getByText('Contact Info'));
  assert.ok(getByText('Address: 1 Old King Avenue'));
  assert.ok(getByText('Phone: (123) 456-7890'));
  assert.ok(getByText('Email: info@beathub.com'));
});

test('Footer renders and displays social media links', () => {
  const { getAllByText } = render(<Footer />);
  const socialMediaElements = getAllByText('Social Media');
  assert.ok(socialMediaElements.length > 0);
});
