import type { FC } from 'react';

import Link from 'next/link';

import type { ILink } from '../../types/types';

import { styles } from '../../styles/styles';

const JobOpportunity: FC<ILink> = ({ title, url }) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <Link
        href={url}
        className={`${styles.cta} ${styles.ctaSmall} inline-block bg-yellow text-black`}
      >
        view job
      </Link>
      <h3 className="text-2xl leading-none tracking-tighter">{title}</h3>
    </div>
  );
};
export default JobOpportunity;
