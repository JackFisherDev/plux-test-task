import type { FC } from 'react';

import { styles } from '../styles/styles';
import { TOP_ROW_LOCATIONS, BOTTOM_ROW_LOCATIONS } from '../common/consts';

import ClockRow from './ui/Clock';
import Time from './ui/Time';
import Light from './ui/Light';

const JoinUsPlaceholder: FC = () => (
  <div className="w-[120px] flex flex-col">
    <Time withTail={false} position={'bottom'} />
    <h3 className="text-base leading-normal text-center mt-2">You?</h3>
    <h3 className="text-yellow text-center text-2xl leading-none font-gt-ultra-fine font-normal tracking-tightest mt-2 -ml-2 whitespace-nowrap">
      Join our team
    </h3>
  </div>
);

const AboutSection: FC = () => {
  return (
    <section className="relative py-[200px] px-16">
      <Light className="absolute top-[227px] right-0 -z-10 pointer-events-none" />
      <div>
        <h2 className={`${styles.sectionHeadText} mb-2.5`}>
          About <span className="text-turquoise font-normal">us</span>
        </h2>
        <p className={`${styles.sectionSubText} mb-8.5 max-w-[676px]`}>
          We are a value focused agency, leveraging our globally distributed
          team and its diverse set of experiences to deliver products and
          creative digital experiences at speed.
        </p>
        <div className="flex flex-col">
          <div className="mb-14">
            <ClockRow locations={TOP_ROW_LOCATIONS} />
          </div>
          <div className="flex justify-start items-start gap-8 translate-x-18">
            <ClockRow locations={BOTTOM_ROW_LOCATIONS} />
            <JoinUsPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
