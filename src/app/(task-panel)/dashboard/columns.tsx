"use client"

import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import {  Square, SquareCheck } from "lucide-react"
import { useState } from "react"
export type User = {
    id: string
    title: string
    status: string
    description: string
    createdAt: string
    updatedAt: string
    priority: string
}

export const colums: ColumnDef<User>[] = [
    {
       accessorKey:'check',
       header: () => <Square size={18} className="text-muted-foreground"/>,
       cell: ({row}) => {
        const [checked, setChecked] = useState<boolean>(false)
        return (
            <button
             onClick={() => setChecked(!checked)}
             className="cursor-pointer"
            >
                {
                    checked ? 
                    <SquareCheck className="text-green-400" size={18}/>
                     : 
                     <Square className="text-muted-foreground" size={18}/>
                }
            </button>
        )
       }
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
        const statusInfo = row.getValue('status')
         return (
            <span>
               {
                  statusInfo === true ? 
                  <span className="bg-red-500 px-2 py-1 rounded text-white">Open</span> 
                  : 
                  <span className="bg-sky-500 px-2 py-1 rounded">Pending</span> 
               }
            </span>
         )
       }
    },
    {
       accessorKey:'priority',
       header: () => <span>Priority</span>,
    },
    {
       accessorKey:'createdAt',
       header: () => <span>Created_At</span>,
        cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"))
        const formated = format(date, "yyy-MM-dd")
        return <span>{formated}</span>

       }
    },
    {
       accessorKey:'updatedAt',
       header: () => <span>Updated_At</span>,
        cell: ({ row }) => {
        const date = new Date(row.getValue("updatedAt"))
        const formated = format(date, "yyy-MM-dd")
        return <span>{formated}</span>

       }
    },
]