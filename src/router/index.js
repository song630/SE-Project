import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SearchPage from '@/components/RightPages/SearchPage' // 课程搜索页面
import QueryResultPage from '@/components/RightPages/QueryResultPage'
import ProjectPage from '@/components/RightPages/ProjectPage' // 培养方案页面
import PlanProjectPage from '@/components/RightPages/PlanProjectPage' // 制定个人培养方案页面
import EnrollPage from '@/components/RightPages/EnrollPage' // 选课页面

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/SearchPage', name: 'SearchPage', component: SearchPage },
    { path: '/QueryResultPage', name: 'QueryResultPage', component: QueryResultPage },
    { path: '/ProjectPage', name: 'ProjectPage', component: ProjectPage },
    { path: '/ProjectPage/PlanProjectPage', name: 'PlanProjectPage', component: PlanProjectPage },
    { path: '/QueryResultPage/EnrollPage', name: 'EnrollPage', component: EnrollPage }
  ]
})
