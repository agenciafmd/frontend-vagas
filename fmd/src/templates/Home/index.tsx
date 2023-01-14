import * as Styled from './styles';
import { AllCards } from 'components/AllCards';
import { Carousel } from 'components/Carousel';

import { Menu } from 'components/Menu';
import { CarouselItem, CarouselItemProps } from 'components/CarouselItem';
import { Footer } from 'components/Footer';

export type HomeProps = {
  data: CarouselItemProps[];
};

function Home({ data }: HomeProps) {
  return (
    <Styled.Wrapper>
      <Menu title="FMD Challenger"></Menu>
      <Carousel interval={5000}>
        {data.map((item) => (
          <CarouselItem
            key={item.title}
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
            description={item.description}
          />
        ))}
      </Carousel>
      <AllCards cardData={data} />
      <AllCards cardData={data} slider={true} id="CardSlider" />
      <Footer title="FMD Challenger"></Footer>
    </Styled.Wrapper>
  );
}

export default Home;
