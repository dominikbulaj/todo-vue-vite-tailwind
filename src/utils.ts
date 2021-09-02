export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

const defaultList = [
    { id: 0, text: "Vegetables", done: false },
    { id: 1, text: "Cheese", done: true },
    { id: 2, text: "Milk", done: false },
];

const STORAGE_KEY = '_todos'
export const getTodoList = (): Array<Todo> =>
    window.localStorage.getItem(STORAGE_KEY) ? JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "") : defaultList;

export const saveTodoList = (data: Array<Todo>): void => window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));