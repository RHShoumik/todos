import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { taskList } from "@/common/conts/demoTasksList.ts"

// Define TypeScript types
interface Task {
    id: number;
    name: string;
    description: string;
    priorityId: number;
    completedStatus: number;
}

interface TodoState {
    taskList: Task[];
}

interface TodoContextType {
    state: TodoState;
    dispatch: React.Dispatch<TodoAction>;
}

interface TodoProviderProps {
    children: ReactNode;
}

// Define action types
type TodoAction =
    | { type: 'ADD_TASK'; task: Task }
    | { type: 'EDIT_TASK'; taskId: number; updatedTask: Task }
    | { type: 'DELETE_TASK'; taskId: number };

// Create context
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Initial state
const initialState: TodoState = {
    taskList: taskList
};

// Reducer function
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                taskList: [...state.taskList, action.task],
            };

        case 'EDIT_TASK':
            return {
                ...state,
                taskList: state.taskList.map(task =>
                    task.id === action.taskId ? { ...task, ...action.updatedTask } : task
                ),
            };

        case 'DELETE_TASK':
            return {
                ...state,
                taskList: state.taskList.filter(task => task.id !== action.taskId),
            };

        default:
            return state;
    }
};

// TodoProvider component
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

// Custom hook to use the context
export const useTodo = (): TodoContextType => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
};