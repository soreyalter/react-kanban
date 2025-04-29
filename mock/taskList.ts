import { Status, TaskDataItem } from '../src/pages/board/components/type'

export const mock: TaskDataItem[] = [
  {
    id: 11,
    status: Status.Todo,
    title: '上线',
    details: '部署新版本到 Vercel 平台，更新生产环境代码。',
  },
  {
    id: 12,
    status: Status.Completed,
    title: '宣讲会',
    details: '苏州移动公司的线上宣讲会将在4月28日晚上18:00开始，欢迎感兴趣的同学届时参与，还有抽奖环节～',
  },
  {
    id: 13,
    status: Status.Todo,
    title: '使用自定义序列化工具',
    details: '基本数据类型的值会被直接复制到新的数组中，复杂对象需要手动处理序列化逻辑。',
  },
  {
    id: 14,
    status: Status.Processing,
    title: '避免序列化函数',
    details: '在默认情况下，使用 JSON.stringify 和 JSON.parse 对包含函数的对象进行序列化和反序列化时，函数会被丢弃。如果需要保留函数的功能，必须采取额外的措施，例如手动分离和重新注入函数，或者使用自定义序列化工具。',
  },
  {
    id: 1,
    status: Status.Todo,
    title: '阅读 React 官方文档',
    details: '复习 React 最新官方文档，了解 Hooks、Server Components 的最佳实践与更新内容。',
  },
  {
    id: 2,
    status: Status.Todo,
    title: '提交项目代码 Review',
    details: '将 feature/login-flow 分支合并请求发送给团队负责人，等待 Code Review 意见反馈。',
  },
  {
    id: 3,
    status: Status.Todo,
    title: '准备技术分享 PPT',
    details: '下周三下午三点在会议室 A 进行前端性能优化主题分享，请提前准备好 PPT 和 Demo 示例。',
  },
  {
    id: 4,
    status: Status.Todo,
    title: '配置 CI/CD 流水线',
    details: '为后端服务添加 GitHub Actions 自动部署流程，提升发布效率和稳定性。',
  },
  {
    id: 5,
    status: Status.Todo,
    title: '测试支付流程',
    details: '确保用户从下单到支付完成整条链路无异常，覆盖微信、支付宝等多种支付方式。',
  },
  {
    id: 6,
    status: Status.Todo,
    title: '完善用户权限模型',
    details: '根据产品需求文档，设计并实现 RBAC 权限控制模块的功能点和接口规范。整理本周工作进展、遇到的问题及解决方案，于周五下班前提交至钉钉系统。整理本周工作进展、遇到的问题及解决方案，于周五下班前提交至钉钉系统。',
  },
  {
    id: 7,
    status: Status.Todo,
    title: '修复登录页样式问题',
    details: '移动端 Safari 浏览器下输入框被键盘遮挡，需调整页面滚动行为以改善用户体验。',
  },
  {
    id: 8,
    status: Status.Todo,
    title: '更新依赖并打包',
    details: '升级项目中的 axios、react-router 等依赖库至最新稳定版本，并执行 npm run build 打包构建。',
  },
  {
    id: 9,
    status: Status.Todo,
    title: '组织部门团建活动',
    details: '计划本周五下午前往天目湖开展团建活动，已联系旅行社确认行程安排及预算费用。整理本周工作进展、遇到的问题及解决方案，于周五下班前提交至钉钉系统。整理本周工作进展、遇到的问题及解决方案，于周五下班前提交至钉钉系统。',
  },
  {
    id: 10,
    status: Status.Todo,
    title: '撰写周报总结',
    details: '整理本周工作进展、遇到的问题及解决方案，于周五下班前提交至钉钉系统。',
  },
  {
    id: 15,
    status: Status.Todo,
    title: '开发用户反馈功能',
    details: '新增“用户反馈”弹窗组件，支持文字+截图上传功能，用于收集 bug 和建议。',
  },
  {
    id: 16,
    status: Status.Completed,
    title: '完成首页 UI 改版',
    details: '根据最新的设计图完成了首页布局重构，包括卡片式展示、响应式适配等优化。根据最新的设计图完成了首页布局重构，包括卡片式展示、响应式适配等优化。',
  },
  {
    id: 17,
    status: Status.Processing,
    title: '接入埋点统计',
    details: '正在集成 GA 和 Mixpanel 埋点 SDK，用于跟踪关键页面访问和按钮点击事件。',
  },
  {
    id: 18,
    status: Status.Todo,
    title: '编写 API 接口文档',
    details: '基于 Swagger 规范编写用户管理模块的 RESTful 接口说明，供前后端协作参考。根据最新的设计图完成了首页布局重构，包括卡片式展示、响应式适配等优化。',
  },
  {
    id: 19,
    status: Status.Todo,
    title: '优化搜索性能',
    details: '针对大数据量下的模糊搜索性能瓶颈，考虑引入 Web Worker 或分页加载策略。',
  },
]