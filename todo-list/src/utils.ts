import { Todo } from "./type";

let todos: Todo[] = []

const filterTodos = () => (
    todos: Todo[],
    filterFn: (todo: Todo) => boolean
): Todo[] => {
    return todos.filter(filterFn)
}

filterTodos()

export type partialTodo = Partial<Todo>

const updateTodo = (todoId: number, update: partialTodo): Todo | null => {
    const index = todos.findIndex(todo => todo.id === todoId)
    if (index === -1) {
        return null
    }

    todos[index] = { ...todos[index], ...update }
    return todos[index]
}
updateTodo(1, { title: "tilte", completo: true })

export type TodoRecord = Record<number, Todo>

const convertArrayToRecord = (todos: Todo[]): TodoRecord => {
    const record: TodoRecord = {}
    for (const todo of todos) {
        record[todo.id] = todo
    }
    return record
}

convertArrayToRecord(todos)