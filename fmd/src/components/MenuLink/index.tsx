import { MenuContext } from 'contexts/MenuContext/Context';
import { useContext } from 'react';
import * as Styled from './styles';

export type MenuLinkProps = {
  children?: React.ReactNode | string;
  link: string;
};

export const MenuLink = ({ children, link }: MenuLinkProps) => {
  const { dispatch } = useContext(MenuContext);
  return (
    <Styled.Link
      href={link}
      target="_self"
      onClick={() => {
        dispatch({ type: 'TRIGGER' });
      }}
    >
      {children}
    </Styled.Link>
  );
};
