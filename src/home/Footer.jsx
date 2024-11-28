import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-[64px]">
        <p className="text-center font-semibold text-black">© {currentYear} Aviate PH All rights reserved. Created by Gem Michael Nieva.</p>
    </footer>
  )
}

export default Footer;