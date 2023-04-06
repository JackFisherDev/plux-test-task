export interface ILocationItem {
  location: string;
  timeZone: string;
  alignment: 'top' | 'bottom';
}

export interface IWithClassName {
  className?: string;
}

export interface IFounder {
  name: string;
  jobTitle: string;
  cardAlignment: string;
  containerPosition: string;
  Photo: StaticImageData;
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
  pitchPosition: string;
}

export interface ILink {
  title: string;
  url: string;
}
