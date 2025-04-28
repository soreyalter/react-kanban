import Sidebar from './components/Sidebar'
import Divider from '@/components/custom/Divider'
import { Status } from './components/type'
import TaskList from './components/TaskList'
import { useState } from 'react'
import { mock } from '../../../mock/taskList'
import { Card } from '@/components/ui/card'
import classRoom from '@/assets/cat-323262_1920.jpg'

const Board = () => {
  const [todoTasks, setTodoTasks] = useState(
    mock.filter((item) => item.status === Status.Todo),
  )
  const [processingTasks, setProcessingTasks] = useState(
    mock.filter((item) => item.status === Status.Processing),
  )
  const [completedTasks, setCompletedTasks] = useState(
    mock.filter((item) => item.status === Status.Completed),
  )

  const status2state = {
    [Status.Todo]: { tasks: todoTasks, update: setTodoTasks },
    [Status.Processing]: { tasks: processingTasks, update: setProcessingTasks },
    [Status.Completed]: { tasks: completedTasks, update: setCompletedTasks },
  }

  function handleMoveTask(
    prevStatus: Status,
    newStatus: Status,
    deleteIndex: number,
  ) {
    const transferTask = status2state[prevStatus].tasks.splice(
      deleteIndex,
      1,
    )[0]
    status2state[prevStatus].update((prev) => {
      const res = prev.slice()
      return res
    })

    status2state[newStatus].update((prevNew) => [
      ...prevNew,
      { ...transferTask, status: newStatus },
    ])
  }

  return (
    <div className="relative flex w-screen overflow-x-hidden">
      <Sidebar />
      <main className="ml-80 flex-1 p-8">
        <header className="w-full">
          <Card className="px-6">
            <div className='flex items-end'>
              <img src={classRoom} alt="classroom"
              //  className="h-auto w-160" 
               />
              {/* <div className='text-5xl'>开始今天的任务</div> */}
            </div>
          </Card>

          {/* <h1 className="text-4xl tracking-wider">All Tasks</h1>
          <Button variant="outline" size="default" className="">
            Remove all tasks
          </Button> */}
        </header>

        <Divider className="my-4" />
        <div className="flex items-start justify-between gap-x-5">
          <TaskList
            status={Status.Todo}
            className="flex-1"
            list={todoTasks}
            updateTasks={handleMoveTask}
          />
          <TaskList
            status={Status.Processing}
            className="flex-1"
            list={processingTasks}
            updateTasks={handleMoveTask}
          />
          <TaskList
            status={Status.Completed}
            className="flex-1"
            list={completedTasks}
            updateTasks={handleMoveTask}
          />
        </div>
      </main>
    </div>
  )
}

export default Board
