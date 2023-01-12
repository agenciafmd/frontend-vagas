import styled from 'styled-components'

export const CardRatingContainer = styled.div`
  width: 100%;
  max-height: 215px;

  position: relative;

  display: flex;

  @media (max-width: 576px) {
    margin-bottom: 32px;
  }
`

export const CardRatingImageContainer = styled.div`
  height: 148px;

  display: flex;

  hr {
    width: 22px;
    opacity: 100%;
    margin: 0;

    background-color: ${props => props.theme.pallete.secondary.main};
  }

  .cardRatingImage {
    position: absolute;
    left: 0;
  }
`

export const CardRatingInfos = styled.div`
  margin: 48px 0 0 90px;

  .cardRatingTitle {
    margin-bottom: 11px;

    h3 {
      font-size: 1.5em;
      font-weight: 800;
    }
  }

  p {
    font-size: 1em;
    font-weight: 400;

    @media (max-width: 576px) {
      font-size: 0.8em;
    }
  }
`
