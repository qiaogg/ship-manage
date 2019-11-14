<template>
  <div>
    <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
      <span class="el-icon-ship"></span>
      我的船舶
    </div>
    <br>
    <el-card style="margin-top:50px">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column  prop="index" label="序号" width="100"></el-table-column>
        <el-table-column  prop="id" label="产品ID"  ></el-table-column>
        <el-table-column  prop="name" label="船名"  ></el-table-column>
        <el-table-column  prop="number" label="卡号"></el-table-column>
      </el-table>
      <div style="margin-top:20px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="handleList.length">
          </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
    export default {
        data()
        {
            return {
                handleList: [],
                // 当前页
                currentPage: 1,
                // 每页多少条
                pageSize: 10
            }
        },
        methods: {
            // 每页多少条
            handleSizeChange(val) {
                this.pageSize = val;
            },
            // 当前页
            handleCurrentChange(val) {
                this.currentPage = val;
            }
        }
    }
</script>
