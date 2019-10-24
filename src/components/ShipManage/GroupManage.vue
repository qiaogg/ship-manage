<template>
    <div>
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-ship"></span>
              编组管理
        </div>
        <br>
        <el-card style="margin-top:50px">
             <el-row>
                 <el-col :span="3">
                      <el-select v-model="type" placeholder="编组名称">
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
                 <el-col :span="2" :offset="5">
                      <el-button type="primary" style="width:150px">查询</el-button>
                 </el-col>
             </el-row>
               <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
                   <el-table-column  type="selection" width="55"></el-table-column>
                   <el-table-column  prop="id" label="组号"  width="120"></el-table-column>
                   <el-table-column  prop="number" label="编组名称"  width="120"></el-table-column>
                   <el-table-column  prop="name" label="组长船舶名称"  width="120"></el-table-column>
                   <el-table-column  prop="human" label="组长姓名"  width="120"></el-table-column>
                   <el-table-column  prop="phone" label="组长联系电话"  width="120"></el-table-column>
                   <el-table-column  prop="text" label="安全距离（海里）"  width="150"></el-table-column>
                   <el-table-column  prop="mmsi" label="船舶总数"  width="120"></el-table-column>
                   <el-table-column  prop="long" label="作业船舶数"  width="120"></el-table-column>
               </el-table>
                <div style="margin-top:20px">
                    <el-col :span="2"><el-button type="primary" size="mini">船舶列表</el-button></el-col>
                    <el-col :span="2"><el-button type="primary" size="mini">报警列表</el-button></el-col>
                    <el-col :span="2"><el-button type="primary" size="mini">编组定位</el-button></el-col>
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
            type:'',
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