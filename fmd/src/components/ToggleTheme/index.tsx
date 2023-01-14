import { AppThemeContext } from 'contexts/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';

export const ToggleTheme = () => {
  const { setTheme } = useContext(AppThemeContext);
  const [checked, setChecked] = useState(false);

  //getting the localhost
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (!localTheme) return;

    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'dark') {
      setChecked(true);
      return;
    }
  }, []);

  //changing the toggle if has anything in localhost
  useEffect(() => {
    setTheme(checked ? 'dark' : 'white');
  }, [setTheme, checked]);

  const handleCheck = () => {
    setChecked((s) => !s);
    setTheme(checked ? 'dark' : 'white');
  };
  return (
    <Styled.Label>
      <Styled.Input
        type="checkbox"
        value="dark or white mode"
        onChange={handleCheck}
        checked={checked}
      />
      <Styled.Slider />
    </Styled.Label>
  );
};
