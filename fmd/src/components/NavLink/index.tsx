import { MenuLink } from 'components/MenuLink';
import * as Styled from './styles';

export type LinkType = { name: string; link: string };
export type NavLinkProps = {
  links: LinkType[];
  iconClick: boolean;
};

export const NavLink = ({ links, iconClick }: NavLinkProps) => {
  return (
    <Styled.Wrapper iconClick={iconClick}>
      {links.map((link) => (
        <MenuLink key={link.link} link={link.link}>
          {link.name}
        </MenuLink>
      ))}
    </Styled.Wrapper>
  );
};
