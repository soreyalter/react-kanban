import TaskItem from "./TaskItem"
import { Status, TaskDataItem } from "./type"

interface TaskListProps {
  status: Status
  list?: TaskDataItem[]
}


const TaskList = ({status, list} : TaskListProps) => {
  return (
    <div className="p-5 border-1 shadow-sm">
      <header></header>
      <TaskItem status={Status.Todo} title='Title' details='details' />
    </div>
  )
}

export default TaskList