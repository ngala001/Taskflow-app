import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthNav = () => {
  return (
    <header className=' py-3 bg-base-200 dark:bg-black shadow-sm'>
        <nav className='flex items-center container px-4 mx-auto'>
           {/* <span className='btn btn-sm btn-ghost sm:hidden'>
             <Menu/>
           </span> */}
           <Link href={"/"} className='flex space-x-3 items-center'>
             <Image
              src={'/Logo.png'}
              alt='Logo image'
              width={25}
              height={25}
             />
             <span className='text-lg font-semibold'>TASKFLOW</span>
            </Link>
            <ul className='flex space-x-4 items-center ml-auto'>
              <li>
                <Link href={"/login"} className='btn text-white btn-error btn-sm px-6' >Sign In</Link>
              </li>
              {/* <li className='btn btn-ghost'>Sign Up</li> */}
            </ul>
        </nav>
    </header>
  )
}

export default AuthNav