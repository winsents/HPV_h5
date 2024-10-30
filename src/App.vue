<template>
<!--  <div class="app">-->
    <SplashScreen v-if="showSplashScreen" :value="parseInt(loadingProgres.toFixed(0))" />
<!--    <transition v-else name="fade" mode="out-in">-->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
<!--        <keep-alive>-->
          <component :is="Component" />
<!--        </keep-alive>-->
      </transition>
    </router-view>
<!--    </transition>-->
<!--  </div>-->
</template>

<script>
import {ref, onMounted, computed} from 'vue';
import SplashScreen from "@/components/SplashScreen"
import router from "@/router";

import { loadingProgress } from '@/store/loadingProgress';
import useWxSDK from "@/utils/useWxSDK";
import {useStore} from "vuex";

export default {
  name: 'App',
  components: {
    SplashScreen
  },
  setup() {
    const showSplashScreen = ref(true);
    const loadingProgres = computed(() => loadingProgress.value);

    const store = useStore();

    const { isiOSWechat } = useWxSDK
    // 检测到是ios微信，则把入口页地址记录到store中
    if (isiOSWechat()) {
      const url = window.location.href.split('#')[0]
      store.commit('setSaveVisitUrl', url)
    }

    onMounted(() => {
      // 等待路由加载完毕
      router.isReady().then(() => {
        finish()
      });
    });

    //函数：完成
    const finish = () => {
      setTimeout(() => {
        showSplashScreen.value = false;
      }, 500); // 可以调整延迟时间以达到更好的效果
    };


    return {
      showSplashScreen,
      loadingProgres
    };
  },
}
</script>
<style lang="scss">
//@import "scss/css.scss";

html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
html{
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.app{
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}
.fade-enter-from,
.fade-leave-to {
  /*定义进入开始和离开结束的透明度为0*/
  opacity: 0;
}
.fade-leave-to {
  //transform: translateX(20px);
}
.fade-enter-to {
  //transform: translateX(-20px);
}
.fade-enter-to,
.fade-leave-from {
  /*定义进入结束和离开开始的透明度为1*/
  opacity: 1;
}
.fade-leave-active,.fade-enter-active {
  transition: all 0.2s ease-out;
}

:root{
  --van-cell-font-size: 0.28rem !important;
  --van-cell-label-font-size: 0.24rem !important;
  --van-cell-line-height: 0.5rem !important;
}

.van-cell__title{
  flex: 1 !important;
}

</style>
