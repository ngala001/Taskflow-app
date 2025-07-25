import { Calendar, ChevronDown, ChevronUp, ClipboardCheck, Home, LayoutDashboard, LogOut, Plus, Search, Settings, User } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import { Button } from "./ui/button"
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible"
import { CollapsibleContent } from "@radix-ui/react-collapsible"
import Image from "next/image"

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Calender",
    url: "#",
    icon: Calendar
  },
  {
    title: "Search",
    url: "#",
    icon: Search
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings
  },
]

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/dashboard"}>
                <Image src={"/Logo.png"} className="rounded" alt="logo" width={22} height={22}/>
                <span className="font-semibold">TASKFLOW</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
         {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
         <SidebarGroupContent>
           <SidebarMenu>
             {
              items.map(item => (
                <SidebarMenuItem key={item.title} className="mt-2" >
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                     <item.icon/>
                     <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))
             }
           </SidebarMenu>
         </SidebarGroupContent>
        </SidebarGroup>
 
        <SidebarGroup>
          <SidebarGroupLabel>Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="cursor-pointer">
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <span>
                        <Plus/>
                        Add Todo
                      </span>
                    </SidebarMenuSubButton>
                    <SidebarMenuSubButton asChild className="mt-2">
                       <span>
                         <ClipboardCheck/>
                         Assign Task
                        </span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Account Actions */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                 Account
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton asChild className="cursor-pointer">
                            <span>
                              <User/>
                              Profile
                            </span>
                          </SidebarMenuButton>
                          <SidebarMenuButton asChild className="cursor-pointer">
                            <span>
                              <LogOut/>
                               LogOut
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>

  )
}

export default AppSidebar