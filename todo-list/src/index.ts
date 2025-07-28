import { Todo, TodoStatus, user } from "./type";
import { User } from "./user";


let todos: Todo[] = []

function addTodo(title: string, metaData?: any | string | object): Todo {
    const newTodo: Todo = {
        id: 1,
        title: title,
        completo: false,
        metaData: metaData,
        status: TodoStatus.Pending
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
    status: 1
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

const updateTodoStatus = (todoId: number, newStatus: TodoStatus): boolean => {
    const todo = todos.find(t => t.id === todoId)
    if (!todo) {
        return false
    }
    todo.status = newStatus
    return true

}

updateTodoStatus(1, 2)

const todo2: Todo = {
    id: 1,
    title: 'Comprare il latte',
    completo: true,
    metaData: "",
    status: TodoStatus.Pending
};

const mario = new User(1, "mbene", "email")

mario.addTodo(todo2)