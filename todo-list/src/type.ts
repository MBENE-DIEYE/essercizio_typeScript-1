export interface Todo {
    id: number,
    title: string,
    completo: boolean
    userId?: number,
    metaData: any
    Pending: TodoStatus

}

export interface user {
    id: number,
    name: string,
    email?: string
    readonly todos: readonly Todo[]
}

export interface TodoWithMetaData extends Todo {
    metaData: Date
}

export interface Project {
    id: number,
    name: string,
    users: user[],
    todos: Todo[]

}

enum TodoStatus {
    Pending,
    InProgress,
    Completed
}