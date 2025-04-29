import { Status, TaskDataItem } from '@/pages/board/components/type'
import { useAppDispatch } from './common'
import { updateCompletedTasks, updateProcessingTasks, updateTodoTasks } from '@/store/slices/taskSlice'

export default function useUpateTasks(status: Status) {
  const dispatch = useAppDispatch()
  if (status === Status.Todo) {
    return (x: TaskDataItem[]) => dispatch(updateTodoTasks(x))
  }
  else if (status === Status.Processing) {
    return (x: TaskDataItem[]) => dispatch(updateProcessingTasks(x))
  }
  else if (status === Status.Completed) {
    return (x: TaskDataItem[]) => dispatch(updateCompletedTasks(x))
  }
  else throw Error('Failed: useUpdateTask')
}
