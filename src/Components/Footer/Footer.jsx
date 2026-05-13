import React from 'react'
import FLogo from '../FLogo'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaRegCopyright, FaTiktok } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'

export default function Footer() {
  return (
    <footer className='p-15 py-20 bg-[rgba(8,8,8,0.37)] border-t border-white/6'>
      <div className="grid lg:grid-cols-4 gap-5 border-b border-white/6 pb-5 ">
        {/* Col-1 */}
        <div className="lg:col-span-1">
          <div className='space-y-5'>
            {/* Brand */}
            <NavLink
              to="/"
              className="flex items-center gap-3 no-underline shrink-0"
            >
              <FLogo size={28} />
              <span className="text-white text-xl font-bold tracking-[0.15em] uppercase
                                       font-['Barlow_Condensed',Arial_Narrow,sans-serif]">
                Fayntrix
              </span>
            </NavLink>
            <p className='text-white/60'>
              A luxury creative house crafting cinematic visuals and refined brand stories with precision,
              emotionm and elite artistic direction.
            </p>
            <div className="icons text-white/60 flex items-center gap-4">
              <Link to="https://www.facebook.com/share/1LMMmLRG1o/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <div className="border border-white/60 rounded-full p-2 cursor-pointer hover:bg-white/10 transition-colors duration-200 flex justify-center items-center ">
                  <FaFacebookF />
                </div>
              </Link>
              <div className="border border-white/60 rounded-full p-2 cursor-pointer hover:bg-white/10 transition-colors duration-200 flex justify-center items-center ">
                <FaInstagram />
              </div>
              <div className="border border-white/60 rounded-full p-2 cursor-pointer hover:bg-white/10 transition-colors duration-200 flex justify-center items-center ">
                <FaTiktok />
              </div>
            </div>

          </div>

        </div>
        <div className="lg:col-span-1">
          <div className="space-y-3 ps-4">
            <h2 className='text-white text-2xl' style={{ fontFamily: "'Barlow_Condensed', Arial Narrow, sans-serif" }}>Studio</h2>
            <ul className='space-y-2 text-white/60 list-none m-0 p-0'>
              <li className='hover:text-white transition-colors duration-200'>
                <Link to={'/about'}>
                  About Us
                </Link>
              </li>
              <li className='hover:text-white transition-colors duration-200'>Our Ethos</li>
              <li className='hover:text-white transition-colors duration-200'>Capabilities</li>
              <li className='hover:text-white transition-colors duration-200'>Career</li>
            </ul>

          </div>

        </div>
        <div className="lg:col-span-1">
          <div className="space-y-3">
            <h2 className='text-white text-2xl' style={{ fontFamily: "'Barlow_Condensed', Arial Narrow, sans-serif" }}>Work</h2>
            <ul className='space-y-2 text-white/60 list-none m-0 p-0'>
              <li className='hover:text-white transition-colors duration-200'>
                <Link to={'/about'}>
                  Cinematography
                </Link>
              </li>
              <li className='hover:text-white transition-colors duration-200'>Editorial</li>
              <li className='hover:text-white transition-colors duration-200'>Commercial</li>
              <li className='hover:text-white transition-colors duration-200'>Archive</li>
            </ul>

          </div>

        </div>
        <div className="lg:col-span-1">
          <div className="space-y-3">
            <h2 className='text-white text-2xl' style={{ fontFamily: "'Barlow_Condensed', Arial Narrow, sans-serif" }}>Connect</h2>
            <ul className='space-y-2 text-white/60 list-none m-0 p-0 border-b border-white/6 pb-5'>
              <li className='hover:text-white transition-colors duration-200'>
                <Link to={'/about'}>
                  Kareem@gmail.com
                </Link>
              </li>
              <li className='hover:text-white transition-colors duration-200'>+201099600611</li>
            </ul>
          </div>
          <h4 className='text-white/60 pt-5 flex items-center gap-2'>
            <IoLocationOutline className='text-2xl' />
            MAADI , CAIRO</h4>

        </div>
      </div>
      <div className='mt-8 flex justify-between items-center'>

        <p className='text-white/60 text-sm flex items-center gap-1'>
          <FaRegCopyright />
          {new Date().getFullYear()} Fayntrix. All rights reserved.
        </p>
        <p className='text-white/60 text-sm'>
          Privacy Policy  |  Terms of Service
        </p>
      </div>

    </footer>
  )
}
