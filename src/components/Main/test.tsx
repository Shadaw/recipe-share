import { render, screen } from '@testing-library/react';

import Main from './';

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /boilerplate/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#202020' });
  });
});
