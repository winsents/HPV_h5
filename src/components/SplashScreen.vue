<!-- src/components/SplashScreen.vue -->
<template>
  <div class="splash-screen">
<!--    <div class="bg_title"></div>-->
<!--    <div class="loader">-->
<!--      <div class="loader_bar">-->
<!--        <div class="loader_bar_content" style="width: 0%;" :style="{'width':value+'%'}"></div>-->
<!--      </div>-->
<!--      <div class="loader_text">{{value}}%</div>-->
<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'SplashScreen',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  setup() {

    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  //align-items: center;
  justify-content: center;
  z-index: 999;
  //background-size: cover;
  //background-position: center;
  //background-repeat: no-repeat;
  //background-image: url("@/assets/bg.png");
  //
  //&:before {
  //  content: '';
  //  position: fixed;
  //  top: 0.45rem;
  //  right: 0.45rem;
  //  width: 1.44rem;
  //  height: 0.3rem;
  //  background-repeat: no-repeat;
  //  background-size: 100% 100%;
  //  background-image: url("@/assets/logo_1.png");
  //}
  //
  //&:after{
  //  content: '';
  //  position: absolute;
  //  top: 0.3rem;
  //  left: 0.45rem;
  //  width: 0.56rem;
  //  height: 0.51rem;
  //  background-repeat: no-repeat;
  //  background-size: 100% 100%;
  //  background-image: url("@/assets/logo.png");
  //
  //}
}

.loader {
  left: 50%;
  bottom: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  position: absolute;
  &_bar {
    width: 5rem;
    height: 0.2rem;
    overflow: hidden;
    border-radius: 0.155rem;
    background-color: #fff;
    transition: width 1s;

    &_content {
      height: 100%;
      background-color: #03CED4;
    }
  }
  &_text{
    font-size: 0.35rem;
    color: #fff;
    min-width: 1rem;
    margin-left: 0.1rem;
    text-align: center;
  }
}
</style>
