import React from 'react';
import ProjectCard from './ProjectCard';
import nextt from '../assets/nextdotjs.png';
import hospital from '../assets/projectImages/hospital.png';
import imp from '../assets/projectImages/imp.png';
import blackMarket from '../assets/projectImages/blackmarket.png';
import teapot from '../assets/projectImages/teapot.png';
import tailwind from '../assets/tailwindcss.png';

const Projects = ({ ref }) => {

  const projects = [
    {
      name: "InvesTrack",
      description: "InvesTrack is an investment tracking platform built with Next.js",
      image: imp,
      link: "https://i-m-p.onrender.com/",
      framework: nextt
    },
    {
      name: "Teapot",
      description: "Teapot is a restaurant management system built with Next.js and Express js.",
      image: teapot,
      link: "https://teapot-beta.vercel.app/",
      framework: nextt
    },
    {
      name: "blackMarket",
      description: "blackMarket is an e-commerce platform built with Next.js and Express js.",
      image: blackMarket,
      link: "https://blackmarket-2.onrender.com/",
      framework: nextt
    },
    {
      name: "Hospital ticketing",
      description: "print tickets for patients similar to what happens in a bank.Built with Next.js and Express js.",
      image: hospital,
      link: "https://patients-client.onrender.com/",
      framework: nextt
    }  ,
  ]
  return (
    <div ref={ref} className='w-full min-h-screen p-6 flex flex-col items-center justify-center'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                name={project.name} 
                description={project.description} 
                image={project.image} 
                framework={project.framework}
                link={project.link}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Projects