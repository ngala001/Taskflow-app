import AppSidebar from '@/components/AppSidebar'
import Navbar from '@/components/Navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { cookies } from 'next/headers'


type DashboardProps = {
    children: React.ReactNode
}

const DashboardLayout = async({children}: DashboardProps) => {

    const cookieStore = await cookies()
   const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  return (
    <div className='w-full'>
        <SidebarProvider defaultOpen={defaultOpen} >

          <AppSidebar/>
          <main className="w-full">
            <Navbar/>
            <div className="">
            {children}
            </div>
          </main>
          </SidebarProvider>
    </div>
  )
}

export default DashboardLayout