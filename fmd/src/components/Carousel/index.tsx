import * as Styled from './styles';
import { useCallback, useEffect, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export type CarouselProps = {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  id?: string;
};

export const Carousel = ({
  children,
  autoPlay = true,
  interval = 3000,
  id = 'Carousel',
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = children.length;

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide + slideCount - 1) % slideCount);
  };

  const handleNextClick = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % slideCount);
  }, [currentSlide, slideCount]);
  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(handleNextClick, interval);
      return () => clearInterval(intervalId);
    }
  }, [handleNextClick, autoPlay, interval]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Styled.CarouselContainer id={id}>
      <Styled.NextAndPrevContainer>
        <Styled.ArrowBTN onClick={handlePrevClick}>
          <KeyboardArrowLeftIcon fontSize="inherit" />
        </Styled.ArrowBTN>
        <Styled.ArrowBTN onClick={handleNextClick}>
          <KeyboardArrowRightIcon fontSize="inherit" />
        </Styled.ArrowBTN>
      </Styled.NextAndPrevContainer>
      {children[currentSlide]}

      <Styled.IndicatorContainer>
        {children.map((child, index) => (
          <Styled.Indicator
            key={index}
            active={index === currentSlide}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </Styled.IndicatorContainer>
    </Styled.CarouselContainer>
  );
};
