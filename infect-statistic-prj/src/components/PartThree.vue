<template>
  <el-card id="CardThree">
    <h3>- 疫情焦点 -</h3>
    <div id="Title">
        <h4 v-for="(tab,i) in tabs" :key="tab" :class="sstt[i]">
          {{ tab.text }}
        </h4>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'PartThree',
    data() {
      return {
        tabs: [
          {text: '新冠肺炎实时动态'},
          {text: '住华南海鲜市场43天未感染'},
          {text: '武汉14家方舱医院全部休舱'},
          {text: '韩国首尔办公楼27人集体感染'},
          {text: '满足三个条件可以开学'},
          {text: '意大利对全国采取封闭措施'},
          {text: '中国向世卫组织捐献2000万美元'},
          {text: '潜江将成湖北首个恢复秩序的地级市'}
        ],
        sstt: [
          'ss1',
          'ss2',
          'ss3',
          'ss4'
        ]
      }
    }
  }
</script>

<style scoped>
#Title{
  margin-left: 70px;
  text-align: left;
}
.ss1{
  color: rgb(241, 70, 73);
}
.ss2{
  color: rgb(255, 103, 16);
}
.ss3 {
  color: rgb(249, 182, 49);
}
</style>
