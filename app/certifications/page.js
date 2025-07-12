"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Import certificate images
import cert1 from '../assets/certs/comp-networking.png'
import cert2 from '../assets/certs/itinfrastructure.png'
import cert3 from '../assets/certs/itsecurity.png'
import cert4 from '../assets/certs/ospower.png'
import cert5 from '../assets/certs/techsupport.png'
import cert6 from '../assets/certs/responsive.png'
import cert7 from '../assets/certs/js.png'

const itCertifications = [
  {
    id: 1,
    title: "The Bits and Bytes of Computer Networking",
    description: "",
    image: cert1,
    link: "https://coursera.org/share/5dee994f85cd48bceacf4a51f6dde71a",
    date: "2025"
  },
  {
    id: 2,
    title: "System Administration and IT infrastructure services",
    description: "",
    image: cert2,
    link: "https://coursera.org/share/fbcdf2ee2d6d227a026862c86fd9d39f",
    date: "2025"
  },
  {
    id: 3,
    title: "It Security: Defense against the digital dark arts",
    description: "",
    image: cert3,
    link: "https://coursera.org/share/bbc9e731eaf80b9bab61f67bcbb9ef82",
    date: "2025"
  },
  {
    id: 4,
    title: "Operating Systems and You: Becoming a Power User",
    description: "",
    image: cert4,
    link: "https://coursera.org/share/79ff8d619607f2827b0cfc840e25cf1b",
    date: "2025"
  },
  {
    id: 5,
    title: "Technical Support Fundamentals",
    description: "",
    image: cert5,
    link: "https://coursera.org/share/dbbb027b681e867c0fa732b54ebba21b",
    date: "2025"
  }
]

const webDevCertifications = [
  {
    id: 6,
    title: "Responsive Web Design",
    description: "",
    image: cert6,
    link: "https://freecodecamp.org/certification/Inconsistent62/responsive-web-design",
    date: "2025"
  },
  {
    id: 7,
    title: "JavaScript Algorithms and Data Structures",
    description: "",
    image: cert7,
    link: "https://freecodecamp.org/certification/Inconsistent62/javascript-algorithms-and-data-structures-v8",
    date: "2025"
  }
]

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('web')

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Professional certifications and achievements in web development and IT
          </p>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            <span>←</span>
            Back to Home
          </Link>
        </div>

        {/* Tab Switching */}
        <div className="mb-8 flex justify-center">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <motion.button
              onClick={() => setActiveTab('it')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'it'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              IT Certifications
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'web'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Web Development
            </motion.button>
          </div>
        </div>

        {/* Certifications Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === 'it' ? itCertifications : webDevCertifications).map((cert) => (
              <motion.div 
                key={cert.id} 
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Certificate Image */}
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                
                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {cert.description}
                  </p>
                  
                  <motion.button 
                    className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition flex items-center justify-center gap-2"
                    onClick={() => window.open(cert.link, '_blank')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Certificate</span>
                    <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            All certificates are verified and can be validated through their respective issuing organizations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Certifications