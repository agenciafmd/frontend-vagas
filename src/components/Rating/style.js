import styled from 'styled-components'

export const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  span {
    color: ${props => props.theme.pallete.secondary.main};
  }
`
