import React, { useEffect, useState } from 'react'
import CardWrapper from './CardWrapper'
import Typography from '../Typography'
import { prioritySelection } from '@/utils/taskStateCalculation'
import StatusButton from './StatusButton'
import { useTodo } from '@/contexts/TodoContex'

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
    const [priorityClassName, setPriorityClassName] = useState("py-0.5 px-3 rounded-xl inline-block");
    useEffect(() => {
        if (task.priorityId === 1) {
            setPriorityClassName(priorityClassName + " bg-green-200")
        } else if (task.priorityId === 2) {
            setPriorityClassName(priorityClassName + " bg-yellow-200")
        } else {
            setPriorityClassName(priorityClassName + " bg-red-200")
        }
    }, [task.priorityId])

    return (
        <div className='py-2' >
            <CardWrapper>
                <div className="grid grid-cols-3 gap-1 max-w-[690px] ">
                    <div className="p-4 flex flex-col justify-center gap-1">
                        <Typography
                            text="Task"
                            color="text-gray-500"
                        />
                        <Typography>{task.name}</Typography>
                    </div>
                    <div className="py-4 flex gap-1 items-center">
                        <div className="w-1/2 p-4 flex flex-col gap-1 items-center">
                            <Typography
                                text="Priority"
                                color="text-gray-400"
                            />
                            <div className={priorityClassName}>
                                <Typography fontWeight="font-medium" color="text-gray-600">{priority.priority}</Typography>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <StatusButton task={task} />
                        </div>
                    </div>
                    <div className="p-4 flex flex-col justify-center">Column 3</div>
                </div>
            </CardWrapper>
        </div>
    )
}

export default TodoCard