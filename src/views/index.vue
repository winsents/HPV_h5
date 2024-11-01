
<template>
  <div class="main-container">
    <div class="logo"></div>
    <div class="index-title"></div>
    <div class="close" @click="onCloseApp"></div>
    <div class="items">
<!--      <div class="item item-1" @click="onTo(1)"></div>-->
<!--      <div class="item item-2" @click="onTo(2)"></div>-->
<!--      <div class="item item-3" @click="onTo(3)"></div>-->
<!--      <div class="item item-4" @click="onTo(4)"></div>-->

      <div class="items-box">
        <div class="item item-1" @click="onTo(1)"></div>
        <div class="item item-2" @click="onTo(4)"></div>
        <div class="item item-3" @click="onTo(3)"></div>
        <div class="item item-4" @click="onTo(2)"></div>

      </div>

    </div>
    <van-popup v-model:show="item1Dialog.show" :style="{ height: '100%', width: '100%',maxWidth: 'unset' }" :close-on-click-overlay="false">
      <div class="popup">
        <div class="close_btn" @click="onClose"></div>

        <template v-if="item1Dialog.type === 1">
          <iframe src="http://127.0.0.1/ebook/#/" frameborder="0" style="width: 100%;height: 100%;"></iframe>
        </template>

        <template v-if="item1Dialog.type === 2">
          <PdfPlayer url="./file/hpv2.pdf"></PdfPlayer>
        </template>

        <template v-if="item1Dialog.type === 3 &&item1Dialog.url">
<!--          <video :src="item1Dialog.url" controls></video>-->
          <vue-plyr v-if="item1Dialog.url" :options="options">
            <video
            >
              <source
                  size="720"
                  :src="item1Dialog.url"
                  type="video/mp4"
              />
            </video>
          </vue-plyr>
        </template>
      </div>
    </van-popup>

    <van-popup v-model:show="screensaverDialog.show" :style="{ height: '100%', width: '100%',maxWidth: 'unset' }" :close-on-click-overlay="false">
      <div class="popup" @click="onCloseScreensaverDialog">
        <vue-plyr ref="plyr1" :options="options1">
          <video
              :src="screensaverDialog.url"
          >
          </video>
        </vue-plyr>
      </div>
    </van-popup>


  </div>
</template>

<script>
import {ref, onMounted, onUpdated, onUnmounted, reactive} from 'vue';
import api from "@/services/api";
import {showToast} from "vant";
import PdfPlayer from "@/components/PdfPlayer.vue";
import VuePlyr from '@skjnldsv/vue-plyr';

export default {
  name: 'IndexView',
  components: {PdfPlayer, VuePlyr},
  setup() {
    // 生命周期钩子
    onMounted(() => {
      console.log('组件已挂载');
      // 执行初始数据加载或其他操作
    });

    onUpdated(() => {
      console.log('组件已更新');
      // 执行组件更新后的操作
    });

    onUnmounted(() => {
      console.log('组件已卸载');
      // 执行清理操作
    });

    // 返回数据和方法供模板使用
    return {

    };
  },
  data() {
    return {
      item1Dialog:{
        show:false,
        type:null,// 1:网页 2:pptx 3:视频
        url:''
      },
      options: {
        controls: ['play', 'progress', 'current-time'],
        muted: false,
        autoplay: true,
        loop: {
          active: true,
        },
        speed: {
          selected: 1,
          options: [0.5, 1, 1.5, 2],
        },
      },
      options1: {
        controls: [],
        muted: false,
        autoplay: true,
        loop: {
          active: false,
        },
        speed: {
          selected: 1,
          options: [0.5, 1, 1.5, 2],
        },
      },
      idleTimeout: null,
      idleTime: 1000 * 60 * 5,// * 5, // 5分钟
      screensaverDialog:{
        show:false,
        urls:[
          './file/video_2.mp4',
          './file/video_1.mp4'
        ],
        url:null,
        currentIndex:0
      }
    };
  },
  mounted() {
    window.addEventListener('mousemove', this.resetIdleTimer);
    window.addEventListener('keydown', this.resetIdleTimer);
    window.addEventListener('click', this.resetIdleTimer);
    window.addEventListener('touchstart', this.resetIdleTimer);

    // 初始化计时器
    this.resetIdleTimer();
  },
  methods: {
    resetIdleTimer(){

      clearTimeout(this.idleTimeout); // 清除上次的计时器

      // 设置新的计时器
      this.idleTimeout = setTimeout(() => {
        this.onIdleFun();
      }, this.idleTime);
    },
    onIdleFun(){
      console.log('5分钟未操作');

      if (this.item1Dialog.show){
        this.onClose();
      }

      if (this.screensaverDialog.show){
        return;
      }

      this.screensaverDialog.show = true;
      this.screensaverDialog.url = '';
      this.$nextTick(() => {
        this.screensaverDialog.currentIndex = this.screensaverDialog.currentIndex === 0?1:0;
        this.screensaverDialog.url = this.screensaverDialog.urls[this.screensaverDialog.currentIndex];

        this.$nextTick(() => {
          this.$refs.plyr1.player.play();

          this.$refs.plyr1.player.on('ended', () => {
            this.$nextTick(() => {
              this.onVideoEnded();
            });
          });
        });
      });

    },
    onVideoEnded(){
      this.screensaverDialog.url = '';
      this.$nextTick(() => {

        this.screensaverDialog.currentIndex = this.screensaverDialog.currentIndex === 0?1:0;
        this.screensaverDialog.url = this.screensaverDialog.urls[this.screensaverDialog.currentIndex];

        this.$nextTick(() => {
          this.$refs.plyr1.player.play();
        });
      });
    },
    onCloseScreensaverDialog(e){

      this.screensaverDialog.url = '';

      this.$nextTick(() => {
        this.screensaverDialog.show = false;
      })

    },
    onTo(type){
      this.item1Dialog.show = true;
      switch (type) {
        case 1:
          this.item1Dialog.type = 1;
          break;
        case 2:
          this.item1Dialog.type = 2;
          break;
        case 3:
          this.item1Dialog.type = 3;
          this.item1Dialog.url = './file/video_2.mp4';
          break;
        case 4:
          this.item1Dialog.type = 3;
          this.item1Dialog.url = './file/video_1.mp4';
          break;
      }
    },
    onClose(){
      this.item1Dialog.show = false;
      this.item1Dialog.type = null;
      if (this.item1Dialog.type === 3){
        this.$refs.plyr.player.pause();
        this.item1Dialog = '';
        //销毁播放器
        this.$refs.plyr.destroy();

      }
    },
    onCloseApp(){
      if (window.electronAPI){
        window.electronAPI.closeWindow();
      }
    },
    base64ToFile(base64String, fileName,type){
      const byteString = atob(base64String.split(',')[1]);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const intArray = new Uint8Array(arrayBuffer);

      for (let i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
      }

      const blob = new Blob([intArray], { type: type?type:'image/png' });
      return new File([blob], fileName, { type: type?type:'image/png' });
    },
    debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
  }
};
</script>
<style lang="scss">
  .plyr{
    width: 100%;
    height: 100%;
  }
</style>
<style lang="scss" scoped>
/* 样式定义 */
.main-container{
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/bg.jpg");


  .logo{
    top: 0.5rem;
    left: 0.5rem;
    position: absolute;
    width: (3.65 / $baseRatio)*1rem;
    height: (0.96 / $baseRatio)*1rem;
    background-image: url("~@/assets/images/logo.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .index-title{
    top: 1rem;
    left: 55%;
    position: absolute;
    width: (13.40 / $baseRatio)*1rem;
    height: (8.85 / $baseRatio)*1rem;
    background-size: 100%;
    background-image: url("~@/assets/images/index-title.png");
    transform: translateX(-50%);
  }

  .close{
    bottom: 0rem;
    left: 0rem;
    position: fixed;
    width: 0.5rem;
    height: 0.5rem;
    z-index: 200;
    //background-color: #144CB4;
  }



  .items{
    top: 4.2rem;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    position: absolute;
    //overflow: hidden;
    //overflow-y: scroll;

    .items-box{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 0.5rem;
    }

    .item{
      width: (5.71 / $baseRatio)*1rem;
      height: (6.77 / $baseRatio)*1rem;
      //margin: 0.15rem auto;
      background-size: 100%;
      background-repeat: no-repeat;

      &.item-1{
        background-image: url("~@/assets/images/item1.png");
      }

      &.item-2{
        background-image: url("~@/assets/images/item2.png");
      }

      &.item-3{
        background-image: url("~@/assets/images/item3.png");
      }

      &.item-4{
        background-image: url("~@/assets/images/item4.png");
      }

    }
  }

  .popup{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background-color: #ffffff;

    .close_btn{
      bottom: 0.6rem;
      right: 0.6rem;
      position: absolute;
      cursor: pointer;
      width: 0.5rem;
      height: 0.5rem;
      z-index: 10005;
      border-radius: 50%;
      transform: rotate(45deg);
      box-shadow: 0 0 0.5rem rgba(62, 141, 130, 0.8);
      background: linear-gradient(to right bottom, #FEFCA1, #A0ECC9);


      .bg{
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        z-index: 0;
        position: absolute;
        border-radius: 50%;
        background-color: #499C8D;
      }
      &:before{
        top: 50%;
        left: 50%;
        width: 70%;
        height: 3px;
        content: '';
        z-index: 1;
        position: absolute;
        background-color: #ffffff;
        transform: translate3d(-50%, -50%, 0);
      }
      &:after {
        top: 50%;
        left: 50%;
        width: 3px;
        height: 70%;
        content: '';
        z-index: 1;
        position: absolute;
        background-color: #ffffff;
        transform: translate3d(-50%, -50%, 0);
      }
    }

    iframe{
      width: 100%;
      height: 100%;
    }
  }

}
</style>
