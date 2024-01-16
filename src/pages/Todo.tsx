import TodoCard from '@/components/card/TodoCard';
import { useTodo } from '@/contexts/TodoContex';
import React from 'react';

const TodoApp = () => {
    const { state, dispatch } = useTodo();

    const handleAddTask = () => {
        const newTask = {
            id: state.taskList.length + 1,
            name: 'New Task',
            description: 'Description of new task',
            priorityId: 1,
            completedStatus: 1,
        };

        dispatch({ type: 'ADD_TASK', task: newTask });
    };

    const handleEditTask = (taskId: number) => {
        const updatedTask = {
            name: 'Updated Task',
            description: 'Updated description',
            priorityId: 2,
            completedStatus: 2,
        };

        dispatch({ type: 'EDIT_TASK', taskId, updatedTask });
    };

    const handleDeleteTask = (taskId: number) => {
        dispatch({ type: 'DELETE_TASK', taskId });
    };

    console.log("state.taskList", state.taskList)

    return (
        <div>

            {state.taskList.map((task, index) => (
                <TodoCard task={task} />
            ))}
        </div>
    );
};

export default TodoApp;
{/* <button onClick={handleAddTask}>Add Task</button> */ }
//   <li key={task.id}>
//     <div>{task.name}</div>
//     <button onClick={() => handleEditTask(task.id)}>Edit</button>
//     <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//   </li>