<template>
  <div class="banner">
    <navbar />
    <div class="container">
      <div class="title">LENGBAND BLOG</div>
      <hr class="title_hr" />
      <div class="desc">
        个人博客，用于分享一些在日常学习工作甚至于生活中遇到的一些比较有趣的东西。七荤八素，胡言乱语，望各位看官见谅。
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/layout/Navbar'

export default {
  name: 'Banner',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.banner {
  position: relative;
  background: center no-repeat;
  background-size: cover;
  background-image: url('../assets/images/banner-bg.jpg');
  height: 350px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(64, 84, 90, 0.6);
  }
  .container {
    position: relative;
    z-index: 1;
    .title_hr {
      margin: 20px auto;
      height: 4px;
      width: 160px;
      border: 0;
      color: #19abd6;
      background: #19abd6;
      background: linear-gradient(to right, #19abd6 35%, #3ac0e8 100%);
    }
    .title,
    .desc {
      color: #fff;
    }
    .title {
      margin: 0;
      font-size: 30px;
      font-weight: 700;
      line-height: 1.1;
    }
  }
}
</style>
