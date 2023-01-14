import { Heading } from 'components/Heading';
import { NavLink } from 'components/NavLink';
import { ToggleTheme } from 'components/ToggleTheme';
import { Links } from 'config/Links';
import * as Styled from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { MenuContext } from 'contexts/MenuContext/Context';

export type MenuProps = {
  title?: string;
};

export const Menu = ({ title }: MenuProps) => {
  // const [iconClick, setIconClick] = useState(false);
  const { dispatch, state } = useContext(MenuContext);
  const handleIconClick = () => {
    dispatch({ type: 'TRIGGER' });
  };
  return (
    <Styled.Wrapper>
      <Heading as="h1">{title}</Heading>
      <Styled.LinksAndToggleWrapper>
        <Styled.MenuIcon
          onClick={() => {
            handleIconClick();
          }}
        >
          <MenuIcon fontSize="inherit" />
        </Styled.MenuIcon>
        <NavLink links={Links} iconClick={state.toggle} />
        <ToggleTheme></ToggleTheme>
      </Styled.LinksAndToggleWrapper>
    </Styled.Wrapper>
  );
};
