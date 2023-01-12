import { useState } from 'react'
import { SliderPagination } from './SliderPagination'
import { SlideContainer } from './style.js'

export function Slider({ children }) {
  const [current, setCurrent] = useState(0)
  const length = children.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(children) || children.length <= 0) {
    return null
  }

  return (
    <SlideContainer>
      {children.filter((_, index) => {
        return index === current
      })}

      <SliderPagination prev={prevSlide} next={nextSlide} position={current} />
    </SlideContainer>
  )
}
