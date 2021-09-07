export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

const defaultList: Todo[] = [
    { id: 0, text: "Vegetables", done: false },
    { id: 1, text: "Cheese", done: true },
    { id: 2, text: "Milk", done: false },
];

const STORAGE_KEY: string = '_todos'
export const getTodoList = (): Todo[] =>
    window.localStorage.getItem(STORAGE_KEY) ? JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "") : defaultList;

export const saveTodoList = (data: Todo[]): void => window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));