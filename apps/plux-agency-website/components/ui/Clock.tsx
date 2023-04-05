import type { FC } from 'react';

import { useState, useEffect } from 'react';

import type { ILocationItem } from '../../types/types';

import Time from './Time';

interface IClockProps extends ILocationItem {
  hasTail?: boolean;
}

export const Clock: FC<IClockProps> = ({
  location = '',
  timeZone = '',
  alignment = 'top',
  hasTail = false,
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const isTitleOnTop = alignment === 'top';

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the local time for each city using the Intl API
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat([], {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
    });
    const localTime = formatter.formatToParts(currentTime);

    for (const part of localTime) {
      switch (part.type) {
        case 'hour':
          setHours(part.value);
          break;
        case 'minute':
          setMinutes(part.value);
          break;
      }
    }
  }, [currentTime]);

  return (
    <div className={`flex ${isTitleOnTop ? 'flex-col' : 'flex-col-reverse'}`}>
      <h3
        className={`text-base leading-normal text-center ${
          isTitleOnTop ? 'mb-2' : 'mt-2'
        }`}
      >
        {location}
      </h3>
      <Time
        hours={hours}
        minutes={minutes}
        withTail={hasTail}
        position={alignment}
      />
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
