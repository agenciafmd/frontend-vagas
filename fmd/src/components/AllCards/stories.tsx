import { Meta, Story } from '@storybook/react/types-6-0';
import { AllCards, AllCardsProps } from '.';
import { mock } from './mock';

export default {
  title: 'AllCards',
  component: AllCards,
  args: {
    cardData: mock,
  },
} as Meta<AllCardsProps>;

export const Template: Story<AllCardsProps> = (args) => {
  return (
    <div>
      <AllCards {...args} />
    </div>
  );
};
