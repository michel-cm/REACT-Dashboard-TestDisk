import { shade } from "polished";

import Switch from "react-switch";

import { ThemeContext } from "styled-components";
import { useContext } from "react";

import { useTheme } from "../../hooks/useTheme";


const ToggleTheme = () => {
  const { colors } = useContext(ThemeContext);

  const { changeTheme, isDarkTheme } = useTheme();

  return (
    <Switch
      onChange={changeTheme}
      checked={isDarkTheme === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={15}
      offColor={shade(0.2, colors.primary)}
      onColor={colors.secundary}
    />
  );
};

export default ToggleTheme;
