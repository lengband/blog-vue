<template>
  <div class="sidebar">
    <Input />
    <div>
      <h3 class="block_title">简介</h3>
      <p class="text-muted desc_text">日常学习与兴趣交流的个人博客</p>
    </div>
    <div>
      <h3 class="block_title">文章分类</h3>
      <ul class="type-list">
        <li class="type-list-item">
          <a class="type-list-item-link" href="/">
            <span class="title">读书笔记</span>
            <span class="num">（2）</span>
          </a>
        </li>
        <li class="type-list-item">
          <a class="type-list-item-link" href="/">
            <span class="title">读书笔记</span>
            <span class="num">（2）</span>
          </a>
        </li>
        <li class="type-list-item">
          <a class="type-list-item-link" href="/">
            <span class="title">读书笔记</span>
            <span class="num">（2）</span>
          </a>
        </li>
        <li class="type-list-item">
          <a class="type-list-item-link" href="/">
            <span class="title">读书笔记</span>
            <span class="num">（2）</span>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="block_title">最新文章</h3>
      <ul class="post-list">
        <li class="post-list-item">
          <a class="post-list-item-link d-flex" href="/">
            <div class="img">
              <img
                src="http://blog.static.minfive.com/post/18-08-05/843d1948e85e20653861c115389cc7cf.jpg"
                alt="blog"
              />
            </div>
            <div class="info pl-2">
              <div class="title text-truncate">
                读《健康指导》总结ddddddddddddddd
              </div>
              <div class="time">2018年8月5日</div>
            </div>
          </a>
        </li>
        <li class="post-list-item">
          <a class="post-list-item-link d-flex" href="/">
            <div class="img">
              <img
                src="http://blog.static.minfive.com/post/18-08-05/843d1948e85e20653861c115389cc7cf.jpg"
                alt="blog"
              />
            </div>
            <div class="info pl-2">
              <div class="title text-truncate">
                读《健康指导》总结ddddddddddddddd
              </div>
              <div class="time">2018年8月5日</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="block_title">文章标签</h3>
      <ul class="tag-list d-flex flex-wrap">
        <li class="tag-list-item"><tag>css</tag></li>
        <li class="tag-list-item"><tag>html</tag></li>
        <li class="tag-list-item"><tag>html</tag></li>
        <li class="tag-list-item"><tag>html</tag></li>
        <li class="tag-list-item"><tag>html</tag></li>
        <li class="tag-list-item"><tag>html</tag></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

.sidebar {
  width: 260px;
  .desc_text {
    font-size: 14px;
    text-align: left;
    padding-left: 16px;
  }
  .type-list {
    text-align: left;
    margin-top: 30px;
    padding-left: 16px;
    width: 100%;
    color: #242f35;
    .type-list-item {
      width: 100%;
      border-bottom: 1px dotted #d8e5f3;
      line-height: 30px;
      height: 30px;
      &:last-child {
        border: 0;
      }
      .type-list-item-link {
        font-size: 14px;
        line-height: 24px;
        text-decoration: none;
        transition: color 0.3s;
        color: #242f35;
        &:hover {
          .title {
            color: $primary-color;
          }
        }
        .num {
          color: $primary-color;
        }
        .img {
          width: 80px;
          height: 60px;
          img {
            width: 100%;
          }
        }
        .info {
          width: calc(100% - 80px);
          .time {
            font-size: 12px;
          }
        }
      }
    }
  }
  .post-list {
    .post-list-item-link {
      font-size: 14px;
      line-height: 24px;
      text-decoration: none;
      transition: color 0.3s;
      color: #242f35;
      &:hover {
        .title {
          color: $primary-color;
        }
      }
      .num {
        color: $primary-color;
      }
      .img {
        width: 80px;
        height: 60px;
        img {
          width: 100%;
        }
      }
      .info {
        width: calc(100% - 80px);
        .time {
          font-size: 12px;
        }
      }
    }
  }
  .tag-list {
    .tag-list-item {
      margin-left: 8px;
      margin-bottom: 4px;
    }
  }
}
</style>
