
export type TodoListType = {
    addedDate: string
    id: string
    title: string
    order: number
}
export type TaskType = {
    id: string
    title: string
    description?: string
    todoListId?: string
    order?: number
    status?: number
    priority?: number
    startDate?: string
    deadline?: string
    addedDate?: string
}
export const taskModel: TaskType = {
    id: '',
    title: '',
    description: '',
    todoListId: '',
    order: 0,
    status: 0,
    priority: 0,
    startDate: '',
    deadline: '',
    addedDate: '',
}