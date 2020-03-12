<template>
  <el-card id="CardOne">
      <Map></Map>
      <StatisticalChart id="StatisticalChart"></StatisticalChart>
    <BigData id="bigData"></BigData>
  </el-card>
</template>

<script>
  import StatisticalChart from '../components/StatisticalChart'
  import Map from '../components/Map'
  import BigData from '../components/BigData'
  export default {
    name: 'PartOne',
    components: {
      Map,
      StatisticalChart,
      BigData
    }
  }
</script>

<style scoped>
  #StatisticalChart{
    margin-top: -500px;
    margin-left: 770px;
  }
  #bigData{
    width: 500px;
    height: 200px;
    margin-top: -570px;
    margin-left: 800px;
  }
</style>
