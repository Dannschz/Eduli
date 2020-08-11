import React from 'react';

type LayoutProps = {
  children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>{ children }</>
  );
};

export default Layout;
