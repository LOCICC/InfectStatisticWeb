<template>
  <div id="app">
    <PartOne id="partOne"></PartOne>
    <div id="PartTwoAndThree">
      <PartTwo id="partTwo"></PartTwo>
      <PartThree id="partThree"></PartThree>
    </div>
    <PartFour id="partFour"></PartFour>
  </div>
</template>

<script>
import PartOne from './components/PartOne'
import PartTwo from './components/PartTwo'
import PartThree from './components/PartThree'
import PartFour from './components/PartFour'
import Trend from './components/Trend'
export default {
  components: {
    Trend,
    PartOne,
    PartTwo,
    PartThree,
    PartFour
  },
  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color:#f6f6f6')
}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
#partOne {
  width: 1370px;
  height: 678px;
  margin:0 auto;
}

#PartTwoAndThree {
  width: 1370px;
  height: 479px;
  margin:20px auto;
}
  #partTwo{
    width: 873px;
    height: 479px;
    margin: 0;
  }
  #partThree{
    width: 477px;
    height: 479px;
    margin-top: -479px;
    margin-left: 893px;
  }
  #partFour{
    width: 1370px;
    height: 672px;
    margin:20px auto;
  }
</style>
