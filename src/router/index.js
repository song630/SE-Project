import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' // 容器
import Index from '@/components/RightPages/Index' // 首页
import SearchPage from '@/components/RightPages/SearchPage' // 课程搜索页面
import QueryResultPage from '@/components/RightPages/QueryResultPage' // 课程搜索结果
import ProjectPage from '@/components/RightPages/ProjectPage' // 培养方案页面
import PlanProjectPage from '@/components/RightPages/PlanProjectPage' // 制定个人培养方案页面
import EnrollPage from '@/components/RightPages/EnrollPage' // 选课页面
import EnrollResultPage from '@/components/RightPages/EnrollResultPage' // 选课结果页面
import CourseInfoPage from '@/components/RightPages/CourseInfoPage' // 课程信息显示页面
import SetDatePage from '@/components/RightPages/SetDatePage' // 管理员设置初选补选退选时间页面
import StudentListPage from '@/components/RightPages/StudentListPage' // 管理员查看选某门课所有学生列表的页面
import QueryStudentPage from '@/components/RightPages/QueryStudentPage' // 管理员查找学生的页面
import Second from '@/components/RightPages/Second' // 补选页面
import AllCourse from '@/components/RightPages/AllCourse' // 管理员查看所有course课程
import AllClass from '@/components/RightPages/AllClass' // 管理员查看所有class课程
import SubStuPage from '@/components/RightPages/SubStuPage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld, // [0]
    children: [
      { path: '/', component: Index, name: 'Index' }
    ]
  },
  {
    path: '/',
    name: 'searchPage',
    component: HelloWorld, // [1]
    children: [
      { path: '/searchPage', component: SearchPage, name: 'SearchPage' },
      { path: '/queryResultPage', component: QueryResultPage, name: 'QueryResultPage' }
    ]
  },
  {
    path: '/',
    name: 'projectPage',
    component: HelloWorld, // [2]
    children: [
      { path: '/projectPage', component: ProjectPage, name: 'ProjectPage' },
      { path: '/planProjectPage', component: PlanProjectPage, name: 'PlanProjectPage' }
    ]
  },
  {
    path: '/',
    name: 'enrollPage',
    component: HelloWorld, // [3]
    children: [
      { path: '/enrollPage', component: EnrollPage, name: 'EnrollPage' },
      { path: '/enrollResultPage', component: EnrollResultPage, name: 'EnrollResultPage' }
    ]
  },
  {
    path: '/',
    name: 'courseInfoPage',
    component: HelloWorld, // [4]
    children: [
      { path: '/courseInfoPage', component: CourseInfoPage, name: 'CourseInfoPage' }
    ]
  },
  {
    path: '/',
    name: 'setDatePage',
    component: HelloWorld, // [5]
    children: [
      { path: '/setDatePage', component: SetDatePage, name: 'SetDatePage' }
    ]
  },
  {
    path: '/',
    name: 'studentListPage',
    component: HelloWorld, // [6]
    children: [
      { path: '/studentListPage', component: StudentListPage, name: 'StudentListPage1' }
    ]
  },
  {
    path: '/',
    name: 'queryStudentPage',
    component: HelloWorld, // [7]
    children: [
      { path: '/queryStudentPage', component: QueryStudentPage, name: 'QueryStudentPage' },
      { path: '/subStuPage', component: SubStuPage, name: 'SubStuPage' }
    ]
  },
  {
    path: '/',
    name: 'second',
    component: HelloWorld, // [8]
    children: [
      { path: '/second', component: Second, name: 'Second' }
    ]
  },
  {
    path: '/',
    name: 'allCourse',
    component: HelloWorld, // [9]
    children: [
      { path: '/allCourse', component: AllCourse, name: 'AllCourse' },
      { path: '/allClass', component: AllClass, name: 'AllClass' },
      { path: '/studentListPage', component: StudentListPage, name: 'StudentListPage' }
    ]
  }
]

const router = new Router({
  routes
})

export default router
