import React from 'react';
import { render } from '@testing-library/react';
import App, { AppIProps } from './App';

const testProps: AppIProps = {
  test: 'Hello World',
};

describe('Test App component', () => {
  test('Hello World', () => {
    const { container } = render(<App {...testProps} />);
    expect((container.querySelector('span') as HTMLSpanElement).innerHTML).toBe('Hello World');
  });
});
