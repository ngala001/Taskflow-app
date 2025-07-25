import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, CirclePlus, Settings2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FilterProps {
    table: any
}

const Filter = ({table}:FilterProps ) => {
  return (
    <div className='flex items-center mt-5 mb-3 justify-between'>
           <span className='flex'>
             <Input 
               type='text' 
               className='min-w-sm' 
               placeholder='Search task'
               value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
               onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
            />
           <span className='ml-4 flex space-x-7'>
             
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='cursor-pointer' variant={"outline"}>
                        <ArrowUpDown/>
                        Status
                    </Button>
                    </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                    <DropdownMenuCheckboxItem>Open</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Resolved</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='cursor-pointer' variant={"outline"}>
                      <CirclePlus/>
                      Priority
                    </Button>
                    </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                    <DropdownMenuCheckboxItem>High</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Medium</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Low</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
             
           </span>
           </span>
           <span className='space-x-7 mr-4'>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='cursor-pointer' variant={"outline"}>
                        <Settings2/>
                        View
                    </Button>
                    </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                    <DropdownMenuCheckboxItem>Status</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Title</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Description</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Priority</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>CreatedAt</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>UpdatedAt</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
             
             <Button className='cursor-pointer'>Add Task</Button>
           </span>
        </div>
  )
}

export default Filter