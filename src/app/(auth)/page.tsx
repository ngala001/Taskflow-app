import { CloudOff, FolderSync, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='sm:text-center space-y-5 mt-10 px-4 md:px-0'>
      <h1 className='text-3xl font-bold'>Stay Organized.<br/> Feel in Control.</h1>
      <p className='mt-2'>With TaskFlow, your to-dos are always up to date — in real time <br/> and right at your fingertips.</p>
      <div className='mt-6 w-75 mx-auto space-y-3'>
        <p className='flex items-center space-x-3 font-semibold'>
          <span>
            <LayoutDashboard className='w-6 h-6 text-sky-600 font-semibold'/>
          </span>
          <span>
            Collaborative task boards
          </span>
        </p>
        <p className='flex items-center space-x-3 font-semibold'>
          <span>
              <FolderSync className='w-6 h-6 text-sky-600 font-semibold'/>
          </span>
          <span>
              Real-time sync
          </span>
        </p>
        <p className='flex items-center space-x-3 font-semibold'>
          <span>
            <CloudOff className='w-6 h-6 text-sky-600 font-semibold'/>
          </span>
          <span>
             Offline support
          </span>
        </p>
      </div>

      <div className='mt-7 w-75 mx-auto'>
        <Link href={"/register"} className='btn rounded-lg text-white text-lg bg-sky-600 w-full btn-lg px-8'>Get Started</Link>
      </div>
    </div>
  )
}

export default page