import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="group bg-secondary relative flex h-screen w-80 flex-col items-center gap-y-4">
      <h1 className="mt-4 text-4xl font-bold">Task Kanban</h1>
      <Button variant="outline" className="text-lg hover:text-green-500 w-40">
        <Plus />
        New Task
      </Button>
      <div className="bg-muted-foreground/60 absolute top-0 right-0 h-full w-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </aside>
  )
}

export default Sidebar
