import { Meta, Story } from '@storybook/react/types-6-0';
import { Carousel, CarouselProps } from '.';

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta<CarouselProps>;

export const Template: Story<CarouselProps> = (args) => {
  return (
    <div>
      <Carousel {...args} />
    </div>
  );
};
