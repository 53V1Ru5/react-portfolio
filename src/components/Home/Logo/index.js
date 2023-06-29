import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LogoS from '../../../assets/images/logo-i.png';
import './index.scss';
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 10,
    },
  },
};

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .to(outlineLogoRef.current, {
        attr: { 'stroke-dashoffset': 0 },
        duration: 1,
      })
      .fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript Developer"
      />

      <svg
        width="745.333pt"
        height="1196pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" fill="none">
          <motion.path
            d="M314 .9c-2.5.5-6.5 1.2-9 1.6-2.5.4-8.4 2-13.2 3.6C256 17.9 228 47.3 218 83.5c-2.7 9.9-3 12.5-3.7 26.1-1.5 32.3 9.7 61.4 32.5 84.4 14.4 14.5 32.1 24.7 52.3 30 10.6 2.8 33.4 3.8 44.7 2 38-6.1 69.1-29 85.6-63.1 17.7-36.7 14.5-78-9-112.9-6.9-10.3-19.6-23-29.3-29.4-14-9.1-25.4-14.1-40-17.5C340.9.7 321.5-.4 314 .9zM291.5 289c-4.9.4-42.9.8-84.4.9-41.5 0-75.6.2-75.7.4-.8.8-3.2 27.2-2.5 27.7.5.3 15.1.5 32.5.5 27.8-.1 31.6.1 31.6 1.5 0 .8-.9 6-1.9 11.5-1 5.5-2.2 11.6-2.5 13.5-.3 1.9-2.1 11.8-4 22-3.3 17.5-11 59.6-12 65-.2 1.4-2.9 16-6 32.5-3 16.5-5.7 31.3-6 33-.3 1.6-1 5.5-1.6 8.5-2.3 11.9-16.3 88.6-19.6 107-1.9 10.7-3.6 20.4-3.8 21.5-.2 1.1-1.3 6.9-2.5 13-1.1 6-2.2 12.1-2.5 13.5-.2 1.4-.7 4.3-1.1 6.5-3 16.4-5.4 30.1-6 34.5-.4 2.4-.8 4.7-1 5-.1.3-.6 3.9-1 8s-.8 7.7-1 8c-.4.6-1.3 9.3-2.4 22-1.3 14.4-.6 39.2 1.3 49 11 56.1 51.9 92.1 115.3 101.5 16 2.3 48.7 2.1 61.6-.6 29.3-5.9 55.4-19.7 75.9-40.2 9.8-9.8 12.6-13.4 11.2-14.6-.5-.5-5.8-4.7-11.8-9.5l-10.8-8.6-2.7 3.3c-16.4 20.7-41.7 34.8-71.7 40l-3 .6 1.3-7.2c1.8-10.3 105.2-563.8 105.8-566.3.4-1.7-.1-2.3-2.3-2.8-3.8-1-85.7-1.5-96.7-.6z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
