<template>
  <div class="card">
    <article>
      <div class="cover">
        <img
          itemprop="image"
          src="http://blog.static.minfive.com/post/18-03-03/vue-router.jpg"
          alt="关于 Vue 的路由权限管理"
        />
        <div class="date-info">
          <span class="day">5</span>
          <span class="month mt-1">八月</span>
        </div>
      </div>
      <div class="post-inner p-3">
        <div class="post-title">关于 Vue 的路由权限管理</div>
        <div class="author d-flex flex-row-reverse mr-3 my-1">
          <a href="https://github.com/lengband">lengband</a>
        </div>
        <div class="post-content">
          曾经在工作上对 vue
          路由权限管理这方面有过研究，这几天又看到了几篇相关的文
        </div>
        <div class="tags">
          <icon type="tag" class="mr-2" />
          <span class="tag-text">产品，读书</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss">
@import '../styles/_variables';

.card {
  width: 280px;
  height: 350px;
  .cover {
    position: relative;
    height: 160px;
    img {
      width: 100%;
    }
    .date-info {
      position: absolute;
      top: 10px;
      right: 10px;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #fff;
      font-weight: 700;
      text-align: center;
      background-color: rgba(64, 84, 90, 0.7);
      line-height: 1;
      .day {
        font-size: 12px;
      }
      .month {
        font-size: 12px;
      }
    }
  }
  .post-inner {
    .post-title {
      color: #000;
      cursor: pointer;
      transition: color ease-in-out 0.2s;
      &:hover {
        color: $primary-color;
      }
    }
    .author {
      font-size: 14px;
      a {
        color: #19abd6;
      }
    }
    .post-content {
      font-size: 14px;
      height: 80px;
    }
    .tags {
      font-size: 12px;
      text-align: left;
    }
  }
}
</style>
