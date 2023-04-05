import type { FC } from 'react';

import Link from 'next/link';

import { styles } from '../../styles/styles';

import type { IJobOpportunity } from '../../types/types';

const JobOpportunity: FC<IJobOpportunity> = ({ title, url }) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <Link
        href={url}
        className={`${styles.cta} ${styles.ctaSmall} inline-block bg-yellow`}
      >
        view job
      </Link>
      <h3 className="text-2xl leading-none tracking-tight">{title}</h3>
    </div>
  );
};
export default JobOpportunity;
