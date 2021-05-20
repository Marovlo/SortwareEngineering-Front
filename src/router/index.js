import Vue from 'vue'
import Router from 'vue-router'
//import ElementUI from 'element-ui' 
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import Manager from '@/components/views/Manager'
import super_manager from '@/components/views/super_manager'
import super_manager_main from '@/components/views/super_manager_main'
import super_manager_add from '@/components/views/super_manager_add'

//import Confirm from '@/components/sub/Confirm'

Vue.use(Router)
//Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path:'/second',
      name: 'Second',
      component :Second
    },
    {
      path:'/super_manager',
      name: 'super_manager',
      component :super_manager
    },
    {
      path:'/manager',
      name: 'Manager',
      component :Manager
    },
    {
      path:'/super_manager_main',
      name:'super_manager_main',
      component:super_manager_main
    },
    {
      path:'/super_manager_add',
      name:'super_manager_add',
      component:super_manager_add
    }
  ]
})

