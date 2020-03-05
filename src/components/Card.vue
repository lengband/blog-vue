<template>
  <div class="card">
    <article>
      <div class="cover">
        <img itemprop="image" :src="post.cover" :alt="post.name" />
        <div class="date-info">
          <span class="day">{{ time.day }}</span>
          <span class="month mt-1">{{ time.month }}月</span>
        </div>
        <a @click="titleClick(post)" class="link-wrapper">
          <icon type="enter" color="rgba(30,200,252,.9)" />
        </a>
      </div>
      <div class="post-inner p-3">
        <div class="post-title" @click="titleClick(post)">{{ post.name }}</div>
        <div class="author d-flex flex-row-reverse mr-3">
          <a :href="post.author_url">{{ post.author }}</a>
        </div>
        <div class="post-content text-truncate-mutiple-2 mb-4 mt-2">
          {{ post.introduce }}
        </div>
        <div class="tags">
          <icon type="tag" class="mr-2" />
          <span class="tag-text">{{ tags }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'

export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    time() {
      const timeRes = this.post.released_time || this.post.updatedAt
      const obj = {
        month: '-',
        day: '-'
      }
      if (timeRes) {
        const time = moment(timeRes)
        obj.month = time.get('month') + 1
        obj.day = time.get('date')
      }
      return obj
    },
    tags() {
      if (_.isArray(this.post.tags)) {
        return this.post.tags.map(v => v.cn_name).join('，')
      }
      return ''
    }
  },
  methods: {
    titleClick(post) {
      this.$emit('titleClick', post)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_variables';

.card {
  width: 280px;
  height: 350px;
  &:hover {
    .cover::before {
      background-color: rgba(30, 200, 252, 0.7);
    }
    .cover .link-wrapper {
      transform: translate(-50%, -50%) rotateZ(365deg) scale(1);
      opacity: 1;
    }
  }
  .cover {
    position: relative;
    height: 160px;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: transparent;
      transition: background 0.3s;
    }
    img {
      width: 100%;
      height: 160px;
      background-size: contain;
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
    .link-wrapper {
      cursor: pointer;
      transition: transform 0.3s, opacity 0.3s;
      transform: translate(-50%, -50%) rotateZ(0) scale(0.5);
      opacity: 0;
      text-align: center;
      line-height: 28px;
      width: 28px;
      height: 28px;
      border-radius: 50% 50%;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 3;
      &:hover {
        svg {
          color: #0e627b;
        }
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
      line-height: 26px;
      height: 52px;
    }
    .tags {
      font-size: 12px;
      text-align: left;
    }
  }
}
</style>
