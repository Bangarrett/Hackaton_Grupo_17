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
  assert.ok(getByText('Información de Contacto'));
  assert.ok(getByText('Dirección: 123 Calle Principal'));
  assert.ok(getByText('Teléfono: (123) 456-7890'));
  assert.ok(getByText('Email: info@example.com'));
});

test('Footer renders and displays social media links', () => {
  const { getAllByText } = render(<Footer />);
  const socialMediaElements = getAllByText('Redes Sociales');
  assert.ok(socialMediaElements.length > 0);
});
