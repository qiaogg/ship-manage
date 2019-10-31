<template>
    <div>
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-place"></span>
              查询警戒
        </div>
        <br>
        <el-card style="margin-top:50px">
             <el-row>
                 <el-col :span="3">
                      <el-select v-model="type" placeholder="请选择">
                          <el-option
                           v-for="item in types"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                           </el-option>
                     </el-select>
                 </el-col>
                 <el-col :span="4" :offset="1">
                     <el-input></el-input>
                 </el-col>
                 <el-col :span="6" :offset="1">
                    <el-date-picker
                       v-model="time"
                       type="datetimerange"
                       start-placeholder="开始日期"
                       end-placeholder="结束日期"
                       :default-time="['12:00:00']">
                     </el-date-picker>
                 </el-col>
                 <el-col :span="2" :offset="4">
                      <el-button type="primary" style="width:100px" @click="fun">查询</el-button>
                 </el-col>
                 <el-col :span="2" :offset="1">
                      <el-button  style="width:100px"  @click="fun">统计</el-button>
                 </el-col>
             </el-row>
               <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
                   <el-table-column  type="selection" width="55"></el-table-column>
                   <el-table-column  type="index" width="50" label="序号"></el-table-column>
                   <el-table-column  prop="id" label="船舶ID"  width="120"></el-table-column>
                   <el-table-column  prop="number" label="船名"  width="120"></el-table-column>
                   <el-table-column  prop="name" label="别名"  width="120"></el-table-column>
                   <el-table-column  prop="human" label="MMIS"  width="120"></el-table-column>
                   <el-table-column  prop="phone" label="终端号"  width="120"></el-table-column>
                   <el-table-column  prop="long" label="经度"  width="120"></el-table-column>
                   <el-table-column  prop="lat" label="纬度"  width="120"></el-table-column>
                   <el-table-column  prop="text" label="状态"  width="120"></el-table-column>
                   <el-table-column  prop="mmsi" label="定位时间"  width="120"></el-table-column>
               </el-table>
                <div style="margin-top:20px">
                    <el-col :span="10">
                        <el-pagination
                            background
                            layout="prev, pager, next, jumper"
                            :total="1000">
                        </el-pagination>
                    </el-col>
                </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
            type:'1',
            time:'',
            types:[
                {
                    value:'1',
                    label:'船舶ID'
                },
                {
                    value:'2',
                    label:'MMSI'
                },
                {
                    value:'3',
                    label:'终端号'
                },
            ],
             tableData: [],

        }
    },
    methods:{
        fun(){
            console.log(this.time)
        }
    }
}
</script>