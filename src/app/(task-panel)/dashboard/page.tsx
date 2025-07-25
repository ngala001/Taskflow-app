
import DataTable from '@/components/TaskTable'
import React from 'react'
import { User, colums } from './columns'



async function getUsers(): Promise<User[]> {
  const res = await fetch("https://68825dce66a7eb81224e5d43.mockapi.io/api/users/tasks")
    
  //https://68825dce66a7eb81224e5d43.mockapi.io/api/users/users
  const data = await res.json()
  return data
}




const page = async() => {
  const data = await getUsers()
  return (
    <section className='w-full px-4'>
      <div className='container mx-auto'>
        <DataTable columns={colums} data={data}/>
    </div>
    </section>
  )
}

export default page