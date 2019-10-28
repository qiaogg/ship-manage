<template>
    <div>
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-ship"></span>
              船舶综合查询
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
                 <el-col :span="2" :offset="5">
                      <el-button type="primary" style="width:150px" >查询</el-button>
                 </el-col>
             </el-row>
               <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
                   <el-table-column  type="selection" width="55"></el-table-column>
                   <el-table-column  type="index" width="50" label="序号"></el-table-column>
                   <el-table-column  prop="id" label="产品ID"  width="120"></el-table-column>
                   <el-table-column  prop="number" label="卡号"  width="120"></el-table-column>
                   <el-table-column  prop="name" label="船名"  width="120"></el-table-column>
                   <el-table-column  prop="human" label="船主"  width="120"></el-table-column>
                   <el-table-column  prop="phone" label="联系电话"  width="120"></el-table-column>
                   <el-table-column  prop="text" label="备注"  width="120"></el-table-column>
                   <el-table-column  prop="mmsi" label="MMSI"  width="120"></el-table-column>
                   <el-table-column  prop="long" label="经度"  width="120"></el-table-column>
                   <el-table-column  prop="lat" label="纬度"  width="120"></el-table-column>
                   <el-table-column  prop="status" label="状态"  width="120"></el-table-column>
                   <el-table-column  prop="cell" label="正在使用的电池"  width="120"></el-table-column>
                   <el-table-column  prop="iscell" label="电量是否报警"  width="120"></el-table-column>
                   <el-table-column  prop="time" label="定位时间"  width="120"></el-table-column>
                   <el-table-column  prop="dataid" label="数据ID"  width="120"></el-table-column>
                   <el-table-column  prop="port" label="港口"></el-table-column>
               </el-table>
                <div style="margin-top:20px">
                    <el-col :span="2"><el-button type="primary" size="mini">导出船只</el-button></el-col>
                    <el-col :span="2"><el-button type="primary" size="mini">查看轨迹</el-button></el-col>
                    <el-col :span="2"><el-button type="primary" size="mini">制定追踪</el-button></el-col>
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
                    label:'船名'
                },
                {
                    value:'2',
                    label:'产品ID'
                },
                {
                    value:"3",
                    label:'MMIS'
                },
                {
                    value:'4',
                    label:'卡号'
                },
                {
                     value:'5',
                     label:'数据ID'

                }
            ],
             tableData: [],

        }
    }
}
</script>