import type { FC } from 'react';

import type { ILocationItem } from '../types/types';

import ClockRow, { Clock } from './ui/Clock';
import Light from './ui/Light';

const topRowLocations: ILocationItem[] = [
  {
    location: 'Los Angeles',
    time: '8:16',
    alignment: 'top',
  },
  {
    location: 'New York',
    time: '11:16',
    alignment: 'top',
  },
  {
    location: 'Curitiba',
    time: '13:16',
    alignment: 'top',
  },
  {
    location: 'Lisbon',
    time: '16:16',
    alignment: 'top',
  },
  {
    location: 'Lecce',
    time: '17:16',
    alignment: 'top',
  },
  {
    location: 'Lagos',
    time: '17:16',
    alignment: 'top',
  },
  {
    location: 'Bali',
    time: '00:16',
    alignment: 'top',
  },
];
const bottomRowLocations: ILocationItem[] = [
  {
    location: 'San Fransisco',
    time: '8:16',
    alignment: 'bottom',
  },
  {
    location: 'Toronto',
    time: '11:16',
    alignment: 'bottom',
  },
  {
    location: 'London',
    time: '16:16',
    alignment: 'bottom',
  },
  {
    location: 'Barcelona',
    time: '17:16',
    alignment: 'bottom',
  },
  {
    location: 'Bratislava',
    time: '17:16',
    alignment: 'bottom',
  },
  {
    location: 'Singapore',
    time: '00:16',
    alignment: 'bottom',
  },
];

const AboutSection: FC = () => {
  return (
    <section className="relative py-[200px] px-16">
      <Light className="absolute top-[227px] right-0 -z-10 pointer-events-none" />
      <div>
        <h2 className="text-50 font-gt-ultra-fine leading-none font-medium-light tracking-tight mb-3">
          About <span className="text-turquoise">us</span>
        </h2>
        <p className="text-white text-2xl mb-4 max-w-[676px]">
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
            <div className="w-[120px]">
              <Clock location="You?" time={'--:--'} alignment="bottom" />
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
