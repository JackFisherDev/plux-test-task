import type { FC } from 'react';

import type { ILocationItem } from '../types/types';

import { styles } from '../styles/styles';
import { TIME_PLACEHOLDER } from '../common/consts';

import ClockRow from './ui/Clock';
import Time from './ui/Time';
import Light from './ui/Light';

const topRowLocations: ILocationItem[] = [
  {
    location: 'Los Angeles',
    timeZone: 'America/Los_Angeles',
    alignment: 'top',
  },
  {
    location: 'New York',
    timeZone: 'America/New_York',
    alignment: 'top',
  },
  {
    location: 'Curitiba',
    timeZone: 'America/Sao_Paulo',
    alignment: 'top',
  },
  {
    location: 'Lisbon',
    timeZone: 'Europe/Lisbon',
    alignment: 'top',
  },
  {
    location: 'Lecce',
    timeZone: 'Europe/Rome',
    alignment: 'top',
  },
  {
    location: 'Lagos',
    timeZone: 'Africa/Lagos',
    alignment: 'top',
  },
  {
    location: 'Bali',
    timeZone: 'Asia/Jakarta',
    alignment: 'top',
  },
];
const bottomRowLocations: ILocationItem[] = [
  {
    location: 'San Fransisco',
    timeZone: 'America/Los_Angeles',
    alignment: 'bottom',
  },
  {
    location: 'Toronto',
    timeZone: 'America/Toronto',
    alignment: 'bottom',
  },
  {
    location: 'London',
    timeZone: 'Europe/London',
    alignment: 'bottom',
  },
  {
    location: 'Barcelona',
    timeZone: 'Europe/Madrid',
    alignment: 'bottom',
  },
  {
    location: 'Bratislava',
    timeZone: 'Europe/Bratislava',
    alignment: 'bottom',
  },
  {
    location: 'Singapore',
    timeZone: 'Asia/Singapore',
    alignment: 'bottom',
  },
];

const AboutSection: FC = () => {
  return (
    <section className="relative py-[200px] px-16">
      <Light className="absolute top-[227px] right-0 -z-10 pointer-events-none" />
      <div>
        <h2 className={`${styles.sectionHeadText} mb-3`}>
          About <span className="text-turquoise">us</span>
        </h2>
        <p className={`${styles.sectionSubText} mb-4 max-w-[676px]`}>
          We are a value focused agency, leveraging our globally distributed
          team and its diverse set of experiences to deliver products and
          creative digital experiences at speed.
        </p>
        <div className="flex flex-col">
          <div className="mb-14">
            <ClockRow locations={topRowLocations} />
          </div>
          <div className="flex justify-start items-start gap-8 translate-x-18">
            <ClockRow locations={bottomRowLocations} />
            <div className="w-[120px] flex flex-col">
              {/* <Clock location="You?" timeZone={''} alignment="bottom" /> */}
              <Time withTail={false} position={'bottom'} />
              <h3 className="text-base leading-normal text-center mt-2">
                You?
              </h3>
              <h3 className="text-yellow text-center text-2xl leading-none font-gt-ultra-fine font-normal mt-2 -ml-4 whitespace-nowrap">
                Join our team
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
