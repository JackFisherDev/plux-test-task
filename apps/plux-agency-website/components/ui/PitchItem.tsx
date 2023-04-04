import type { FC } from 'react';

import type { IPitch } from '../../types/types';

interface IPitchItemProps extends IPitch {
  number: number;
}

const PitchItem: FC<IPitchItemProps> = ({
  number,
  title,
  titleSpacing,
  description,
  pitchPosition,
}) => {
  return (
    <div className={`${pitchPosition} flex items-center`}>
      <div className="font-gt-ultra-fine font-medium-light text-50 leading-none tracking-tight">
        {number}
      </div>
      <h3
        className={`${titleSpacing} text-pink font-gt-ultra-fine font-normal text-10 leading-snug tracking-tight`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-2xl px-10 py-8 border border-pink max-w-[800px]">
        {description}
      </p>
    </div>
  );
};

export default PitchItem;
