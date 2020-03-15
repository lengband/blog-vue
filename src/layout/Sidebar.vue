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
        <li class="type-list-item" v-for="item in types" :key="item._id">
          <a class="type-list-item-link" :href="`/${item.name}`">
            <span class="title">{{ item.cn_name }}</span>
            <span class="num">（{{ item.post_num }}）</span>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="block_title">最新文章</h3>
      <ul class="post-list">
        <li class="post-list-item my-2" v-for="item in posts" :key="item._id">
          <a class="post-list-item-link d-flex" :href="`/detail/${item._id}`">
            <div class="img">
              <img :src="item.cover" :alt="item.name" />
            </div>
            <div class="info pl-3">
              <div class="title text-truncate">
                {{ item.name }}
              </div>
              <div class="time">
                {{ (item.released_time || item.updatedAt) | timeFormat }}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="block_title">文章标签</h3>
      <ul class="tag-list d-flex flex-wrap">
        <li class="tag-list-item" v-for="item in tags" :key="item._id">
          <tag>{{ item.cn_name }}</tag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { api } from '@/lib/api'

export default {
  name: 'Sidebar',
  data() {
    return {
      types: [],
      tags: [],
      posts: []
    }
  },
  created() {
    this.fetchTags()
    this.fetchTypes()
    this.fetchPost()
  },
  methods: {
    async fetchTags() {
      const { url, method } = api.getTagList()
      const {
        data: { data }
      } = await this.$http({ url, method })
      this.tags = data
    },
    async fetchTypes() {
      const { url, method } = api.getTypeList()
      const {
        data: { data }
      } = await this.$http({ url, method })
      this.types = data
    },
    async fetchPost() {
      const { url, method } = api.getPostList()
      const {
        data: { data }
      } = await this.$http({ url, method, params: { released: true } })
      this.posts = data
    }
  }
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
      line-height: 40px;
      height: 40px;
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
    text-align: left;
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
        overflow: hidden;
        position: relative;
        display: block;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          height: 100%;
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
