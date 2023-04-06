import type { FC, ReactNode } from 'react';

import { ReactLenis } from '@studio-freight/react-lenis';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <ReactLenis root options={{}}>
      <main className="w-full max-w-[1680px] mx-auto">{children}</main>
    </ReactLenis>
  );
};
export default Layout;
