<template>
  <div>
    <div v-for="(item,i) in items" :key="item" :class="sstt[i]" style="width: 80px;height: 65px">
      <p style="font-size: 17px;font-weight: bolder;height: 19px">{{item.title}}</p>
      <p style="font-weight: bolder;font-size: 24px;margin-top: -10px">{{item.data}}</p>
      <p style="font-size: 15px;font-weight: bolder;margin-top: -25px">昨日 {{item.data1}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BigData',
    data() {
      return {
        items: [
          {title: '现有确诊', data: 47560, data1: -2150},
          {title: '现有确诊', data: 47560, data1: -2150},
          {title: '现有确诊', data: 47560, data1: -2150},
          {title: '现有确诊', data: 47560, data1: -2150},
          {title: '现有确诊', data: 47560, data1: -2150},
          {title: '现有确诊', data: 47560, data1: -2150}
        ],
        sstt: [
          'ss1',
          'ss2',
          'ss3',
          'ss4',
          'ss5',
          'ss6'
        ]
      }
    }
  }
</script>

<style scoped>
  .ss1{
    margin-top: 50px;
    margin-left: 0px;
  }
  .ss2{
    margin-top: -82px;
    margin-left: 150px;
  }
  .ss3{
    margin-top:-82px;
    margin-left: 300px;
  }
  .ss4{
    margin-top:50px;
    margin-left: 0px;
  }
  .ss5{
    margin-top:-82px;
    margin-left: 150px;
  }
  .ss6{
    margin-top:-82px;
    margin-left: 300px;
  }

</style>
