<template>
  <div class="home">
    <banner />
    <div class="home-body container d-flex mt-5">
      <div style="flex: 1;">
        <card-list :posts="posts" @titleClick="titleClick" />
      </div>
      <sidebar />
    </div>
    <easy-go-top backgroundColor="rgb(25, 171, 214)" />
    <footer-info />
  </div>
</template>

<script>
import Banner from '@/layout/Banner'
import Sidebar from '@/layout/Sidebar'
import CardList from '@/components/CardList'
import { api } from '@/lib/api'
import FooterInfo from '@/layout/Footer'

export default {
  name: 'Home',
  components: {
    Banner,
    CardList,
    Sidebar,
    FooterInfo
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
    },
    titleClick(post) {
      this.$router.push(`/detail/${post._id}`)
    }
  }
}
</script>
