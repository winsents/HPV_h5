<!--<script setup>-->
<!--// &lt;!&ndash;  // 定义 emit 用于触发自定义事件&ndash;&gt;-->

<!--</script>-->

<template>
  <div class="navbar">
    <div v-if="showBack" class="back" @click.once="onBack"></div>
    <div class="navbar_content">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    emits: ['onBack'],
    setup() {

      return {

      };
    },
    data() {
      return {

      };
    },
    props: {
      title: {
        type: String,
        default: '首页'
      },
      showBack: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onBack(){
       let obj = {
          back: false
       }
        this.$emit('onBack', obj);
        if (obj.back) return;
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="scss">
  .navbar{
    width: 100%;
    display: flex;
    height: 1.18rem;
    color: #144CB4;
    font-size: 0.35rem;
    justify-content: center;
    padding: 0.1rem 0 0.1rem 0;
    align-items: center;
    box-sizing: border-box;
    background-color: #F2F2F2;
    position: relative;
    //使用伪元素创建一个0.5px的下边框
    &:before{
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      border-bottom: 0.5px solid #E0E0E0;
    }

    &_content{
      position: relative;
    }

    .back{
      width: 0.8rem;
      height: 0.8rem;
      box-sizing: border-box;
      background-size: 0.4rem;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      left: 0.2rem;
    }
  }
</style>
