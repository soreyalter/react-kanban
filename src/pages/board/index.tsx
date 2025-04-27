import { Button } from '@/components/ui/button'
import Sidebar from './components/Sidebar'
import TaskItem from './components/TaskItem'
import Divider from '@/components/custom/Divider'
import { Status } from './components/type'

const Board = () => {
  return (
    <div className="relative w-screen flex">
      <Sidebar />
      <main className="p-8 flex-1">
        <header className="flex items-end gap-x-4">
          <h1 className="text-4xl tracking-wider">All Tasks</h1>
          <Button variant="outline" size="default" className="">
            Remove all tasks
          </Button>
        </header>
          <Divider className='my-4' />
        <div className="flex">
          {/* <TaskList /> */}
          <TaskItem status={Status.Todo} title='Title' details='details' />
        </div>
      </main>
    </div>
  )
}

export default Board
