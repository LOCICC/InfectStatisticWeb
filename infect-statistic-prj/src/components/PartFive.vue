<template>
  <el-card id="CardFive">
    <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item v-for="item in items" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>
  export default {
    name: 'PartFive',
    data() {
      return {
        items: ['乘坐公共交通工具时' + '\n' + '建议全程佩戴一次性使用医用口罩' + '\n' + '注意与他人保持距离。',
        '减少到人员密集的公共场所活动' + '\n' + '尤其是空气流动性差的地方' + '\n' + '' +
        '例如公共浴池、影院、网吧、 KTV、商场、车站、机场、码头等',
        '注意个人健康状况' + '\n' + '记得每天填写今日校园',
        '居室保持清洁，勤开窗，经常通风',
        '外出佩戴口罩' + '\n' + '外出前往公共场所、就医和乘坐公共交通工具时' + '\n' + '佩戴医用外科口罩或N95口罩',
        '准备常用物资' + '\n' + '家庭备置体温计、一次性口罩、家庭用的消毒用品等物资',
        '保持良好卫生和健康习惯' + '\n' + '家庭成员不共用毛巾' + '\n' + '保持家居、餐具清洁，勤晒衣被' + '\n',
        '多多运动，注意营养' + '\n' + '加强自身免疫力',
        '不要接触、购买和食用野生动物（即野味）' + '\n' + '尽量避免前往售卖活体动物（禽类、海产品、野生动物等）的市场' + '\n' + '禽、肉、蛋要充分煮熟后食用']
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    white-space: pre-line;
    font-size: 18px;
    opacity: 0.75;
    margin-top: 200px;
    line-height: 60px;
  }

  .el-carousel__item:nth-child(2n) {
  }

  .el-carousel__item:nth-child(2n+1) {
  }
</style>
