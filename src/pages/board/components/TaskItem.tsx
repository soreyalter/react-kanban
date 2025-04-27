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

const getIcon = (status: Status) => {
  if (status === Status.Todo) return <LoaderCircle className="text-amber-400" />
  if (status === Status.Completed) return <Circle />
  return <CircleCheck />
}

const TaskItem = ({ details, status, title }: TaskDataItem) => {
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
    <div className="group flex min-h-10 w-70 flex-col justify-center gap-y-2 rounded-md border-1 border-[text-muted-foreground] p-4 transition duration-300 hover:bg-slate-100">
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
                <ChevronDown className="text-amber-400" />
              ) : (
                <ChevronRight className="text-amber-400" />
              )}
            </Button>
          )}
        </div>
      </header>

      <div
        ref={contentRef}
        className={clsx(
          'line-clamp-2 text-[16px] leading-6 transition-all ease-in-out duration-300',
          isCollapsed && 'line-clamp-none',
        )}
      >
        {details}:
        苏州移动公司的线上宣讲会将在4.28晚18：00开始，欢迎感兴趣的同学届时参与，还有抽奖环节～
      </div>
    </div>
  )
}

export default TaskItem
