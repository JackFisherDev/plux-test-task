import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { ILink } from '../types/types';

import { JOIN_FORCES_URL, FOOTER_LINKS, SOCIAL_LINKS } from '../common/consts';
import { styles } from '../styles/styles';

import PluxLogo from '../public/images/plux-logo.svg';
import FooterBgImage from '../public/images/footer-bg-image.png';

interface ILinkListProps {
  links: ILink[];
}

export const LinkList: FC<ILinkListProps> = ({ links }) => (
  <ul>
    {links.map(({ title, url }) => (
      <li key={url} className="text-right mb-2">
        <Link
          href={url}
          className="font-gt-ultra-fine font-normal text-xl tracking-tight"
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

const Footer: FC = () => {
  return (
    <footer className="relative p-27.5">
      <Image
        src={FooterBgImage}
        alt="Footer background image"
        aria-hidden="true"
        loading="lazy"
        className="absolute -z-10 left-0 right-0 bottom-0 object-cover object-center pointer-events-none"
      />
      <div className="flex justify-between items-start bg-white/5 border border-white/14 max-w-[1457px] mx-auto px-16 py-12">
        <div>
          <Image
            src={PluxLogo}
            alt="Plux Agency logo"
            width={134}
            height={24}
          />
          <Link
            href={JOIN_FORCES_URL}
            className={`${styles.cta} ${styles.ctaSmall} inline-block border border-yellow text-white mt-10.5 mb-12`}
          >
            let’s join forces
          </Link>
          <div className="text-base font-gt-ultra-fine font-bold uppercase tracking-wide">
            <span>&copy;Plux Agency {new Date().getFullYear()}</span>
            <Link href="/privacy-policy" className="ml-8">
              privacy policy
            </Link>
          </div>
        </div>
        <div className="flex justify-end gap-22">
          <LinkList links={FOOTER_LINKS} />
          <LinkList links={SOCIAL_LINKS} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
