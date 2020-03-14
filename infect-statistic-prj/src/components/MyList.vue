<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 1000px;margin: auto"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="name"
        label="省份"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="NIP"
        label="新增确诊"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="IP"
        label="现有确诊"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="cure"
        label="治愈"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="dead"
        label="死亡"
        sortable
      >
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pagesize"
      layout="total, sizes,prev, pager, next"
      :total="tableData.length"
      prev-text="上一页"
      next-text="下一页">
    </el-pagination>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1, // 默认显示页面为1
        pagesize: 10,
        tableData: [{
          name: '湖北',
          NIP: '401',
          IP: '41618',
          cure: '20954',
          dead: '2615'
        }, {
          name: '广东',
          NIP: '0',
          IP: '496',
          cure: '844',
          dead: '7'
        }, {
          name: '河北',
          NIP: '0',
          IP: '222',
          cure: '1030',
          dead: '19'
        }, {
          name: '浙江',
          NIP: '0',
          IP: '339',
          cure: '865',
          dead: '1'
        }, {
          name: '湖南',
          NIP: '0',
          IP: '229',
          cure: '783',
          dead: '4'
        }, {
          name: '安徽',
          NIP: '0',
          IP: '239',
          cure: '744',
          dead: '6'
        }, {
          name: '江西',
          NIP: '0',
          IP: '214',
          cure: '719',
          dead: '1'
        }, {
          name: '山东',
          NIP: '1',
          IP: '373',
          cure: '377',
          dead: '6'
        }, {
          name: '江苏',
          NIP: '0',
          IP: '151',
          cure: '480',
          dead: '0'
        }, {
          name: '重庆',
          NIP: '0',
          IP: '197',
          cure: '373',
          dead: '6'
        }, {
          name: '四川',
          NIP: '2',
          IP: '220',
          cure: '308',
          dead: '3'
        }, {
          name: '江西',
          NIP: '0',
          IP: '',
          cure: '',
          dead: ''
        }, {
          name: '江西',
          NIP: '0',
          IP: '',
          cure: '',
          dead: ''
        }, {
          name: '江西',
          NIP: '0',
          IP: '',
          cure: '',
          dead: ''
        }, {
          name: '江西',
          NIP: '0',
          IP: '',
          cure: '',
          dead: ''
        }]
      }
    },
    methods: {
      // 每页下拉显示数据
      handleSizeChange: function(size) {
        this.pagesize = size
      },
      handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage
      }
    }
  }
</script>

<style scoped>

</style>
