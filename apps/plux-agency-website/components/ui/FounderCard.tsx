import type { FC } from 'react';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import type { IFounder } from '../../types/types';

import PluxIcon from '../../public/images/plux-icon.svg';
import CrossIcon from '../../public/images/cross-icon.svg';

const FounderCard: FC<IFounder> = ({
  name,
  jobTitle,
  cardAlignment,
  containerPosition,
  image,
  bio,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCard = () => setIsOpen(true);
  const closeCard = () => setIsOpen(false);

  const cardStateStyle = {
    closed: `max-w-[256px] relative border border-white/15 bg-white/8`,
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
    <div className={`${!isOpen ? containerPosition : ''}`}>
      <motion.div
        layout
        className={`${
          !isOpen ? cardStateStyle.closed : cardStateStyle.open
        } backdrop-blur-[6px] ${cardAlignment}`}
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
            <motion.div
              layout
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
            </motion.div>

            <div
              className={`${!isOpen ? '' : 'flex-1 translate-y-4'} relative`}
            >
              <motion.h3
                layout
                className={`${
                  !isOpen
                    ? 'text-center text-2xl font-bold tracking-tightest mb-2'
                    : 'text-[56px] tracking-tight font-normal mb-4 flex justify-start items-end gap-3'
                } text-white font-gt-ultra-fine leading-none`}
              >
                {name}
                <motion.div
                  layout
                  className={`${
                    !isOpen
                      ? 'absolute z-10 -ml-10 left-1/2 -top-[104px] w-20 h-20'
                      : 'relative w-[43px] h-[43px]'
                  } pointer-events-none`}
                >
                  <Image
                    src={PluxIcon}
                    alt="Plux icon"
                    loading="lazy"
                    fill
                    className="w-full h-full"
                  />
                </motion.div>
              </motion.h3>

              <motion.p
                layout
                className={`${
                  !isOpen ? 'text-base text-center' : 'text-2xl mb-4'
                } leading-none text-yellow`}
              >
                {jobTitle}
              </motion.p>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 120, y: 40 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: { delay: 0.15, ease: 'easeIn' },
                    }}
                    exit={{
                      display: 'none',
                    }}
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
      {/*
        NOTE: Bottom div is a placeholder that appears when the card becomes
            "position: fixed;". It is needed to prevent other card shifting.
      */}
      {isOpen && <div className={`w-[256px] h-[416px] ${containerPosition}`} />}
    </div>
  );
};

export default FounderCard;
