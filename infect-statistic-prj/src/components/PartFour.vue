<template>
  <el-card id="CardFour">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 1100px;margin: 50px auto"
      :default-sort = "{prop: 'new_ip', order: 'descending'}">
      <el-table-column
        prop="province"
        label="省份">
      </el-table-column>
      <el-table-column
        prop="new_ip"
        sortable
        label="新增确诊">
      </el-table-column>
      <el-table-column
        prop="now_ip"
        sortable
        label="现有确诊">
      </el-table-column>
      <el-table-column
        prop="cure"
        sortable
        label="治愈">
      </el-table-column>
      <el-table-column
        prop="death"
        sortable
        label="死亡"
      width="100px">
      </el-table-column>
    </el-table>
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'PartFour',
    data() {
      return {
        multipleSelection: [],
        total: 40,
        pagesize: 8,
        currentPage: 1,
        tableData: [{
          province: '湖北',
          new_ip: 227,
          now_ip: 1763,
          cure: 50313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 17523,
          cure: 503113,
          death: 30523
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503135,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503513,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 50313,
          death: 34053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 505313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 17523,
          cure: 50313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503413,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 50313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 50313,
          death: 30553
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 505313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 17523,
          cure: 503113,
          death: 30523
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503135,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503513,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 50313,
          death: 34053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 505313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 17523,
          cure: 50313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 17523,
          cure: 503113,
          death: 30523
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503135,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503513,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 50313,
          death: 34053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 505313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 17523,
          cure: 50313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 17523,
          cure: 503113,
          death: 30523
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503135,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503513,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 50313,
          death: 34053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 505313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 17523,
          cure: 50313,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503513,
          death: 3053
        }, {
          province: '湖北',
          new_ip: 7,
          now_ip: 1723,
          cure: 503143,
          death: 3053
        }]
      }
    },
    methods: {
      current_change: function(currentPage) {
        this.currentPage = currentPage
      }
    }
  }
</script>

<style scoped>

</style>
