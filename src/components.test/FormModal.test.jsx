// eslint-disable-next-line no-unused-vars
import React from 'react';
import { test, assert } from 'vitest';
import { render, fireEvent} from '@testing-library/react';
import { JSDOM } from 'jsdom';
import FormModal from '../components/form-modal/FormModal';

const dom = new JSDOM();
// eslint-disable-next-line no-undef
global.document = dom.window.document;
// eslint-disable-next-line no-undef
global.window = dom.window;

test('FormModal displays the cancel button when the modal is open', () => {
  const { getAllByText, getByText } = render(<FormModal />);
  const contactButtons = getAllByText('Contáctanos');
  fireEvent.click(contactButtons[0]);
  assert.ok(getByText('Cancelar'));
});
test('FormModal displays the cancel button when the modal is open', () => {
  const { getAllByText, getByText } = render(<FormModal />);
  const contactButtons = getAllByText('¿Qué necesitas?');
  fireEvent.click(contactButtons[0]);
  assert.ok(getByText('Cancelar'));
});

