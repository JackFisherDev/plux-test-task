import type { FC } from 'react';

import Image from 'next/image';

import type { IFounder } from '../../types/types';

import PluxIcon from '../../public/images/plux-icon.svg';

const FounderCard: FC<IFounder> = ({
  name,
  jobTitle,
  cardPosition,
  image,
  bio,
}) => {
  return (
    <div
      className={`max-w-[256px] relative bg-white/8 border border-white/15 backdrop-blur-[6px] p-4 pb-12 ${cardPosition}`}
    >
      <div className="relative">
        <div>
          <div className="relative mb-16 shadow-photo">
            <Image
              src={image}
              alt={`${name} ${jobTitle}`}
              width={224}
              height={224}
              loading="lazy"
              className={`drop-shadow-small-photo`}
            />
            <Image
              src={PluxIcon}
              alt="Plux icon"
              width={80}
              height={80}
              loading="lazy"
              className="absolute left-1/2 -bottom-[40px] z-10 -translate-x-10 pointer-events-none"
            />
          </div>
          <h3 className="text-white text-2xl leading-none text-center font-gt-ultra-fine font-bold tracking-wide mb-2">
            {name}
          </h3>
          <p className="text-base leading-none text-yellow text-center">
            {jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
