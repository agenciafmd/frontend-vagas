import styled from 'styled-components'

export const HighlightContainer = styled.div`
  width: 100%;
  gap: 30px;
  padding: 0;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HighlightThumbContainer = styled.div`
  width: 100%;
  max-height: 694px;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(${props => props.theme.pallete.background.third});
`

export const HighlightThumb = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`

export const HighlightInfosContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 80px;

  height: 200px;

  color: ${props => props.theme.pallete.primary.text};

  @media (max-width: 576px) {
    left: 20px;
    height: auto;
    width: 296px;
  }

  p {
    max-width: 600px;

    font-weight: 400;
    font-size: 1.3em;
    line-height: 120%;

    @media (max-width: 576px) {
      font-size: 0.9em;
    }
  }
`

export const HighlightInfosBox = styled.section`
  max-width: 600px;
  margin-bottom: 10px;

  display: flex;

  h1 {
    font-weight: 800;
    font-size: 3.5em;
    margin: 0;

    @media (max-width: 576px) {
      font-size: 1.8em;
    }
  }

  hr {
    width: 6px;
    opacity: 100%;
    margin: 10px 10px 10px 6px;

    background-color: ${props => props.theme.pallete.secondary.main};
  }
`

export const HighlighPagination = styled.div`
  width: 89%;

  position: absolute;
  left: 80px;
  bottom: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    left: 20px;
  }

  .ellipses {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .ellipse {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    background-color: ${props => props.theme.pallete.background.ellipse};
  }

  .active {
    background-color: ${props => props.theme.pallete.secondary.main};
  }

  .arrows {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
      cursor: pointer;
    }
  }
`
