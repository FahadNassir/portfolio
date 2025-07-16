"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { delay, motion } from 'framer-motion';

import tail from '../assets/tailwindcss.png';
import rreact from '../assets/react.png';
import solid from '../assets/solid.png';
import node from '../assets/nodedotjs.png';
import next from '../assets/nextdotjs.png';
import mongo from '../assets/mongodb.png';
import terminal from '../assets/terminal.png';
import desktop from '../assets/desktop.png';

const skills = [tail, rreact, terminal, next, mongo, desktop];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.12,
    bounce: 0.4,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 15,
      mass: 0.4
    }
  }
};

const Home = ({ projectsRef }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const button = document.querySelector('.view-projects-btn');
    if (button) {
      button.addEventListener('click', handleScroll);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 space-y-20 relative">
      
      {/* Certifications Button */}
      <Link href="/certifications">
        <button className="absolute top-6 right-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          Certifications
        </button>
      </Link>
      
      {/* Hero Section */}
      <section className="text-center max-w-4xl space-y-6 mt-5">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Building bold web experiences, front to back.
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-2 mb-5">
        I build fast frontends and fix slow networks.
With Next.js, React, and Tailwind on one side — and DNS, firewalls, and remote support on the other — I bridge clean UI with clean infrastructure.
        </p>
        <button className="mt-2 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition view-projects-btn">
          View Projects
        </button>
      </section>

      {/* Animation Area */}
      <div className="relative flex h-32 w-full max-w-6xl -top-6 items-end justify-center">
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex gap-6 mb-4"
        >
          {skills.map((skill, i) => (
            <motion.div key={i} variants={item}>
              <Image
                src={skill}
                alt={`Skill ${i + 1}`}
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-0 h-0.5 bg-black"
          style={{ width: '0%' }}
          animate={{ width: ['0%', '60%', '60%', '0%'] }}
          transition={{
            duration: 2.8,
            times: [0, 0.3, 0.7, 1],
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Home;
