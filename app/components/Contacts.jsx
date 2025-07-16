"use client"
import logo from "../assets/logo2.png"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Link from 'next/link'

const Contacts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-black text-white min-w-screen gap-4">
      <div><Image src={logo} alt="logo" width={250} height={250} /></div>
      <div className="flex justify-between items-center gap-6">
        <Link href="https://github.com/FahadNassir" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-2xl">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/fahad-nassir-4997b8374?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlsigjzZqT%2F6bKEKlVAKhRg%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-2xl">
          <FaLinkedin />
        </Link>
        <Link href="mailto:nassirfahad69@gmail.com" className="hover:text-blue-400 transition-colors text-2xl">
          <FaEnvelope />
        </Link>
      </div>
      <div className="mt-8 text-sm text-gray-400">
        <p className="mb-2">
          Email: nassirfahad69@gmail.com
        </p>
        <p>
          Phone: +254746510727
        </p>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p className="mb-2">
          Note: The hosting for these sites is currently free, so it might take the servers a while to start up.
        </p>
        <p>
          The logos and company names in the projects are only for demonstration purposes and I'm not in partnership or endorsed by any of them.
        </p>
      </div>
    </div>
  )
}

export default Contacts