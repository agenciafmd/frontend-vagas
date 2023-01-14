import { Meta, Story } from '@storybook/react/types-6-0';
import { CarouselItem, CarouselItemProps } from '.';

export default {
  title: 'CarouselItem',
  component: CarouselItem,
} as Meta<CarouselItemProps>;

export const Template: Story<CarouselItemProps> = (args) => {
  return (
    <div>
      <CarouselItem {...args} />
    </div>
  );
};
