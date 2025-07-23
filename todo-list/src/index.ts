import { Todo, user } from "./type";


let todos: Todo[] = []

function addTodo(title: string, metaData?: any | string | object): Todo {
    const newTodo: Todo = {
        id: 1,
        title: title,
        completo: false,
        metaData: metaData
    };

    todos.push(newTodo);
    return newTodo;
}
addTodo("compra il latte")

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

const updateTodo = () => {
    const updata: Partial<Todo> = {
        id: 1
    }
}

updateTodo()

const getTodoSummary = () => {
    type TupleArray = [String, Boolean]
    const array: TupleArray = ["tilte", false]

    return array
}
getTodoSummary()

const createProject = (id: number, name: string, users: user[], todos: Todo[]) => {
    return {
        id,
        name,
        users,
        todos
    }
}
createProject(1, "project", [], todos)