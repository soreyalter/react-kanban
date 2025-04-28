import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import {
  ChevronDown,
  ChevronRight,
  Circle,
  CircleCheck,
  LoaderCircle,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Status, TaskDataItem } from './type'

interface TaskItemProps extends TaskDataItem {
  className?: string
  onDragStart?: (e: React.DragEvent) => void
  onDragEnd?: (e: React.DragEvent) => void
}

const getIcon = (status: Status) => {
  if (status === Status.Todo) return <LoaderCircle className="text-red-400" />
  if (status === Status.Processing) return <Circle className='text-amber-400' />
  return <CircleCheck className='text-green-400' />
}

const TaskItem = ({ details, status, title, className, onDragEnd, onDragStart }: TaskItemProps) => {
  const [isOverLines, setIsOverLines] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const icon = getIcon(status)

  // line-height = 24px，超过两行的卡片才有 icon 展开按钮
  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > 48) {
      setIsOverLines(true)
    }
  }, [])

  // click 展开 button
  const handleCollapse = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div
      draggable="true"
      className={clsx(
        'group flex flex-col justify-center gap-y-2 rounded-md border-1 border-[text-muted-foreground] p-4 transition duration-300 hover:bg-slate-100',
        className,
      )}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <header className="flex items-center text-lg font-bold">
        {icon}
        <div className="ml-2 flex flex-1 items-center justify-between">
          <span>{title}</span>
          {isOverLines && (
            <Button
              onClick={handleCollapse}
              variant="ghost"
              className="hidden h-6 w-6 group-hover:inline-flex hover:bg-white"
            >
              {isCollapsed ? (
                <ChevronDown />
              ) : (
                <ChevronRight />
              )}
            </Button>
          )}
        </div>
      </header>

      <div
        ref={contentRef}
        className={clsx(
          'line-clamp-2 text-[16px] leading-6 transition-all duration-300 ease-in-out',
          isCollapsed && 'line-clamp-none',
        )}
      >
        {details}
        
      </div>
    </div>
  )
}

export default TaskItem
