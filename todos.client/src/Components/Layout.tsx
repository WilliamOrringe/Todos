import React, { ReactNode } from 'react';
import Navbar from './Navbar';

import Footbar from './Footbar';
const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footbar />
    </div>
  );
};
// No code to provide based on the instructions given

export default Layout;
