import { render } from '@testing-library/react';

import LineDemo from './line-demo';

describe('LineDemo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LineDemo />);
    expect(baseElement).toBeTruthy();
  });
});
