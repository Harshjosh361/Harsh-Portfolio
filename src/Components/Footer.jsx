import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='border-b border-neutral-900  text-white flex flex-col justify-center items-center p-4 m-2'>
        <p>Copyright © {currentYear} - All rights reserved</p>
        <p>Harsh Joshi</p>
    </div>
  )
}

export default Footer
