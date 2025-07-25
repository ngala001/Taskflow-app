import { create } from "zustand"

export type Task = {
 title: string
 description: string
 status: string
 createdAt: string
 updatedAt: string
}

interface UseTaskStoreProps {
    tasks: Task[],
    getTasks: () => void,
    filterStatus: (status: string) => void
    filterPriority: () => void
}

export const useTaskStore = create<UseTaskStoreProps>((set, get) =>({
    tasks: [],
    getTasks: async() => {
        const todos = await fetch("https://68825dce66a7eb81224e5d43.mockapi.io/api/users/tasks")
        const data = await todos.json()
        set({tasks: data})
    },
    filterStatus: () => {},
    filterPriority: () => {},
    
}))