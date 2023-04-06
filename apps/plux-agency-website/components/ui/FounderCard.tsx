import type { FC } from 'react';

import { useState, useEffect } from 'react';
import Image from 'next/image';
// import { motion } from 'framer-motion';

import type { IFounder } from '../../types/types';

import PluxIcon from '../../public/images/plux-icon.svg';
import CrossIcon from '../../public/images/cross-icon.svg';

const FounderCard: FC<IFounder> = ({
  name,
  jobTitle,
  cardPosition,
  image,
  bio,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCard = () => setIsOpen(true);
  const closeCard = () => setIsOpen(false);

  const cardStateStyle = {
    closed: `max-w-[256px] relative border border-white/15 bg-white/8 ${cardPosition}`,
    open: `flex justify-center items-center bg-black/48 fixed top-0 left-0 right-0 bottom-0 z-20`,
  };

  useEffect(() => {
    const handleCloseModal = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCard();
      }
    };
    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, []);

  return (
    <>
      <div
        className={`${
          !isOpen ? cardStateStyle.closed : cardStateStyle.open
        } backdrop-blur-[6px]`}
      >
        <div className={`${!isOpen ? '' : 'w-full max-w-[1372px]'} relative`}>
          <button
            type="button"
            className={`${
              !isOpen ? 'hidden' : ''
            } absolute top-0 right-0 z-10 cursor-pointer`}
            onClick={closeCard}
          >
            <Image
              src={CrossIcon}
              alt="Close card button"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
          <div
            className={`${
              !isOpen
                ? 'p-4 pb-16 hover:cursor-pointer'
                : 'flex justify-start items-center gap-[55px] w-full'
            }`}
            onClick={openCard}
          >
            <div
              className={`${
                !isOpen ? 'mb-16' : 'flex-1 w-full max-w-[480px]'
              } relative shadow-photo`}
            >
              <Image
                src={image}
                alt={`${name} ${jobTitle}`}
                width={480}
                height={480}
                loading="lazy"
                className={`block w-full ${
                  !isOpen
                    ? 'drop-shadow-small-photo'
                    : 'drop-shadow-large-photo w-full'
                }`}
              />
            </div>
            <div
              className={`${!isOpen ? '' : 'flex-1 translate-y-4'} relative`}
            >
              <h3
                className={`${
                  !isOpen
                    ? 'text-center text-2xl font-bold tracking-tightest mb-2'
                    : 'text-[56px] tracking-tight font-normal mb-4 flex justify-start items-end gap-3'
                } text-white font-gt-ultra-fine leading-none `}
              >
                {name}
                <Image
                  src={PluxIcon}
                  alt="Plux icon"
                  width={!isOpen ? 80 : 43}
                  height={!isOpen ? 80 : 43}
                  loading="lazy"
                  className={`${
                    !isOpen
                      ? 'absolute  z-10 -translate-x-10 left-1/2 -top-[104px]'
                      : 'static'
                  }  pointer-events-none`}
                />
              </h3>
              <p
                className={`${
                  !isOpen ? 'text-base text-center' : 'text-2xl'
                }  leading-none text-yellow`}
              >
                {jobTitle}
              </p>
              <div className={`${!isOpen ? 'hidden' : ''} mt-4`}>
                {bio.map(({ label, items }) => (
                  <div key={`${name}-${label}`} className="mb-4">
                    <h4 className="text-base leading-none mb-1">{label}</h4>
                    <ul className="list-disc ml-2.5">
                      {items.map((item, index) => (
                        <li
                          key={`${index}-${item}`}
                          className="text-base leading-relaxed opacity-80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
        NOTE: Bottom div is a placeholder that appears when the card becomes
              "position: fixed;". It is needed to prevent other card shifting.
      */}
      {isOpen && <div className={`w-[256px] h-[416px] ${cardPosition}`} />}
    </>
  );
};

export default FounderCard;
