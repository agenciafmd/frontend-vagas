import styled from 'styled-components'

export const Nav = styled.nav`
  z-index: 999;

  @media (max-width: 576px) {
    margin-top: 20px;
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 0;
    gap: 40px;
  }
`

export const NavItem = styled.li`
  list-style-type: none;
  font-size: 0.8em;

  a {
    text-decoration: none;
    font-size: 1em;
    line-height: 1.2em;

    color: ${props => props.theme.pallete.primary.text};
  }

  @media (max-width: 576px) {
    font-size: 1.3em;
  }
`
