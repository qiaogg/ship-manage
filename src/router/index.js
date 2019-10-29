import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import ShipMian from '@/components/ShipMian'
import system from '@/components/System/system'
import Password from '@/components/System/Password'
import Sound from '@/components/System/Sound'
//import Test_distance from '@/components/Manage/Test_distance'
import olmap from '@/components/Manage/olmap'
import Search from '@/components/ShipManage/Search'
import NoPowerSearch from '@/components/ShipManage/NoPowerSearch'
import ShipTrace from '@/components/ShipManage/ShipTrace'
import GroupManage from '@/components/ShipManage/GroupManage'
import AlarmSearch from '@/components/Alarm/AlarmSearch'
import PortSearch from '@/components/Alarm/Portsearch'
import Rescue from '@/components/Alarm/Rescue'

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
          path: '/Manage/olmap',
          name: 'olmap',
          component: olmap,
        },
        {
          path: '/ShipManage/Search',
          name: 'Search',
          component: Search,
        },
        {
          path: '/ShipManage/NoPowerSearch',
          name: 'NoPowerSearch',
          component: NoPowerSearch,
        },
        {
          path: '/ShipManage/ShipTrace',
          name: 'ShipTrace',
          component: ShipTrace,
        },
        {
          path: '/ShipManage/GroupManage',
          name: 'GroupManage',
          component: GroupManage,
        },
        {
          path: '/Alarm/AlarmSearch',
          name: 'AlarmSearch',
          component: AlarmSearch,
        },
        {
          path: '/Alarm/PortSearch',
          name: 'PortSearch',
          component: PortSearch,
        },
        {
          path: '/Alarm/Rescue',
          name: 'Rescue',
          component: Rescue,
        }
      ]
    }
  ]
})
