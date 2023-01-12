import styled from 'styled-components'

export const CardContainer = styled.div`
  max-height: 457px;
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 99;
  position: relative;

  .bg {
    height: 319px;
    width: 100%;

    position: absolute;
    bottom: 0px;
    z-index: -1;

    background-color: ${props => props.theme.pallete.secondary.second};
    border-radius: 40px 40px 0px 0px;
  }
`

export const CardImageContainer = styled.div``

export const CardInfos = styled.div`
  padding: 10px 16px 35px 16px;
  text-align: center;

  color: ${props => props.theme.pallete.primary.main};

  h3 {
    font-size: 1.5em;
    font-weight: 700;
  }

  p {
    font-size: 1em;
  }
`

export const CardButton = styled.button`
  padding: 8px 19px;
  gap: 10px;

  position: absolute;
  width: 80px;
  height: 58px;
  bottom: -30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.pallete.secondary.main};
  border: 4px solid #000000;
  border-radius: 20px;
`
