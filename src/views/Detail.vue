<template>
  <div class="text-left detail">
    <navbar class="navbar-top" />
    <main>
      <div class="home-body container d-flex mt-5">
        <div class="flex-fill pr-5">
          <article>
            <div class="post-cover w-100">
              <img :src="detail.cover" alt="文章封面" />
            </div>
            <header class="my-5">
              <h2 class="mb-3">{{ detail.name }}</h2>
              <ul class="mark-info d-flex">
                <li class="mark-item">
                  <icon type="writer" />
                  <span class="ml-2">{{ detail.author }}</span>
                </li>
                <li class="mark-item">
                  <icon type="time" />
                  <span class="ml-2">{{ time }}</span>
                </li>
                <li class="mark-item">
                  <icon type="tag" />
                  <span class="ml-2">{{ tags }}</span>
                </li>
                <li class="mark-item">
                  <icon type="view" />
                  <span class="ml-2">{{ detail.view_count }}</span>
                </li>
              </ul>
            </header>
            <div ref="contentRef" v-html="detail.content" />
          </article>
        </div>
        <sidebar />
      </div>
      <easy-go-top backgroundColor="rgb(25, 171, 214)" />
    </main>
    <footer-info />
  </div>
</template>

<script>
import moment from 'moment'
import Navbar from '@/layout/Navbar'
import Sidebar from '@/layout/Sidebar'
import FooterInfo from '@/layout/Footer'
import { api } from '@/lib/api'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import marked from 'marked'

const compiledMarkdown = value => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code, true).value
      } else {
        return hljs.highlightAuto(code).value
      }
    }
  })
  return marked(value || '', {
    sanitize: true
  })
}

export default {
  name: 'Detail',
  components: {
    Navbar,
    Sidebar,
    FooterInfo
  },
  data() {
    return {
      detail: {}
    }
  },
  computed: {
    tags() {
      if (this.detail.tags && this.detail.tags.length) {
        return this.detail.tags.map(v => v.name).join('，')
      }
      return ''
    },
    time() {
      const time = this.detail.released_time || this.detail.updatedAt
      if (time) return moment(time).format()
      return ''
    }
  },
  created() {
    this.fetchPostDetail()
  },
  mounted() {},
  methods: {
    async fetchPostDetail() {
      const { url, method } = api.getPostById(this.$route.params.id)
      const { data } = await this.$http({ url, method })
      this.detail = data
      this.detail.content = compiledMarkdown(data.content)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  main {
    padding-top: 60px;
  }
  .post-cover {
    img {
      width: 100%;
    }
  }
  .mark-info {
    .mark-item {
      margin: 0 16px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .introduce {
    margin-top: 60px;
  }
}
</style>

<style>
/* 代码块高亮 */
pre {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #383a42;
  background: #efefef;
}
/* 表格样式优化 https://www.imydl.tech/ty/70.html */
table {
  width: 100%;
  max-width: 65em;
  border: 1px solid #dedede;
  margin: 15px 0;
  border-collapse: collapse; /*使用单一线条的边框*/
  empty-cells: show; /*单元格无内容依旧绘制边框*/
}
table th,
table td {
  height: 35px;
  border: 1px solid #dedede;
  padding: 0 10px;
}
table th {
  font-weight: bold;
  text-align: center !important;
  background: rgba(158, 188, 226, 0.2);
}
table tbody tr:nth-child(2n) {
  background: rgba(158, 188, 226, 0.12);
}
table tr:hover {
  background: #efefef;
}
table th {
  white-space: nowrap; /*表头内容强制在一行显示*/
}
p img {
  max-width: 100%;
}
</style>
