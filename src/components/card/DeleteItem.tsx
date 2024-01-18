
import { useTodo } from '@/contexts/TodoContex';
import DeleteIcon from '@/assets/DeleteIcon';
import { useState } from 'react';
import Modal from '../Modal';
import Typography from '../Typography';

interface DeleteItemProps {
    taskId: number,
}
const DeleteItem = ({ taskId }: DeleteItemProps) => {
    const { dispatch } = useTodo();
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    //   const status = taskStatus(task.currentStatus)

    const handleDeleteTask = (taskId: number) => {
        dispatch({ type: 'DELETE_TASK', taskId });
        setModalOpen(false)
    };
    return (
        <div>
            {/* <button onClick={() => handleDeleteTask(taskId)}> */}
            <button onClick={openModal}>
                <DeleteIcon />
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} closeIcon={true}>
                <div className="flex flex-col gap-5 mx-3 my-8">
                    <Typography size="text-md" fontWeight="font-semibold" color='text-black dark:text-gray-200'>Are you sure, you want to delete this task? </Typography>
                    <div className="flex justify-center gap-5">
                        <button className='px-4 py-2 text-white font-semibold rounded-xl bg-rose-500' onClick={() => handleDeleteTask(taskId)}>Delete</button>
                        <button className='px-4 py-2 text-gray-500 font-semibold rounded-xl border-2 border-gray-400' onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default DeleteItem