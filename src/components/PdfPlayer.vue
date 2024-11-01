<template>
  <div class="pdf-view">
    <div class="logo"></div>
    <div class="pdf-title"></div>
    <div class="bottom_bg"></div>

    <div id="pdf-container" class="pdf-container">
      <swiper
          ref="swiperRef"
          :slides-per-view="1"
          pagination
          :space-between="10"
          @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(page, index) in pages" :key="index">
          <canvas :ref="`pdfCanvas${index}`"></canvas>
        </swiper-slide>
      </swiper>
    </div>
    <div class="pdf-view_nav">
      <div class="btn btn-left" @click="goToPreviousPage"></div>
      <div class="btn btn-center">
        {{ currentPage }}/{{ maxPage }}
      </div>
      <div class="btn btn-right" @click="goToNextPage"></div>
    </div>
<!--    <div class="pdf-view_close" @click="close()">-->
<!--      <div class="bg"></div>-->
<!--    </div>-->
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';

import * as pdfjsLib from 'pdfjs-dist';
// pdfjsLib.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}js/pdf.worker.js`;
// pdfjsLib.GlobalWorkerOptions.workerSrc = require('@/utils/pdf.worker.js');
// pdfjsLib.GlobalWorkerOptions.workerSrc = '/node_modules/pdfjs-dist/build/pdf.worker.min.js';
pdfjsLib.GlobalWorkerOptions.workerSrc = './js/pdf.worker.min.js';

export default {
  name: "PdfPlayer",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pdf: null,       // PDF 文档对象
      pages: [],        // PDF 每页的页面对象
      currentPage: 1,   // 当前页码
      maxPage: 0        // 总页数
    }
  },
  mounted() {
    this.loadPdf();
  },
  methods: {
    loadPdf() {
      // 获取 PDF 文档
      const loadingTask = pdfjsLib.getDocument(this.url);

      loadingTask.promise
          .then(pdf => {
            this.pdf = pdf;
            this.maxPage = pdf.numPages;
            this.pages = Array.from({ length: pdf.numPages }, (_, i) => i + 1);
            this.renderAllPages();
          })
          .catch(error => {
            console.error('Error loading PDF:', error);
          });
    },
    renderAllPages() {
      // 为每个页面创建渲染 Promise 并存储在数组中
      const renderPagePromises = this.pages.map((pageNumber, index) => {
        return this.renderPage(pageNumber, index);
      });

      // 等待所有页面渲染完毕
      Promise.all(renderPagePromises)
          .then(() => {
            console.log('All pages rendered successfully');
          })
          .catch(error => {
            console.error('Error rendering pages:', error);
          });
    },
    renderPage(pageNumber, index) {
      // 获取并渲染指定页面
      return this.pdf.getPage(pageNumber)
          .then(page => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });

            const canvas = this.$refs[`pdfCanvas${index}`][0];
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = {
              canvasContext: context,
              viewport: viewport
            };

            return page.render(renderContext).promise; // 返回渲染 Promise
          })
          .catch(error => {
            console.error(`Error rendering page ${pageNumber}:`, error);
          });
    },
    onSlideChange(e) {
      // 获取 Swiper 当前页索引并更新 currentPage
      this.currentPage = e.activeIndex + 1;
    },
    goToNextPage() {
      // Swiper 实例的 slideNext() 方法，切换到下一页
      this.$refs.swiperRef.$el.swiper.slideNext();
    },
    goToPreviousPage() {
      // Swiper 实例的 slidePrev() 方法，切换到上一页
      this.$refs.swiperRef.$el.swiper.slidePrev();
    },
  }
}
</script>

<style lang="scss" scoped>
.pdf-view {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/bg.jpg");

  display: flex;
  flex-direction: column;
  justify-content: center;


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

  .pdf-title{
    margin: 0 auto 0 auto;
    width: (7.69 / $baseRatio)*1rem;
    height: (1.37 / $baseRatio)*1rem;
    background-size: 100%;
    background-image: url("~@/assets/images/pdf-title.png");
  }

  .bottom_bg{
    bottom: 0;
    right: 0;
    position: absolute;
    width: (5.87 / $baseRatio)*1rem;
    height: (3.9 / $baseRatio)*1rem;
    background-image: url("~@/assets/images/pdf_bottom.png");
    background-size: 100%;
  }

  .pdf-view_nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 3rem;
    height: 1.5rem;
    margin: 0 auto;

    & .btn{
      width: (0.85 / $baseRatio)*1rem;
      height: (0.95 / $baseRatio)*1rem;
      background-size: 100%;
      cursor: pointer;
    }
    & .btn-left{
      background-image: url("~@/assets/images/btn-left.png");
    }
    & .btn-center{
      font-size: 0.5rem;
      font-weight: bold;
      color: #118181;
    }
    & .btn-right{
      background-image: url("~@/assets/images/btn-right.png");
    }
  }


  & .pdf-container {
    display: flex;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
    margin-top: 0.5rem;

    /* 适配 Swiper */
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    canvas {
      border: 1px solid #FB1CFE;
      width: 100%;
      box-sizing: border-box;
      height: auto;
    }
  }
  &_close {
    top: 0.6rem;
    right: 0.6rem;
    position: absolute;
    cursor: pointer;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    transform: rotate(45deg);
    box-shadow: 0 0 0.5rem rgba(62, 141, 130, 0.8);
    background: linear-gradient(to right bottom, #FEFCA1, #A0ECC9);
    & .bg {
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      z-index: 0;
      position: absolute;
      border-radius: 50%;
      background-color: #499C8D;
    }
    &:before {
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
}
</style>
