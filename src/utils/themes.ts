import { lightTheme, darkTheme } from '~/renderer/constants/themes';

export const getTheme = (name: string) => {
  if (name === 'dbrowser-light') return lightTheme;
  else if (name === 'dbrowser-dark') return darkTheme;
  return lightTheme;
};
