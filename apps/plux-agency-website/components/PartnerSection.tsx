import type { FC } from 'react';

import Link from 'next/link';

import { styles } from '../styles/styles';
import { JOIN_FORCES_URL, PITCH } from '../common/consts';

import PitchItem from './ui/PitchItem';
import Light from './ui/Light';

const PartnerSection: FC = () => {
  return (
    <section className="relative pt-[819px] pb-[273px] px-2">
      <div className="w-full max-w-[1474px] mx-auto">
        <Light
          className="absolute bottom-[477px] left-0 -z-10 pointer-events-none origin-center rotate-180"
          color="pink"
        />

        <h2 className={`${styles.sectionHeadText} text-right mb-[129px]`}>
          What is it like
          <br /> to{' '}
          <span className="text-pink font-gt-ultra-fine font-bold">
            partner up
          </span>{' '}
          <br />
          with us?
        </h2>

        <ul>
          {PITCH.map((pitch, index) => (
            <li key={pitch.title} className="my-29.5 last:mt-30 last:mb-21">
              <PitchItem number={index + 1} {...pitch} />
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href={JOIN_FORCES_URL}
            className={`${styles.cta} ${styles.ctaLarge} inline-block bg-pink text-black`}
          >
            let’s join forces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
