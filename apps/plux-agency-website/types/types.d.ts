export interface ILocationItem {
  location: string;
  time: string;
  alignment: 'top' | 'bottom';
}

export interface IWithClassName {
  className?: string;
}

export interface IFounder {
  name: string;
  jobTitle: string;
  cardPosition: string;
  image: string;
  bio: IBioItem[];
}

export interface IBioItem {
  label: string;
  items: string[];
}

export interface IPitch {
  title: string;
  titleSpacing: string;
  description: string;
}
