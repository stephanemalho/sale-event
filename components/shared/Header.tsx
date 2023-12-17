import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-46 "> 
          <Image alt="Evently logo" src="/assets/images/logo.svg" width={128} height={36} />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          
        </div>
      </div>
    </header>
  )
}

export default Header