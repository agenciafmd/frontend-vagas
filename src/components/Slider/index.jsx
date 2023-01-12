import { useState } from 'react'

export function Slider({ children }) {
  const [current, setCurrent] = useState(0)
  const length = children.length

  console.log(children)

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
    <div>
      <button onClick={nextSlide}>prox</button>
      <button onClick={prevSlide}>ant</button>

      {children.filter((slide, index) => {
        return index === current
      })}
    </div>
  )
}
