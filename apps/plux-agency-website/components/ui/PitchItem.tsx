import type { FC } from 'react';

import type { IPitch } from '../../types/types';

import { styles } from '../../styles/styles';

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
      <div className="font-gt-ultra-fine font-medium-light text-50 leading-zero tracking-tightest">
        {number}
      </div>
      <h3
        className={`${titleSpacing} text-pink font-gt-ultra-fine font-normal text-10 leading-snug tracking-tightest`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className={`${styles.sectionSubText} px-10 py-8 border border-pink max-w-[800px]`}
      >
        {description}
      </p>
    </div>
  );
};

export default PitchItem;
