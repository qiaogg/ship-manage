<template>
    <div>
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-ship"></span>
              船舶追踪
        </div>
        <br>
        <el-card style="margin-top:50px">
               <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
                   <el-table-column  type="selection" width="55"></el-table-column>
                   <el-table-column  type="index" width="50" label="序号"></el-table-column>
                   <el-table-column  prop="id" label="船只ID"  width="120"></el-table-column>
                   <el-table-column  prop="mmsi" label="MMSI"  width="120"></el-table-column>
                   <el-table-column  prop="long" label="终端号"  width="120"></el-table-column>
                   <el-table-column  prop="long" label="经度"  width="120"></el-table-column>
                   <el-table-column  prop="lat" label="纬度"  width="120"></el-table-column>
                   <el-table-column  prop="status" label="状态"  width="120"></el-table-column>
               </el-table>
                <div style="margin-top:20px;margin-bottom:20px;padding-bottom:10px">
                    <el-col :span="2"><el-button type="primary" size="mini">删除定制</el-button></el-col>
                    <el-col :span="2"><el-button type="primary" size="mini">开始监控</el-button></el-col>
                </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
             tableData: [],

        }
    }
}
</script>