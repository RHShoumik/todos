import Addtask from '@/components/AddTask';
import TodoCard from '@/components/card';
import { useTodo } from '@/contexts/TodoContex';

const TodoApp = () => {
    const { state } = useTodo()

    console.log("state.taskList", state.taskList)

    return (
        <div>
            <Addtask />
            <div className='py-4'>
                {state.taskList.map((task) => (
                    <TodoCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TodoApp;
