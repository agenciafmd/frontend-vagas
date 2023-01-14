import { Meta, Story } from '@storybook/react/types-6-0';
import { NavLink, NavLinkProps } from '.';
import { Mock } from './Mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: Mock,
  },
} as Meta<NavLinkProps>;

export const Template: Story<NavLinkProps> = (args) => {
  return (
    <div>
      <NavLink {...args} />
    </div>
  );
};
