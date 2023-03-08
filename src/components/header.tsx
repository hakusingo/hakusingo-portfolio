import React from 'react'
import { Navbar } from "flowbite-react";
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Navbar
          fluid={true}
          rounded={true}
        >
        <Navbar.Brand href="/">
          <Image
            src="logo.svg"
            width="30"
            height="30"
            alt="logo"
            className='mr-2'
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ShingoTomari
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">
            About
          </Navbar.Link>
          <Navbar.Link href="/works">
            Works
          </Navbar.Link>
          {/* <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
