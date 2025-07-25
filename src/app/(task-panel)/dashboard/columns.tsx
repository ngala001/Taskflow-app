"use client"

import { Checkbox } from "@/components/ui/checkbox"
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