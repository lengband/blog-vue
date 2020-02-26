<template>
  <div class="home">
    <banner />
    <div class="home-body container d-flex mt-5">
      <div style="flex: 1;">
        <card-list :posts="posts" />
      </div>
      <sidebar :posts="posts" />
    </div>
  </div>
</template>

<script>
import Banner from '@/layout/Banner'
import Sidebar from '@/layout/Sidebar'
import CardList from '@/components/CardList'
import { api } from '@/lib/api'

export default {
  name: 'Home',
  components: {
    Banner,
    CardList,
    Sidebar
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.fetchPost()
  },
  methods: {
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
