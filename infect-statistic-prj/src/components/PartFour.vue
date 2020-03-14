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
        label="新增确诊">
      </el-table-column>
      <el-table-column
        prop="now_ip"
        label="现有确诊">
      </el-table-column>
      <el-table-column
        prop="cure"
        label="治愈">
      </el-table-column>
      <el-table-column
        prop="death"
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
  import axios from 'axios'
  export default {
    name: 'PartFour',
    data() {
      return {
        multipleSelection: [],
        total: 50,
        pagesize: 8,
        currentPage: 1,
        tableData: dataOfProvinces
      }
    },
    methods: {
      current_change: function(currentPage) {
        this.currentPage = currentPage
      }
    },
    mounted () {
      axios.get('api/getData_bottom.php', {
        params: {
        }
      }).then(function(res) {
        var ajaxi = res.data.length
        var i0 = 0
        while (i0 < ajaxi) {
          // window.console.log(res.data[i0]['治愈'])
          var temp = {province: res.data[i0]['省份名'],
            new_ip: res.data[i0]['新增确诊'],
            now_ip: res.data[i0]['现有确诊'],
            cure: res.data[i0]['治愈'],
            death: res.data[i0]['死亡']
          }
          dataOfProvinces.push(temp)
          i0 += 1
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
  var dataOfProvinces = []
</script>

<style scoped>

</style>
