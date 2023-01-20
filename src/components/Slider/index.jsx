import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { SliderPagination } from './SliderPagination'
import { SlideContainer } from './style.js'

export function Slider({ children, amount }) {
  const [current, setCurrent] = useState(0)
  const length = children.length

  const [inProp, setInProp] = useState(false)
  const nodeRef = useRef(null)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    setInProp(true)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    setInProp(true)
  }

  if (!Array.isArray(children) || children.length <= 0) {
    return null
  }

  useEffect(() => {
    if (inProp) return setInProp(false)
  }, [inProp])

  return (
    <SlideContainer>
      <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        timeout={200}
        classNames="my-node"
      >
        <div ref={nodeRef} style={{ width: '100%' }}>
          {children.filter((_, index) => {
            return index === current
          })}
        </div>
      </CSSTransition>

      <SliderPagination
        prev={prevSlide}
        next={nextSlide}
        position={current}
        amount={amount}
      />
    </SlideContainer>
  )
}
