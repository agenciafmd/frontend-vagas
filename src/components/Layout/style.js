import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 20px 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.theme.pallete.background.second};
  backdrop-filter: blur(10px);

  @media (max-width: 576px) {
    padding: 20px 16px;
    width: 100%;
  }
`
