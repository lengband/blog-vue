<template>
  <div class="card-list">
    <div class="d-flex flex-wrap px-4">
      <card
        v-for="(item, i) in posts"
        :post="item"
        :key="i"
        class="mb-4 mx-3"
        @titleClick="titleClick"
      />
    </div>
    <paginator
      v-model="currentPage"
      class="d-inline-block"
      :total="posts.length"
      :limit="12"
    />
  </div>
</template>

<script>
import Card from './Card'
import Paginator from './Paginator'

export default {
  name: 'CardList',
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  components: {
    Card,
    Paginator
  },
  methods: {
    titleClick(...args) {
      this.$emit('titleClick', ...args)
    }
  }
}
</script>

<style>
.card-list {
}
</style>
