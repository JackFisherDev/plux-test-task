import type { IFounder } from '../types/types';

import AndrePhoto from '../public/images/andre-photo.png';
import StevenPhoto from '../public/images/steven-photo.png';
import SamiPhoto from '../public/images/sami-photo.png';
import MarcosPhoto from '../public/images/marcos-photo.png';

export const FOUNDERS: IFounder[] = [
  {
    name: 'André Carmo',
    jobTitle: 'Co-Founder & CEO',
    cardPosition: 'translate-x-1/2 mb-[103px]',
    image: AndrePhoto.src,
    bio: [
      {
        label: 'Track Record',
        items: [
          'Founder & Executive in 4 Technology companies',
          'Angel Investor and Advisor in early stage companies across Europe',
        ],
      },
      {
        label: 'Super Powers',
        items: [
          'Building strong teams',
          'Creating and translating complex visions to stakeholders with different levels of knowledge',
        ],
      },
      {
        label: 'Fun Fact',
        items: ['Played Super High Stakes Poker in Macau'],
      },
    ],
  },
  {
    name: 'Steven Ligatsa',
    jobTitle: 'Co-Founder & CDO',
    cardPosition: 'ml-auto mr-0 mb-8 -translate-x-[165%]',
    image: StevenPhoto.src,
    bio: [
      {
        label: 'Track Record',
        items: [
          'Founder & Executive in 4 Technology companies',
          'Angel Investor and Advisor in early stage companies across Europe',
        ],
      },
      {
        label: 'Super Powers',
        items: [
          'Building strong teams',
          'Creating and translating complex visions to stakeholders with different levels of knowledge',
        ],
      },
      {
        label: 'Fun Fact',
        items: ['Played Super High Stakes Poker in Macau'],
      },
    ],
  },
  {
    name: 'Sami McCabe',
    jobTitle: 'Co-Founder & CEO',
    cardPosition: 'translate-x-[120%] mb-8',
    image: SamiPhoto.src,
    bio: [
      {
        label: 'Track Record',
        items: [
          'Founder & Executive in 4 Technology companies',
          'Angel Investor and Advisor in early stage companies across Europe',
        ],
      },
      {
        label: 'Super Powers',
        items: [
          'Building strong teams',
          'Creating and translating complex visions to stakeholders with different levels of knowledge',
        ],
      },
      {
        label: 'Fun Fact',
        items: ['Played Super High Stakes Poker in Macau'],
      },
    ],
  },
  {
    name: 'Marcos Silva',
    jobTitle: 'Co-Founder & CEO',
    cardPosition: 'ml-auto mr-0 -translate-x-[85%]',
    image: MarcosPhoto.src,
    bio: [
      {
        label: 'Track Record',
        items: [
          'Founder & Executive in 4 Technology companies',
          'Angel Investor and Advisor in early stage companies across Europe',
        ],
      },
      {
        label: 'Super Powers',
        items: [
          'Building strong teams',
          'Creating and translating complex visions to stakeholders with different levels of knowledge',
        ],
      },
      {
        label: 'Fun Fact',
        items: ['Played Super High Stakes Poker in Macau'],
      },
    ],
  },
];
