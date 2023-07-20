// eslint-disable-next-line no-unused-vars
import React from 'react';
import { test, assert } from 'vitest';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import TrendingTracks from '../components/Carrousel/Carrousel';

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

test('TrendingTracks renders and displays the carousel title', () => {
  const { getByText } = render(<TrendingTracks />);
  assert.ok(getByText('Trending Tracks'));
});

test('TrendingTracks renders and displays the liked tracks title', () => {
  const { getAllByText } = render(<TrendingTracks />);
  const likedTracksElements = getAllByText('Liked Tracks');
  assert.ok(likedTracksElements.length > 0);
});