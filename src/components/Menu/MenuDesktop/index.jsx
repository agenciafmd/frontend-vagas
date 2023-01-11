import Link from 'next/link'
import { Nav, NavItem, NavList } from './style'

export function MenuDesktop() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link href="/">Link para seção 1</Link>
        </NavItem>
        <NavItem>
          <Link href="/">Link para seção 2</Link>
        </NavItem>
        <NavItem>
          <Link href="/">Link para seção 3</Link>
        </NavItem>
        <NavItem>
          <Link href="/">Link para o footer</Link>
        </NavItem>
      </NavList>
    </Nav>
  )
}
