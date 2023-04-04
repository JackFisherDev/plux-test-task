import type { FC } from 'react';

interface ITimeProps {
  time?: string;
  withTail?: boolean;
  position?: 'top' | 'bottom';
}

const TIME_PLACEHOLDER = '--:--';

const Time: FC<ITimeProps> = ({
  time = TIME_PLACEHOLDER,
  withTail = false,
  position = 'top',
}) => {
  const tailPosition = {
    top: 'top-full -rotate-[52deg] origin-top',
    bottom: 'bottom-full rotate-[55deg] origin-bottom',
  };
  return (
    <time
      className={`${
        time === TIME_PLACEHOLDER ? 'bg-yellow' : 'bg-turquoise'
      } text-black font-gt-ultra-fine font-bold text-8 leading-none tracking-wider text-center py-4 w-[120px] relative z-1`}
    >
      {withTail && (
        <span
          className={`block h-[98px] w-px bg-white absolute left-1/2 -z-10 ${tailPosition[position]}`}
        ></span>
      )}
      {time}
    </time>
  );
};

export default Time;
