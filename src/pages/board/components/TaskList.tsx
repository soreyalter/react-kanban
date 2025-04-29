import { Button } from '@/components/ui/button'
import TaskItem from './TaskItem'
import { Status, TaskDataItem } from './type'
import clsx from 'clsx'
import { status2title } from '@/const/taskListConfig'
import { useAppDispatch, useAppSelector } from '@/hooks/common'
import { updateCompletedTasks, updateProcessingTasks, updateTodoTasks } from '@/store/slices/taskSlice'

interface TaskListProps {
  status: Status
  list: TaskDataItem[]
  className?: string
  onDrop?: (event: React.DragEvent<HTMLDivElement>, status: Status) => void
  updateTasks: (x: TaskDataItem[]) => void
}

interface DragSourceConfig {
  status: Status
  itemIndex: number
}

const handleDragStart = (
  event: React.DragEvent,
  sourceConfig: DragSourceConfig,
) => {
  event.dataTransfer.setData('text/plain', JSON.stringify(sourceConfig))
  // move 操作用于指定被拖动的数据将被移动
  event.dataTransfer.effectAllowed = 'move'
  event.currentTarget.classList.add('opacity-50')
}

const handleDragEnd = (event: React.DragEvent) => {
  event.currentTarget.classList.remove('opacity-50')
}

const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (event) => {
  event.preventDefault()
  event.currentTarget.classList.add('bg-slate-100')
}

const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (event) => {
  event.preventDefault()
  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
    event.currentTarget.classList.remove('bg-slate-100')
  }
}

const handleDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
  event.preventDefault()
  event.dataTransfer.effectAllowed = 'move'
}

const TaskList = ({ status, list, className, updateTasks }: TaskListProps) => {
  const header = status2title[status]
  const dispatch = useAppDispatch()
  const {completedTasks, processingTasks, todoTasks} = useAppSelector(state => state.task)

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    status: Status,
  ) => {
    event.preventDefault()
    event.currentTarget.classList.remove('bg-slate-100')

    const sourceConfig: DragSourceConfig = JSON.parse(
      event.dataTransfer.getData('text/plain'),
    )
    console.log(sourceConfig)
    let transferTask: TaskDataItem

    // 移动到其他区域才更新tasks数组
    if (sourceConfig.status !== status) {
      if (sourceConfig.status === Status.Todo) {
        const copy = todoTasks.slice()
        transferTask = copy.splice(sourceConfig.itemIndex, 1)[0]
        dispatch(updateTodoTasks(copy))
      } else if(sourceConfig.status === Status.Processing) {
        const copy = processingTasks.slice()
        transferTask = copy.splice(sourceConfig.itemIndex, 1)[0]
        dispatch(updateProcessingTasks(copy))
      } else {
        const copy = completedTasks.slice()
        transferTask = copy.splice(sourceConfig.itemIndex, 1)[0]
        dispatch(updateCompletedTasks(copy))
      }
      console.log(transferTask)
      updateTasks([...list, {...transferTask, status}])
    }
  }
  return (
    <div
      className={clsx('border-1 p-5 shadow-sm min-w-80 overflow-x-auto', className)}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, status)}
    >
      <header className="mb-4 flex items-center text-xl font-bold">
        <header.icon className="mr-2" />
        {header.title}
      </header>
      <div className="flex flex-col gap-y-2 overflow-auto max-h-screen">
        {list && list.length ? (
          list?.map((item, index) => (
            <TaskItem
              status={status}
              details={item.details}
              title={item.title}
              key={item.id}
              onDragEnd={(e: React.DragEvent) => handleDragEnd(e)}
              onDragStart={(e: React.DragEvent) =>
                handleDragStart(e, {
                  itemIndex: index,
                  status,
                })
              }
            />
          ))
        ) : (
          <h2 className="text-muted-foreground">
            这里还没有任务喔，可以拖拽其他状态的任务到这里或者点击下方按钮新建一个任务
          </h2>
        )}
        <Button variant={'outline'} className="w-full text-lg mb-4" size={'lg'}>
          新建任务
        </Button>
      </div>
    </div>
  )
}

export default TaskList
