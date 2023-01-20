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

  cursor: pointer;
  transition: 0.2s;

  :hover {
    scale: 1.1;
    transition: 0.2s;
  }
`

export const CardImageContainer = styled.div`
  margin-bottom: 15px;
`

export const CardInfos = styled.div`
  padding: 10px 16px 35px 16px;
  text-align: center;

  color: ${props => props.theme.pallete.primary.text};

  h3 {
    max-width: 245px;
    font-size: 1.4em;
    font-weight: 700;
  }

  span {
    font-size: 0.9em;
    color: ${props => props.theme.pallete.primary.text};
    opacity: 70%;
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
