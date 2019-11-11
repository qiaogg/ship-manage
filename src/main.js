// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
//import VueAxios from 'vue-axios'
//引入echarts
import echarts from 'echarts'
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false
Vue.prototype.$axios= axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
 data(){
   return {
    info:null
   // userName:'CTBTforV'
   } 
  },
  router,
  components: { App },
  template: '<App/>',
  mounted(){ 
    let xmls = '<?xml version="1.0" encoding="utf-8"?> \
    <soap:Envelope \
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"\
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\
    xmlns:UserWebServiceService="http://webservice.ctbt.com/"\
    soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">\
    <soap:Body>\
    <UserWebServiceService:getAllNations><arg0>{"userId":"qQ0CsBemyq1DlGgtJRKK6WVUwQTmnei5"}</arg0></UserWebServiceService:getAllNations>\
    </soap:Body>\
    </soap:Envelope>'
    this.$axios
    .post('/api/CTBT/services/Area',xmls)
    .then(function(response){             
      console.log(response.data)
    })
    .catch(function (error) { // 请求失败处理
      console.log(error)
    });
  }
})
/**
 * qQ0CsBemyq1DlGgtJRKK6WVUwQTmnei5,4,1016
 * 
 * 
 */