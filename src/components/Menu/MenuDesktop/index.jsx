import Link from 'next/link'
import { Nav, NavItem, NavList } from './style'

export function MenuDesktop() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/#sectionOne">Lançamentos</Link>
        </NavItem>
        <NavItem>
          <Link href="/#sectionTwo">Recomendações</Link>
        </NavItem>
        <NavItem>
          <Link href="/#footer">Footer</Link>
        </NavItem>
      </NavList>
    </Nav>
  )
}
