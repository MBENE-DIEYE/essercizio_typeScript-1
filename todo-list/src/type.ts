export interface Todo {
    id: number,
    title: string,
    completo: boolean
    userId?: number,
    metaData: any

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