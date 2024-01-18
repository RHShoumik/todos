import React, { useEffect, useState } from 'react'
import CardWrapper from './CardWrapper'
import Typography from '../Typography'
import { prioritySelection } from '@/utils/taskStateCalculation'
import StatusButton from './StatusButton'
import { useTodo } from '@/contexts/TodoContex'
import DeleteIcon from '@/assets/DeleteIcon'
import DeleteItem from './DeleteItem'
import EditIcon from '@/assets/EditIcon'
import EditItem from './EditItem'

interface TaskProps {
    task: {
        id: number,
        name: string,
        description: string,
        priorityId: number,
        currentStatus: number,
    }
}
const TodoCard = ({ task }: TaskProps) => {
    const priority = prioritySelection(task.priorityId);
    const [priorityClassName, setPriorityClassName] = useState("inline-block  w-fit py-0.5 px-3 rounded-xl");
    useEffect(() => {
        let newClassName = "";

        if (task.priorityId === 1) {
            newClassName = "bg-green-200";
        } else if (task.priorityId === 2) {
            newClassName = "bg-yellow-200";
        } else {
            newClassName = "bg-red-200";
        }

        setPriorityClassName("inline-block w-fit py-0.5 px-3 rounded-xl " + newClassName);

    }, [task.priorityId])
    return (
        <div className='py-2' >
            <CardWrapper>
                <div className="grid grid-cols-1 gap-1 max-w-[300px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[650px] md:grid-cols-3 ">
                    <div className="p-1 md:p-4 flex flex-col justify-center gap-1">
                        <Typography
                            text="Task"
                            color="text-gray-400"
                        />
                        <Typography color='text-black dark:text-gray-200'>{task.name}</Typography>
                    </div>
                    <div className="md:py-4 flex flex-col md:flex-row gap-1 md:items-center">
                        <div className="md:w-1/2 md:p-4 flex flex-col gap-1 md:items-center">
                            <Typography
                                text="Priority"
                                color="text-gray-400"
                            />
                            <div className={priorityClassName}>
                                <Typography fontWeight="font-medium" color="text-gray-600">{priority.priority}</Typography>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex md:justify-center">
                            <StatusButton task={task} />
                        </div>
                    </div>
                    <div className="md:p-4 flex flex-col md:flex-row md:items-center md:justify-end">
                        {/* <div className="md:w-1/2">
                            hello
                        </div> */}
                        <div className="md:w-1/2 flex gap-2">
                            <EditItem task={task} />
                            <DeleteItem taskId={task.id} />
                        </div>
                    </div>
                </div>
            </CardWrapper>
        </div>
    )
}

export default TodoCard