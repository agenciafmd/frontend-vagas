import Image from 'next/image'
import arrowLeft from '../../../assets/arrowLeft.svg'
import arrowRight from '../../../assets/arrowRight.svg'
import { SliderPaginationContainer } from './style'

export function SliderPagination({ prev, next, position, amount }) {
  if (!amount) return

  return (
    <SliderPaginationContainer>
      <div className="ellipses">
        {amount.map((_, index) => {
          return (
            <div
              key={index + 1}
              className={`ellipse ${position === index ? 'active' : ''}`}
            />
          )
        })}
      </div>
      <div className="arrows">
        <Image src={arrowRight} alt="arrow right" onClick={prev} />
        <Image src={arrowLeft} alt="arrow left" onClick={next} />
      </div>
    </SliderPaginationContainer>
  )
}
