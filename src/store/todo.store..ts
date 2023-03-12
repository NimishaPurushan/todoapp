import { TodoTask } from "../types/task.type";
import { createLocalStore } from "./local.store";
import { v4 as uuidv4 } from 'uuid';

export const createTodoStore = (initialValue: TodoTask[]) => {
    const [todos, setTodos] = createLocalStore<TodoTask[]>("todos", initialValue);

    const create = ({
        title,
        id = uuidv4(),
        isCompleted = false,
        completedAt = null,
        createdAt = new Date()
    }: Partial<TodoTask>) => setTodos(todos.length, {
        id,
        title,
        createdAt,
        completedAt,
        isCompleted,
    });

    const update = (id: string, updates: Partial<TodoTask>) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            const updatedTodo = {
                ...todos[todoIndex],
                ...updates,
            };
            const newTodos = [...todos];
            newTodos[todoIndex] = updatedTodo;
            setTodos(newTodos);
        }
    };

    const findOne = (id: string) => {
        const todo = todos.find(todo => todo.id === id);
        return todo || null;
    };

    const remove = (id: string) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            const newTodos = [...todos];
            newTodos.splice(todoIndex, 1);
            setTodos(newTodos);
        }
    };


    const removeAll = () => setTodos([]);

    const findAll = () => {
        return todos;
    }

    return {
        create,
        update,
        findOne,
        remove,
        removeAll,
        findAll
    };
};