import Image from 'next/image'
import arrowLeft from '../../../assets/arrowLeft.svg'
import arrowRight from '../../../assets/arrowRight.svg'
import { SliderPaginationContainer } from './style'

export function SliderPagination({ prev, next, position }) {
  return (
    <SliderPaginationContainer>
      <div className="ellipses">
        <div className={`ellipse ${position === 0 ? 'active' : ''}`} />
        <div className={`ellipse ${position === 1 ? 'active' : ''}`} />
        <div className={`ellipse ${position === 2 ? 'active' : ''}`} />
      </div>
      <div className="arrows">
        <Image src={arrowRight} alt="arrow right" onClick={prev} />
        <Image src={arrowLeft} alt="arrow left" onClick={next} />
      </div>
    </SliderPaginationContainer>
  )
}
