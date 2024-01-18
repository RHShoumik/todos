
import { useTodo } from '@/contexts/TodoContex';
import { useContext, useState } from 'react';
import { priorityList } from '@/common/conts/priorityList';
import PlusIcon from '@/assets/PlusIcon';
import Typography from './Typography';
import Modal from './Modal';
import { ThemeContext } from '@/contexts/ThemeContext';
import DarkIcon from '@/assets/DarkIcon';
import LightIcon from '@/assets/LightIcon';

const Addtask = () => {
    const { state, dispatch } = useTodo();
    const [isModalOpen, setModalOpen] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [selectedPriority, setSelectedPriority] = useState(3);
    const priorityClassName = "py-1 px-4 rounded-md inline-block border-2 cursor-pointer";
    const handleColor = (id: number) => {
        if (id === 1) {
            return (priorityClassName + ` text-green-400 border-green-200  ${selectedPriority === id ? "bg-green-200" : "bg-white"}`)
        } else if (id === 2) {
            return (priorityClassName + ` text-yellow-400 border-yellow-200  ${selectedPriority === id ? "bg-yellow-200" : "bg-white"}`)
        } else {
            return (priorityClassName + ` text-red-400 border-red-200  ${selectedPriority === id ? "bg-red-200" : "bg-white"}`)
        }
    }

    const handleSelected = (id: number) => {
        setSelectedPriority(id)
    }

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleAddTask = () => {
        const newTask = {
            id: state.taskList.length + 1,
            name: taskName,
            description: 'Description of new task',
            priorityId: 2,
            currentStatus: 1,
        };

        dispatch({ type: 'ADD_TASK', task: newTask });
        setTaskName("");
        setSelectedPriority(3);
        setModalOpen(false);

    };

    const handleChangeName = (value: string) => {
        setTaskName(value)
    }
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className='flex justify-between'>
            <Typography size="text-2xl" fontWeight="font-extrabold" color='text-black dark:text-gray-300'>Task List</Typography>
            <div className='flex gap-4'>
                <button
                    className=""
                    onClick={toggleTheme}
                >
                    {theme === "light" ? <DarkIcon /> : <LightIcon />}
                </button>

                <button onClick={openModal}>
                    <div className='flex px-4 py-2 text-white font-semibold rounded-xl bg-sky-500'>
                        <PlusIcon />
                        <Typography>Add Task</Typography>
                    </div>
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} closeIcon={true}>
                <div className="flex flex-col gap-5 mx-3 my-8">
                    <Typography size="text-xl" fontWeight="font-semibold">Edit Task </Typography>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="taskName" className="text-sm block text-gray-500 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={taskName}
                                onChange={(e) => handleChangeName(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="taskName" className="text-sm block text-gray-500 mb-2">
                                Priority
                            </label>
                            <div className="flex gap-3">
                                {priorityList.map(items =>
                                    <div key={items.id} className={`priorityClassName ${handleColor(items.id)}`} onClick={() => handleSelected(items.id)}>{items.priority}</div>
                                )}
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-end gap-5">
                        <button onClick={() => handleAddTask()} className='px-4 py-2 text-white font-semibold rounded-xl bg-sky-500'>Add</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Addtask