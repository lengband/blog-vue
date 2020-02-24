<template>
  <div class="card-list d-flex justify-content-between flex-wrap px-4">
    <card v-for="(item, i) in list" :key="i" class="mb-4" />
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'CardList',
  props: {
    list: {
      type: Array,
      default: () => [1, 2, 3, 4]
    }
  },
  components: {
    Card
  }
}
</script>

<style>
.card-list {
}
</style>
