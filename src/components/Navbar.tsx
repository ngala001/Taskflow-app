"use client"

import { LogOut, Menu, Moon, Settings, Sun, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { useSidebar } from './ui/sidebar'


const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const { toggleSidebar } = useSidebar()
  return (
    <header className='shadow-sm'>
      <nav className='flex items-center justify-between px-4 py-[0.35rem] '>
        <span onClick={toggleSidebar} className='btn btn-sm btn-ghost'>
            <Menu className='w-5 h-5'/>
        </span>
      {/* THEME MENU */}

      <div className='flex items-center justify-end gap-3 '>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
              System
              </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={10}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                  <User className='h-[1.2rem] w-[1.2rem] mr-2'/>
                  Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Settings className='h-[1.2rem] w-[1.2rem] mr-2'/>
                  Setting
              </DropdownMenuItem>
              <DropdownMenuItem variant='destructive'>
                  <LogOut className='h-[1.2rem] w-[1.2rem] mr-2'/>
                  Logout
              </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
      </div>

      </nav>

    </header>
  )
}

export default Navbar