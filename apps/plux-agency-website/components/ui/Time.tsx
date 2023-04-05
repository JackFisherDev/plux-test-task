import type { FC } from 'react';

// import { TIME_PLACEHOLDER } from '../../common/consts';

interface ITimeProps {
  time?: string;
  hours?: string;
  minutes?: string;
  withTail?: boolean;
  position?: 'top' | 'bottom';
}

const TIME_PLACEHOLDER = '--';

const Time: FC<ITimeProps> = ({
  // time = TIME_PLACEHOLDER,
  hours = '--',
  minutes = '--',
  withTail = false,
  position = 'top',
}) => {
  const tailPosition = {
    top: 'top-full -rotate-[52deg] origin-top',
    bottom: 'bottom-full rotate-[55deg] origin-bottom',
  };
  const isWorking = hours !== TIME_PLACEHOLDER || minutes !== TIME_PLACEHOLDER;

  return (
    <time
      className={`${
        !isWorking ? 'bg-yellow' : 'bg-turquoise'
      } text-black font-gt-ultra-fine font-bold text-8 leading-none tracking-wider text-center py-4 w-[120px] relative z-1`}
    >
      {withTail && (
        <span
          className={`block h-[98px] w-px bg-white absolute left-1/2 -z-10 ${tailPosition[position]}`}
        ></span>
      )}
      {hours}
      <span className="animate-blink">:</span>
      {minutes}
    </time>
  );
};

export default Time;
