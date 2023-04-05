import type { FC } from 'react';

import type { IWithClassName } from '../../types/types';

interface ILightProps extends IWithClassName {
  color?: string;
}

const COLORS: { turqois: string; pink: string } = {
  turqois: 'bg-turquois-light',
  pink: 'bg-pink-light',
};

const Light: FC<ILightProps> = ({ color = 'turqois', className = '' }) => {
  return (
    <div
      className={`animate-pulse w-[872px] h-[977px] pointer-events-none ${
        COLORS[color] || ''
      } ${className}`}
      aria-hidden="true"
    ></div>
  );
};

export default Light;
