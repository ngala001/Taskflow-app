"use client"
import DataTable from '@/components/TaskTable'
import  { useEffect } from 'react'
import { Task, columns } from './columns'
import { useTaskStore } from '../../../../store/task-store'





const page = () => {

  const { tasks , getTasks } = useTaskStore()

  const data: Task[] = tasks

  useEffect(() => {
    const load = async() => {
      getTasks()

    }
    load()
    
  },[])

  return (
    <section className='w-full px-4'>
      <div className='container mx-auto'>
        <DataTable columns={columns} data={data}/>
    </div>
    </section>
  )
}

export default page