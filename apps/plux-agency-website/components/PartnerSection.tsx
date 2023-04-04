import type { FC } from 'react';

import Link from 'next/link';

import type { IPitch } from '../types/types';

import PitchItem from './ui/PitchItem';

const PITCH: IPitch[] = [
  {
    title: 'We get you',
    titleSpacing: 'ml-10 mr-8',
    description: `We’ve been in your shoes. We are a group of builders and operators that has found and led companies in different sectors, from privacy tech to machine learning, and marketing. We’ve had successes and faced struggles, putting us in a unique position to understand and support your needs.`,
    pitchPosition: 'translate-x-[10%]',
  },
  {
    title: 'We have our <br />TPD Process',
    titleSpacing: 'ml-10 mr-8',
    description: `Our founding team has worked together for years in fast-moving startups. We know every product is different, and every project has a different timeline. With our process, we stay focused on delivering value at speed while remaining flexible and creative.`,
    pitchPosition: 'justify-end',
  },
  {
    title: 'We streamline',
    titleSpacing: 'ml-10 mr-8',
    description: `We love and use tools like Notion and Loom a lot. We are focused on delivering value and not on charging you for unnecessary and expensive meetings or beautiful, but useless, Decks.`,
    pitchPosition: '',
  },
  {
    title: 'We hire well',
    titleSpacing: 'mx-8',
    description: `The team we are continuously building is our secret sauce. We value craftsmanship over quantity and scale our team carefully to keep high quality standards.`,
    pitchPosition: 'justify-end',
  },
];

const PartnerSection: FC = () => {
  return (
    <section className="pt-[319px] pb-[273px]">
      <h2 className="text-50 font-gt-ultra-fine font-medium-light text-right leading-none tracking-tight mb-2">
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
          <li key={pitch.title} className="my-30 last:mt-30 last:mb-22">
            <PitchItem number={index + 1} {...pitch} />
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Link
          href="https://pluxagency.com/join-forces"
          className="inline-block bg-pink text-black text-2xl font-gt-ultra-fine font-bold tracking-wider uppercase px-8 py-3"
        >
          let’s join forces
        </Link>
      </div>
    </section>
  );
};

export default PartnerSection;
