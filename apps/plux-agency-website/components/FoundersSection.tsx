import type { FC } from 'react';

// import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import { FOUNDERS } from '../common/consts';

import FounderCard from './ui/FounderCard';
import WhoStartedPlux from './ui/WhoStartedPlux';

// import AboutUsImage from '../public/images/about-us-bg-image.png';

const FoundersSection: FC = () => {
  return (
    <section className="px-2 py-18.5">
      <div className="w-full max-w-[1417px] mx-auto relative">
        <div className="absolute -z-1 pointer-events-none pt-[38px] pl-[89px]">
          <Parallax translateY={[0, 40]}>
            <WhoStartedPlux />
          </Parallax>
        </div>
        {/* <div className="absolute -z-10 pointer-events-none"> */}
        {/* <Image
            src={AboutUsImage}
            alt="About background"
            aria-hidden="true"
            placeholder="blur"
            className="object-cover object-center"
          /> */}
        {/* </div> */}

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
