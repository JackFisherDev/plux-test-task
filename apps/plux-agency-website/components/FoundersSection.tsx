import type { FC } from 'react';

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import { FOUNDERS } from '../common/consts';

import FounderCard from './ui/FounderCard';

import AboutUsImage from '../public/images/about-us-bg-image.png';

const FoundersSection: FC = () => {
  return (
    <section className="px-2 py-18.5">
      <div className="w-full max-w-[1417px] mx-auto relative">
        <div className="absolute -z-10 pointer-events-none">
          <Parallax translateY={[0, 40]}>
            <Image
              src={AboutUsImage}
              alt="About background"
              aria-hidden="true"
              placeholder="blur"
              className="object-cover object-center"
            />
          </Parallax>
        </div>

        <ul className="pt-[158px]">
          {FOUNDERS.map((founder) => (
            <li key={founder.name}>
              <FounderCard {...founder} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FoundersSection;
