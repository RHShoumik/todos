import { taskStatus } from '@/utils/taskStateCalculation';
import Typography from '../Typography';
import { useTodo } from '@/contexts/TodoContex';

interface CurrentStatusProps {
  task: {
    id: number,
    name: string,
    description: string,
    priorityId: number,
    currentStatus: number,
  }
}
const StatusButton = ({ task }: CurrentStatusProps) => {
  const { dispatch } = useTodo();

  const status = taskStatus(task.currentStatus)
  const handleEditTask = (taskId: number) => {
    let newStatus = 0;
    if (task.currentStatus > 2) {
      newStatus = newStatus + 1;
    } else {
      newStatus = task.currentStatus + 1
    }

    const updatedTask = {
      ...task,
      currentStatus: newStatus,
    };

    dispatch({ type: 'EDIT_TASK', taskId, updatedTask });
    return
  };
  return (
    <button onClick={() => handleEditTask(task.id)}>
      <div className="py-0.5 px-3 rounded-lg inline-block bg-slate-200">
        <Typography>
          {status}
        </Typography>
      </div>
    </button>
  )
}

export default StatusButton