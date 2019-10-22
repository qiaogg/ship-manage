import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import ShipMian from '@/components/ShipMian'
import system from '@/components/System/system'
import Password from '@/components/System/Password'
import Sound from '@/components/System/Sound'
import Test_distance from '@/components/Manage/Test_distance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShipMian',
      component: ShipMian,
      children:[
        {
          path: '/System/system',
          name: 'system',
          component: system,
        },
        {
          path: '/System/Password',
          name: 'Password',
          component: Password,
        },
        {
          path: '/System/Sound',
          name: 'Sound',
          component: Sound,
        },
        {
          path: '/Manage/Test_distance',
          name: 'Test_distance',
          component: Test_distance,
        }
      ]
    }
  ]
})
