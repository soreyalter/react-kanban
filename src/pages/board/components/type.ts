export enum Status {
  Todo,
  Processing,
  Completed,
}

export interface TaskDataItem {
  status: Status
  title: string
  details: string
}