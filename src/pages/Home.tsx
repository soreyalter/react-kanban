interface Mockdata {
  key: number
  content: string
}

const Home = () => {
  const mockTodos: Mockdata[] = new Array(10)
    .fill(0)
    .map((_, index) => ({ content: `todo ${index}`, key: index }))
  const mockCompleted: Mockdata[] = new Array(10)
    .fill(0)
    .map((_, index) => `completed${index}`)
    .map((_, index) => ({ content: `completed ${index}`, key: index }))

  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('text/plain', event.currentTarget.id)
    // move 操作用于指定被拖动的数据将被移动
    event.dataTransfer.effectAllowed = 'move'
    event.currentTarget.classList.add('opacity-50')
    // console.log(event.currentTarget.id)
  }

  const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.currentTarget.classList.remove('opacity-50')
    // console.log('drag end')
  }

  const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    event.currentTarget.classList.add('bg-slate-100')
    // console.log('enter')
  }

  const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      event.currentTarget.classList.remove('bg-slate-100')
      // console.log('leave')
    }
  }

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    event.dataTransfer.effectAllowed = 'move'
  }

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    event.currentTarget.classList.remove('bg-slate-100')

    const cardId = event.dataTransfer.getData('text/plain')
    const el = document.querySelector(`#${cardId}`)

    // 被拖拽元素 el 的父节点不是当前区域 才移动 el
    if (el && event.currentTarget !== el.parentNode) {
      el.parentNode?.removeChild(el)
      event.currentTarget.appendChild(el)
    }
  }

  return (
    <div id="app" className="m-4 flex gap-x-4">
      <div
        className="border-muted-foreground/50 flex w-80 flex-col gap-y-2 border-1 p-4"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <h2>Todo</h2>
        {mockTodos.map((todo) => (
          <div
            key={todo.key}
            className="border-muted-foreground/50 border-1 p-2 shadow-md"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {todo.content}
          </div>
        ))}
      </div>
      <div
        className="border-muted-foreground/50 flex w-80 flex-col gap-y-2 border-1 p-4"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <h2>Completed</h2>
        {mockCompleted.map((todo) => (
          <div
            key={todo.key}
            className="border-muted-foreground/50 border-1 p-2 shadow-md"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {todo.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
