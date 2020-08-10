import React, { cloneElement } from 'react';
import { useStateValue } from '../Context';
import useLocaleStorage from '../hooks/useLocaleStorage';

type LayoutProps = {
  children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const [{ theme }] = useStateValue();
    const [themeStorage] = useLocaleStorage('theme', 'light');
    const body = document.body.classList;
    if (theme) {
      theme === 'light' ? body.remove('dark') : body.add(theme);
      theme === 'dark' ? body.remove('light') : body.add(theme);
    } else {
      if (themeStorage) {
        themeStorage === 'light' ? body.remove('dark') : body.add(themeStorage);
        themeStorage === 'dark' ? body.remove('light') : body.add(themeStorage);
      } else {
        body.add('light');
      }
    }
    const element = cloneElement(children, {});
    return (
      <>
        {element}
      </>
    );
  }
  return (
    <>{ children }</>
  );
};

export default Layout;
