import { Todo } from "./type";

export class User {
    id: number | undefined;
    name: string | undefined;
    email?: string
    todos: Todo[] = []

    constructor(id: 1, name: "mbene", email: "email") {
        this.id = id
        this.name = name
        this.email = email
    }

    addTodo = (todo: Todo): void => {
        this.todos.push(todo)
    }



}