import React from 'react';

type LayoutProps = {
  children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => (
  <>
    {children}
  </>
);

export default Layout;
