<template>
  <el-card id="CardOne">
      <Map></Map>
      <StatisticalChart id="StatisticalChart"></StatisticalChart>
  </el-card>
</template>

<script>
  import StatisticalChart from '../components/StatisticalChart'
  import Map from '../components/Map'
  export default {
    name: 'PartOne',
    components: {
      Map,
      StatisticalChart
    }
  }
</script>

<style scoped>
  #StatisticalChart{
    margin-top: -500px;
    margin-left: 770px;
  }
</style>
