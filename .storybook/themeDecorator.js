import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider fontFamily="system-ui, sans-serif" theme={theme}>
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
