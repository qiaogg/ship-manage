<template>
    <div>
        <el-container class="Main">
            <el-aside width='250px' style=" background-color:#F2F6FC;">
                <h2>船舶管理系统</h2>
                <div style="height:60px"> 
                    <el-row>
                        <el-col :span="2" style="margin-left:20px">
                            <el-avatar  icon="el-icon-user-solid" size='large'></el-avatar>
                        </el-col>
                        <el-col :span="6" style="margin-left:20px;margin-top:10px">
                           账号:<div id=""></div>
                        </el-col>
                    </el-row>
                </div>
                 <el-menu router :default-active="$route.path">
                      <el-submenu index="1">
                         <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>系统管理</span>
                         </template>
                        <el-menu-item-group>
                            <el-menu-item index="/System/system">系统设置</el-menu-item>
                            <el-menu-item index="/System/Password">修改密码</el-menu-item>
                            <el-menu-item index="/System/Sound">音效设置</el-menu-item>
                            <el-menu-item @click="withdraw()">退出系统</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-submenu index="2">
                         <template slot="title">
                            <i class="el-icon-view"></i>
                            <span>海图管理</span>
                         </template>
                        <el-menu-item-group>
                            <el-menu-item index="/MapManage/olmap">显示地图</el-menu-item>
                            <el-menu-item @click="measureSea('line')">海图测距</el-menu-item>
                            <el-menu-item @click="measureSea('area')">海图测面</el-menu-item>
                            <el-menu-item index="1-2">海图拍照</el-menu-item>
                            <el-menu-item index="1-2">海图打印</el-menu-item>
                            <el-menu-item index="1-2">海图定位</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-submenu index="3">
                         <template slot="title">
                            <i class="el-icon-ship"></i>
                            <span>船舶管理</span>
                         </template>
                        <el-menu-item-group>
                            <el-menu-item index="/ShipManage/Search">船舶查询</el-menu-item>
                            <el-menu-item index="/ShipManage/NoPowerSearch">无动力船舶</el-menu-item>
                            <el-menu-item index="/ShipManage/ShipTrace">区域回放</el-menu-item>
                            <el-menu-item index="/ShipManage/ShipTrace">船舶追踪</el-menu-item>
                            <el-menu-item index="/ShipManage/GroupManage">编组管理</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-submenu index="4">
                         <template slot="title">
                            <i class="el-icon-phone-outline"></i>
                            <span>报警救援</span>
                         </template>
                        <el-menu-item-group>
                            <el-menu-item index="/Alarm/AlarmSearch">报警查询</el-menu-item>
                            <el-menu-item index="1-2">视屏通话</el-menu-item>
                            <el-menu-item index="/Alarm/PortSearch">港口查询</el-menu-item>
                            <el-menu-item index="/Alarm/Rescue">船舶救援</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-submenu index="5">
                         <template slot="title">
                            <i class="el-icon-place"></i>
                            <span>警戒区域</span>
                         </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">添加警戒</el-menu-item>
                            <el-menu-item index="/WarnRegion/ExactAdd">精确添加警戒</el-menu-item>
                            <el-menu-item index="/WarnRegion/Seewarn">查询警戒</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-submenu index="6">
                         <template slot="title">
                            <i class="el-icon-search"></i>
                            <span>查询统计</span>
                         </template>
                        <el-menu-item-group>
                            <el-menu-item index="/Searchcount/Searchdata">数据源统计</el-menu-item>
                            <el-menu-item index="/Searchcount/Sailcount">航程统计</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-submenu index="7">
                         <template slot="title">
                            <i class="el-icon-warning-outline"></i>
                            <span>帮助</span>
                         </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">帮助文档</el-menu-item>
                            <el-menu-item index="1-2">关于我们</el-menu-item>
                            <el-menu-item index="1-2">船舶摄像机</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                 </el-menu>
            </el-aside>
            <el-container>
                <el-header  style="width:169vh; margin-right:200px" class="icon">
                    <div style="margin-right:490px">
                     <el-tooltip content="圆形搜索" placement="top">
                          <el-button  icon="el-icon-search" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="距形搜索" placement="top">
                          <el-button  icon="el-icon-zoom-in" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="任意搜索" placement="top">
                          <el-button  icon="el-icon-aim" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="船舶查询" placement="top">
                          <el-button  icon="el-icon-ship" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="AIS船舶" placement="top">
                          <el-button  icon="el-icon-view" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="视频录制" placement="top">
                          <el-button  icon="el-icon-video-camera" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="警戒区域" placement="top">
                          <el-button  icon="el-icon-warning" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="人员报警" placement="top">
                           <el-button  icon="el-icon-phone-outline" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="区域选择" placement="top">
                            <el-button  icon="el-icon-full-screen" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="清除所有轨迹" placement="top">
                            <el-button  icon="el-icon-error" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="快照" placement="top">
                            <el-button  icon="el-icon-camera" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="测距" placement="top">
                            <el-button  icon="el-icon-s-flag" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="测面积" placement="top">
                             <el-button  icon="el-icon-house" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="测方位角" placement="top">
                            <el-button  icon="el-icon-pie-chart" circle></el-button>
                     </el-tooltip>
                     <el-tooltip content="编组报警" placement="top">
                            <el-button  icon="el-icon-phone" circle></el-button>
                     </el-tooltip> 
                    </div>
                    <el-button icon="el-icon-caret-left" size="mini" style="width:2px;height:40px;position: fixed;bottom: 2rem;right: 2rem;z-index: 9999;bottom:35rem" @click="table2 = true"></el-button>
                </el-header>
                <el-main style="width:169vh">
                    <transition>                      
                            <router-view v-on:getMap="getMapObject"></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
         <el-button icon="el-icon-caret-top" size="mini" style="position: fixed;bottom: 2rem;right: 5rem;z-index: 9999;" @click="table = true"></el-button>
         <el-drawer
             :visible.sync="table"
             direction="btt"
             size="50%">
             <el-table :data="gridData">
                <el-table-column property="date" label="船名" width="50"></el-table-column>
                <el-table-column property="name" label="船舶类型" width="100"></el-table-column>
                <el-table-column property="address" label="产品ID" width="150"></el-table-column>
                <el-table-column property="date" label="设备类型" width="150"></el-table-column>
                <el-table-column property="name" label="设备ID" width="100"></el-table-column>
                <el-table-column property="address" label="报警时间" width="100"></el-table-column>
                <el-table-column property="date" label="报警类型" width="150"></el-table-column>
                <el-table-column property="name" label="设备状态" width="100"></el-table-column>
                <el-table-column property="address" label="处理情况" width="150"></el-table-column>
                <el-table-column property="date" label="我的处理结果" width="150"></el-table-column>
                <el-table-column property="name" label="我的处理时间" width="140"></el-table-column>
                <el-table-column property="address" label="我的处理操作人" width="140"></el-table-column>
                <el-table-column property="address" label="备注" width="100"></el-table-column>
                <el-table-column property="date" label="经度" width="150"></el-table-column>
                <el-table-column property="name" label="纬度" width="100"></el-table-column>
                <el-table-column property="address" label="卡号" width="150"></el-table-column>
                <el-table-column property="date" label="MMSI" width="150"></el-table-column>
                <el-table-column property="name" label="温度" width="140"></el-table-column>
                <el-table-column property="address" label="电池" width="140"></el-table-column>
                <el-table-column property="name" label="航向" width="100"></el-table-column>
                <el-table-column property="address" label="航速" width="150"></el-table-column>
                <el-table-column property="date" label="省份" width="150"></el-table-column>
                <el-table-column property="name" label="城市" width="140"></el-table-column>
                <el-table-column property="address" label="区" width="140"></el-table-column>
             </el-table>
         </el-drawer>
         <el-drawer
             :visible.sync="table2"
             direction="rtl"
             size="30%">
             <el-col :span="8" :offset="1">
                 <el-input></el-input>
             </el-col>
             <el-col :span="4" :offset="1">
                 <el-button>展开</el-button>
             </el-col>
             <el-col :span="4">
                 <el-button>收起</el-button>
             </el-col>
             <el-col :span="4">
                 <el-button>刷新</el-button>
             </el-col>
             <el-col :span="16">
                 <el-tree :data="data4"  :props="defaultProps" @node-click="handleNodeClick" style="margin-top:20px"></el-tree>
             </el-col>
         </el-drawer>
    </div>
</template>
<script>
import measureAreaAndDistance from '../js/measureAreaAndDistance'
export default {
    data(){
        return{
            map:null,
             table: false,
             table2:false,
             dialog: false,
             loading: false,
             gridData: [],
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
            formLabelWidth: '80px',
             data4: [{
               label: '浙江省',
               children: [{
               label: '二级 1-1',
               children: [{
               label: '三级 1-1-1'
                    }]
                  }]
                  }, {
              label: '福建省',
              children: [{
              label: '二级 2-1',
              children: [{
              label: '三级 2-1-1'
                 }]
               }, {
              label: '二级 2-2',
              children: [{
              label: '三级 2-2-1'
               }]
              }]
             }, {
             label: '北京市',
             children: [{
             label: '二级 3-1',
             children: [{
              label: '三级 3-1-1'
              }]
             }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
               }]
             }]
           }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
         
    },
    methods:{
            handleClose(done) {
               this.$confirm('确定要提交表单吗？')
                     .then(_ => {
                         this.loading = true;
                         setTimeout(() => {
                           this.loading = false;
                           done();
                            }, 2000);
                         })
                  .catch(_ => {});
                },
        withdraw(){
             this.$confirm('即将退出船舶管理系统，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功退出!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
      getMapObject(val){
          this.map = val
      },
      measureSea(measureType){
          console.log(measureType)
          measureAreaAndDistance(this.map,measureType)
          //this.$emit('func')
      }    
    }
}
</script>
<style scoped>
.Main{
    width: 190vh;
    height: 97vh;
}
h2{
    color: #909399;
    

}
.el-aside{
    background-color: #C0C4CC;
}
.el-header{
    background-color: #E4E7ED;
}
.el-main{
    background-color: #DCDFE6;
}
.el-footer{
    height: 100px;
    background-color: #C0C4CC;
}
.avater{
    padding-left: 0px;
    margin-left:1px;
    position:left;
}
.icon{
    font-size: 40px;
}


</style>
