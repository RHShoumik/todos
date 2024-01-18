
import { useTodo } from '@/contexts/TodoContex';
import { useState } from 'react';
import Modal from '../Modal';
import Typography from '../Typography';
import EditIcon from '@/assets/EditIcon';
import { priorityList } from '@/common/conts/priorityList';

interface EditProps {
    task: {
        id: number,
        name: string,
        description: string,
        priorityId: number,
        currentStatus: number,
    }
}
const EditItem = ({ task }: EditProps) => {
    const { dispatch } = useTodo();
    const [isModalOpen, setModalOpen] = useState(false);
    const [taskName, setTaskName] = useState(task.name);
    const [selectedPriority, setSelectedPriority] = useState(task.priorityId);
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

    const handleEditTask = (taskId: number) => {
        const updatedTask = {
            ...task,
            name: taskName,
            description: task.description,
            priorityId: selectedPriority,
            currentStatus: task.currentStatus,
        }

        dispatch({ type: 'EDIT_TASK', taskId, updatedTask });
        setModalOpen(false);
    };

    const handleChangeName = (value: string) => {
        setTaskName(value)
    }

    return (
        <div>
            <button onClick={openModal}>
                <EditIcon />
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} closeIcon={true}>
                <div className="flex flex-col gap-5 px-3 py-8 bg-light-body dark:bg-dark-body">
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
                        <button onClick={() => handleEditTask(task.id)} className='px-4 py-2 text-white font-semibold rounded-xl bg-sky-500'>Update</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditItem