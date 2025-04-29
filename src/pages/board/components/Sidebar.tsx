import { Button } from '@/components/ui/button'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Sidebar = () => {
  const handleClick = () => {
    window.alert("目前还不能摸，下次再来😍")
  }
  return (
    <aside className="group bg-secondary fixed flex h-full w-80 flex-col items-center gap-y-4">
      <h1 className="mt-4 text-4xl font-bold">Task Kanban</h1>
      <h1 className="text-4xl font-bold">任务看板</h1>

      <div>
        <DotLottieReact
          src="/cat-loader.lottie"
          loop
          autoplay
          className="h-auto w-100"
        />
      </div>
      <Button variant="outline" className="w-40 text-lg" onClick={handleClick}>
        {/* <Plus /> */}
        😍摸一下猫
      </Button>
      <div className="text-muted-foreground mt-auto p-4">
        ❗说明：这是一个练手网站项目，目前没有后端，目前还不支持新建任务，但是可以通过拖拽改变任务状态
      </div>
      <div className="bg-muted-foreground/60 absolute top-0 right-0 h-full w-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </aside>
  )
}

export default Sidebar
