import { RatingContainer } from './style'

export function Rating({ value = 0 }) {
  const stars = []

  if (value > 5) {
    value = 5
  }

  for (let index = 0; index < value; index++) {
    stars.push({ id: index + 1, string: '★' })
  }

  return (
    <RatingContainer>
      {stars.map(star => {
        return <span key={star.id}>{star.string}</span>
      })}
    </RatingContainer>
  )
}
