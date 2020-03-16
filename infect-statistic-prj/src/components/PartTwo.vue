<template>
  <el-card id="CardTwo">
    <LineCharts id="LineChart"></LineCharts>
    <Trend id="Trend"></Trend>
  </el-card>
</template>

<script>
  import LineCharts from '../components/LineCharts'
  import Trend from '../components/Trend'
  export default {
    name: 'PartTwo',
    components: {
      Trend,
      LineCharts
    }
  }
</script>

<style scoped>
  #Trend{
    float: left;
    margin-left: 680px;
    margin-top: -250px;
  }
  #LineChart{
    margin-top: 30px;
  }

</style>
