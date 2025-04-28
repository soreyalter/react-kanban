import { Status } from "@/pages/board/components/type";
import { Hourglass, LucideIcon, Sparkles, Sword } from "lucide-react";

export const status2title: Readonly<{
  [key in Status]: { title: string; icon: LucideIcon }
}> = {
  [Status.Todo]: { title: 'Todo | 待办任务', icon: Hourglass },
  [Status.Processing]: { title: 'In process | 进行中任务', icon: Sword },
  [Status.Completed]: { title: 'Completed | 已完成任务', icon: Sparkles },
}