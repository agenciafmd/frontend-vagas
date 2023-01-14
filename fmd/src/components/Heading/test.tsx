import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Heading />', () => {
  it('should render a heading in default value', () => {
    renderTheme(<Heading>Example</Heading>);
    const heading = screen.getByRole('heading', { name: 'Example' });
    expect(heading).toBeInTheDocument();
  });
  it('should render the correct hierarchy passed by property ', () => {
    renderTheme(<Heading as="h2">Example</Heading>);
    const heading = screen.findByRole('heading', { level: 2 });
    expect(heading);
  });
});
