import type { IFounder, IPitch, ILink, ILocationItem } from '../types/types';

import AndrePhoto from '../public/images/andre-photo.png';
import StevenPhoto from '../public/images/steven-photo.png';
import SamiPhoto from '../public/images/sami-photo.png';
import MarcosPhoto from '../public/images/marcos-photo.png';

export const JOIN_FORCES_URL = 'https://pluxagency.com/join-forces';

export const TIME_PLACEHOLDER = '--:--';

export const FOUNDERS: IFounder[] = [
  {
    name: 'André Carmo',
    jobTitle: 'Co-Founder & CEO',
    cardAlignment: '',
    containerPosition: 'translate-x-[144px] mb-[87px]',
    Photo: AndrePhoto,
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
    cardAlignment: 'ml-auto mr-0',
    containerPosition: 'mb-8 -translate-x-[425px]',
    Photo: StevenPhoto,
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
    cardAlignment: '',
    containerPosition: 'translate-x-[312px] mb-8',
    Photo: SamiPhoto,
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
    cardAlignment: 'ml-auto mr-0',
    containerPosition: '-translate-x-[219px]',
    Photo: MarcosPhoto,
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

export const PITCH: IPitch[] = [
  {
    title: 'We get you',
    titleSpacing: 'ml-11 mr-9',
    description: `We’ve been in your shoes. We are a group of builders and operators that has found and led companies in different sectors, from privacy tech to machine learning, and marketing. We’ve had successes and faced struggles, putting us in a unique position to understand and support your needs.`,
    pitchPosition: 'translate-x-[57px]',
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

export const OPPORTUNITIES: ILink[] = [
  { title: 'Product Designer (Remote)', url: '/product-designer' },
  { title: 'UI Engineer (Remote)', url: '/ui-engineer' },
  { title: 'Product Manager (Remote)', url: '/product-manager' },
];

export const FOOTER_LINKS: ILink[] = [
  { title: 'Home', url: '/' },
  { title: 'Our Work', url: '/portfolio' },
];
export const SOCIAL_LINKS: ILink[] = [
  { title: 'LinkedIn', url: 'https://www.linkedin.com/company/plux-agency/' },
  { title: 'Dribbble', url: 'https://www.dribbble.com/company/plux-agency/' },
  { title: 'Behance', url: 'https://www.behance.com/company/plux-agency/' },
];

export const TOP_ROW_LOCATIONS: ILocationItem[] = [
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

export const BOTTOM_ROW_LOCATIONS: ILocationItem[] = [
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
