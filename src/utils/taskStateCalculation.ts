import { priorityList } from "@/common/conts/priorityList";
import { taskStatusList } from "@/common/conts/taskStatusList";

export const prioritySelection = (id: number) => {
    const priority = priorityList.filter((item) => item.id === id);
    return priority[0];
};

export const taskStatus = (id: number) => {
    const status = taskStatusList.filter((item) => item.id === id);
    return status[0].status;
};
