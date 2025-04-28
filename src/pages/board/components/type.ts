export enum Status {
  Todo,
  Processing,
  Completed,
}

export interface TaskDataItem {
  id?: number
  status: Status
  title: string
  details: string
}