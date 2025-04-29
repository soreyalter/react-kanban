import Sidebar from './components/Sidebar'
import Divider from '@/components/custom/Divider'
import { Status } from './components/type'
import TaskList from './components/TaskList'
import { Card } from '@/components/ui/card'
import cat from '@/assets/cat-323262_1920.webp'
import { useAppDispatch, useAppSelector } from '@/hooks/common'
import {
  updateCompletedTasks,
  updateProcessingTasks,
  updateTodoTasks,
} from '@/store/slices/taskSlice'
import ImageWithLoading from '@/components/custom/ImageWithLoading'

const Board = () => {
  const { completedTasks, processingTasks, todoTasks } = useAppSelector(
    (state) => state.task,
  )
  const dispatch = useAppDispatch()

  return (
    <div className="relative flex w-screen overflow-x-hidden">
      <Sidebar />
      <main className="ml-80 flex-1 p-8 overflow-x-auto">
        <header>
          <Card className="px-6">
            <div className="">
              {/* <img
                src={cat}
                alt="classroom"
              /> */}
              <ImageWithLoading alt='cat' src={cat} />
            </div>
          </Card>
        </header>

        <Divider className="my-4" />
        <div className="flex items-start justify-between gap-x-5">
          <TaskList
            status={Status.Todo}
            className="flex-1"
            list={todoTasks}
            updateTasks={(x) => dispatch(updateTodoTasks(x))}
          />
          <TaskList
            status={Status.Processing}
            className="flex-1"
            list={processingTasks}
            updateTasks={(x) => dispatch(updateProcessingTasks(x))}
          />
          <TaskList
            status={Status.Completed}
            className="flex-1"
            list={completedTasks}
            updateTasks={(x) => dispatch(updateCompletedTasks(x))}
          />
        </div>
      </main>
    </div>
  )
}

export default Board
