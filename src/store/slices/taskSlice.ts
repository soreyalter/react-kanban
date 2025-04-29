import { Status, TaskDataItem } from '@/pages/board/components/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mock } from '../../../mock/taskList'

interface taskSliceData {
  todoTasks: TaskDataItem[]
  processingTasks: TaskDataItem[]
  completedTasks: TaskDataItem[]
}

const initialState: taskSliceData = {
  todoTasks: mock.filter((item) => item.status === Status.Todo),
  processingTasks: mock.filter((item) => item.status === Status.Processing),
  completedTasks: mock.filter((item) => item.status === Status.Completed),
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTodoTasks: (state, action: PayloadAction<TaskDataItem[]>) => {
      state.todoTasks = action.payload
    },
    updateProcessingTasks: (state, action: PayloadAction<TaskDataItem[]>) => {
      state.processingTasks = action.payload
    },
    updateCompletedTasks: (state, action: PayloadAction<TaskDataItem[]>) => {
      state.completedTasks = action.payload
    },
  },
})

export const { updateCompletedTasks, updateProcessingTasks, updateTodoTasks } =
  taskSlice.actions

export default taskSlice.reducer
