import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">hakusingo.com™</Link>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="about" className="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
          <Link href="works" className="mr-4 hover:underline md:mr-6">Works</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
