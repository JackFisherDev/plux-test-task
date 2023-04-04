import type { FC } from 'react';

import type { ILocationItem } from '../../types/types';

import Time from './Time';

interface IClockProps extends ILocationItem {
  hasTail?: boolean;
}

export const Clock: FC<IClockProps> = ({
  location = '',
  time = '',
  alignment = 'top',
  hasTail = false,
}) => {
  const isTitleOnTop = alignment === 'top';

  return (
    <div className={`flex ${isTitleOnTop ? 'flex-col' : 'flex-col-reverse'}`}>
      <h3
        className={`text-base leading-normal text-center ${
          isTitleOnTop ? 'mb-2' : 'mt-2'
        }`}
      >
        {location}
      </h3>
      <Time time={time} withTail={hasTail} position={alignment} />
    </div>
  );
};

interface IClockRowProps {
  locations: ILocationItem[];
}

const ClockRow: FC<IClockRowProps> = ({ locations }) => {
  return (
    <div className="flex justify-start gap-8">
      {locations.map((location, index) => (
        <Clock
          key={`${index}-${location.location}`}
          hasTail={true}
          {...location}
        />
      ))}
    </div>
  );
};

export default ClockRow;
