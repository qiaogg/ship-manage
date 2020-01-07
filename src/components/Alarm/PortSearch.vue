<template>
  <div>
    <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
      <span class="el-icon-phone-outline"></span>
      港口查询
    </div>
    <br>
    <el-card style="margin-top:50px">
      <el-col :span="5">
        <el-input ref="input" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button type="primary" width="200px" @click="clear">清除</el-button>
      </el-col>
      <div style="margin-top:60px">
        <el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all
                 :filter-node-method="filterNode" ref="tree"></el-tree>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      clear() {
        this.$refs.input.clear();
      }
    },

    data() {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: '上海市',
        }, {
          id: 2,
          label: '江苏省',
        }, {
          id: 3,
          label: '福建省',
        }, {
          id: 4,
          label: '广东省',
        }, {
          id: 5,
          label: '广西省',
        }, {
          id: 6,
          label: '海南省',
          children: [{
            id: 11,
            label: '三沙市'
          }]
        }, {
          id: 7,
          label: '山东省',
        }, {
          id: 8,
          label: '河北省',
        }, {
          id: 9,
          label: '辽宁省',
        }, {
          id: 10,
          label: '浙江省',
          children: [{
            id: 12,
            label: '舟山市',
            children: [{
              id: 16,
              label: '嵊泗县',
            }, {
              id: 17,
              label: '岱山县',
            }, {
              id: 18,
              label: '定海区',
            }, {
              id: 19,
              label: '普陀区',
              children: [
                {
                  id: 20,
                  label: '沈家门港',
                }, {
                  id: 21,
                  label: '六横港',
                }, {
                  id: 22,
                  label: '东极镇',
                }, {
                  id: 23,
                  label: '展茅街道',
                }, {
                  id: 24,
                  label: '东港街道',
                }, {
                  id: 25,
                  label: '普陀山',
                }, {
                  id: 26,
                  label: '朱家尖',
                },{
                  id: 27,
                  label: '蚂蚁岛',
                },{
                  id: 28,
                  label: '登步岛',
                },{
                  id: 29,
                  label: '虾峙岛',
                }
              ]
            }]
          }, {
            id: 13,
            label: '宁波市'
          }, {
            id: 14,
            label: '台州市'
          }, {
            id: 15,
            label: '温州市'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
<style scoped>
  .el-card {
    margin-top: 50px;
  }
</style>
