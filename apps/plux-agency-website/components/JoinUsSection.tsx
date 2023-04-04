import type { FC } from 'react';

import type { IJobOpportunity } from '../types/types';

import JobOpportunity from './ui/JobOpportunity';

const OPPORTUNITIES: IJobOpportunity[] = [
  { title: 'Product Designer (Remote)', url: '/product-designer' },
  { title: 'UI Engineer (Remote)', url: '/ui-engineer' },
  { title: 'Product Manager (Remote)', url: '/product-manager' },
];

const JoinUsSection: FC = () => {
  return (
    <section className="px-16">
      <h2 className="text-50 font-gt-ultra-fine font-medium-light leading-none tracking-tight mb-12">
        Join our <span className="font-normal text-yellow">team</span>
      </h2>
      <p className="text-2xl leading-snug max-w-[753px] mb-10">
        We are always looking to add talents to our team. If you feel like
        you’re a good fit with our team, please apply to any of the openings
        that we have.
      </p>
      <ul>
        {OPPORTUNITIES.map((opportunity) => (
          <li key={opportunity.title} className="my-6">
            <JobOpportunity {...opportunity} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JoinUsSection;
