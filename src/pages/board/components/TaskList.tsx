import { useEffect } from "react"
import TaskItem from "./TaskItem"
import { Status, TaskDataItem } from "./type"

interface TaskListProps {
  status: Status
  list?: TaskDataItem[]
}


const TaskList = ({status, list} : TaskListProps) => {
  useEffect(() => console.log(list))
  return (
    <div className="p-5 border-1 shadow-sm">
      <header>{status}</header>
      <TaskItem status={Status.Todo} title='Title' details='details' />
    </div>
  )
}

export default TaskList