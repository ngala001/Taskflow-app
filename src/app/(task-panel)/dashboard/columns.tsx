"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

enum Status {
   open,
   pending,
   resolved
}

export type Task = {
    id: string
    title: string
    status: Status
    description: string
    created_at: string
    updated_at: string
    priority: string
}

export const columns: ColumnDef<Task>[] = [
    {
       accessorKey: 'select',
       header: ({ table }) => (
         <Checkbox
         checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
         }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
         />
    ),
      cell: ({ row }) => (
         <Checkbox
         checked={row.getIsSelected()}
         onCheckedChange={(value) => row.toggleSelected(!!value)}
         aria-label="Select row"
         />
      )
    },
    {
       accessorKey:'title',
       header: () => <span>Title</span>
    },
    {
       accessorKey:'description',
       header: () => <span>Description</span>,
    },
     {
       accessorKey:'status',
       header: () => <span>Status</span>,
       cell: ({ row }) => {
        const status = row.getValue('status') as string;
         let bg;
         let label;
         switch(status) {
            case "open":
               bg = "bg-red-500"
               label= "Open"
               break;
            case "pending":
               bg = "bg-sky-500"
               label= "Pending"
               break;
            default:
               bg = "bg-green-600"
               label = "Resolved"
         }
         return (
            <span className={`${bg} px-2 py-1 rounded text-white text-xs font-medium `}>
               {label}
            </span>
         )
       }
    },
    {
       accessorKey:'priority',
       header: () => <span>Priority</span>,
    },
    {
       accessorKey:'created_at',
       header: () => <span>Created_At</span>,
        cell: ({ row }) => {
        const date = new Date(row.getValue("created_at"))
        const formated = format(date, "yyy-MM-dd")
        return <span>{formated}</span>

       }
    },
    {
       accessorKey:'updated_at',
       header: () => <span>Updated_At</span>,
        cell: ({ row }) => {
        const date = new Date(row.getValue("updated_at"))
        const formated = format(date, "yyy-MM-dd")
        return <span>{formated}</span>

       }
    },
]