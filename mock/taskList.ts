import {Status, TaskDataItem} from '../src/pages/board/components/type'

export const mock: TaskDataItem[] = [
  {
    id: 11,
    status: Status.Todo,
    title: '上线',
    details: 'vercel 更新',
  },
  { id: 12, status: Status.Completed, title: '宣讲会', details: '苏州移动公司的线上宣讲会将在4.28晚18：00开始，欢迎感兴趣的同学届时参与，还有抽奖环节～' },
  { id: 13, status: Status.Todo, title: '使用自定义序列化工具', details: '基本数据类型的值会被直接复制到新的数组中。' },
  { id: 14, status: Status.Processing, title: '避免序列化函数', details: '在默认情况下，使用 JSON.stringify 和 JSON.parse 对包含函数的对象进行序列化和反序列化时，函数会被丢弃，反序列化后的对象中无法调用 updateSourceList。如果需要保留函数的功能，必须采取额外的措施，例如手动分离和重新注入函数，或者使用自定义序列化工具。' },
  { id: 1, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
  { id: 2, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
  { id: 3, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
  { id: 4, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
  { id: 5, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
  { id: 6, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
  { id: 7, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
  { id: 8, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
  { id: 9, status: Status.Todo, title: '总结', details: '如果你有更多具体的需求或上下文，请进一步补充说明，我可以为你提供更针对性的解决方案！' },
]