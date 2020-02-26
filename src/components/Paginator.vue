<template>
  <div class="paginator">
    <ul class="paginator-list d-flex" v-if="totalPage > 1">
      <li
        class="paginator-list-item"
        v-if="!isFirstPage"
        @click="setPage(value - 1)"
      >
        <span>&lt;</span>
      </li>
      <li
        class="paginator-list-item"
        v-for="(item, i) in totalPage"
        :class="{ active: i + 1 === value }"
        :key="i"
        @click="setPage(i + 1)"
      >
        <span>{{ i + 1 }}</span>
      </li>
      <li
        class="paginator-list-item"
        @click="setPage(value + 1)"
        v-if="total && !isLastPage"
      >
        <span>&gt;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: {
    total: {
      type: Number,
      required: true
    },
    value: {
      // 当前页码
      type: Number,
      required: true
    },
    limit: {
      // 每页大小
      type: Number,
      default: 10
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.limit)
    },
    isFirstPage() {
      return this.value === 1
    },
    isLastPage() {
      return this.value === this.totalPage
    }
  },
  methods: {
    setPage(page) {
      this.$emit('input', page)
    }
  }
}
</script>

<style lang="scss" scoped>
.paginator {
  text-align: center;
  .paginator-list {
    .paginator-list-item {
      height: 32px;
      width: 32px;
      text-align: center;
      line-height: 32px;
      color: #40545a;
      margin-left: 5px;
      &:first-child {
        margin-left: 0px;
      }
    }
    .paginator-list-item:not(.active) {
      cursor: pointer;
      border-radius: 50%;
      overflow: hidden;
      background-color: #d8e5f3;
      text-decoration: none;
      transition: background 0.3s;
      &:hover {
        background-color: #8ab1db;
      }
    }
  }
}
</style>
