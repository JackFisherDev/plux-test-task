import type { FC, ReactNode } from 'react';

import { ReactLenis } from '@studio-freight/react-lenis';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <ReactLenis root options={{}}>
      {children}
    </ReactLenis>
  );
};
export default Layout;
