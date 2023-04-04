import type { FC } from 'react';

import Link from 'next/link';

import type { IJobOpportunity } from '../../types/types';

const JobOpportunity: FC<IJobOpportunity> = ({ title, url }) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <Link
        href={url}
        className="inline-block bg-yellow text-black text-base font-gt-ultra-fine font-bold leading-loose tracking-wider uppercase px-6 py-1"
      >
        view job
      </Link>
      <h3 className="text-2xl leading-none tracking-tight">{title}</h3>
    </div>
  );
};
export default JobOpportunity;
