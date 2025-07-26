import { Task } from "@/app/(task-panel)/dashboard/columns"
import { create } from "zustand"


interface UseTaskStoreProps {
    tasks: Task[],
    getTasks: () => void,
    filterStatus: (status: string) => void
    filterPriority: () => void
}

export const useTaskStore = create<UseTaskStoreProps>((set, get) =>({
    tasks: [],
    getTasks: async() => {
        const res = await fetch("http://192.168.100.5:3000/api/tasks")
        const data = await res.json()
        set({tasks: data})
    },
    filterStatus: () => {},
    filterPriority: () => {},
    
}))