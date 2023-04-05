import type { FC } from 'react';

import { OPPORTUNITIES } from '../common/consts';
import { styles } from '../styles/styles';

import JobOpportunity from './ui/JobOpportunity';

const JoinUsSection: FC = () => {
  return (
    <section className="px-16 mb-12">
      <h2 className={`${styles.sectionHeadText} mb-12`}>
        Join our <span className="font-normal text-yellow">team</span>
      </h2>
      <p className={`${styles.sectionSubText} max-w-[753px] mb-10`}>
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
