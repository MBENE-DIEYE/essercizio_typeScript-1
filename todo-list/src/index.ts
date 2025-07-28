import { Todo, user } from "./type";


let todos: Todo[] = []

function addTodo(title: string, Pending: number, metaData?: any | string | object): Todo {
    const newTodo: Todo = {
        id: 1,
        title: title,
        completo: false,
        metaData: metaData,
        Pending: 2
    };

    todos.push(newTodo);
    return newTodo;
}
addTodo("compra il latte", 1)

const assignTodoToUser = (todoId: number, userId: number) => {
    const todo = todos.find(t => t.id === todoId)
    if (todo) {
        todo.userId = userId

    }
    console.error(`Todo con id ${todoId} non trovato`)

}
assignTodoToUser(1, 1)

const getUserTodo = (userId: number) => {
    const todo = todos.filter(t => t.id === userId)
    return todo
}
getUserTodo(1)

const throwError = (message?: string): never => {
    throw new Error(message)
}
throwError()

const parseInput = (input: unknown) => {
    if (typeof input === "string") {
        return input
    }
    else if (typeof input === "number") {
        return "input"
    }
    else {
        throw new Error(throwError())
    }
}
parseInput("input")

const todos1: Todo = {
    id: 1,
    title: "myTitle",
    completo: true,
    metaData: "metaData",
    Pending: 1
}

const updateTodo = (todo: Todo, update: Partial<Todo>) => {
    return { ...todo, ...update }

}

updateTodo(todos1, { completo: true })

const getTodoSummary = (todos: Todo): [String, Boolean] => {
    return [todos.title, todos.completo]


}
getTodoSummary(todos1)

const createProject = (id: number, name: string, users: user[], todos: Todo[]) => {
    return {
        id,
        name,
        users,
        todos
    }
}
createProject(1, "project", [], todos)