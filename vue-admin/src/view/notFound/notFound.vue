<template>
  <div>
    <div class="notFound">
      <img src="../../assets/images/404.png" alt="" class="notFoundImg">
      <div class="des">{{$t('message.notFound')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notFound'
}
</script>

<style lang="scss" scoped>
.notFound{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  text-align: center;
  .notFoundImg{
    display: inline-block;
    margin-top: 100px;
  }
  .des{
    margin-top: 30px;
    font-size: 25px;
    color: #666;
  }
}
</style>
