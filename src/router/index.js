import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SearchPage from '@/components/RightPages/SearchPage'
import QueryResultPage from '@/components/RightPages/QueryResultPage'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/SearchPage', name: 'SearchPage', component: SearchPage },
    { path: '/QueryResultPage', name: 'QueryResultPage', component: QueryResultPage }
  ]
})
