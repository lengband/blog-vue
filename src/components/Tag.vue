<template>
  <div class="tag">
    <a :href="href" class="tag-link"><slot /></a>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    href: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  .tag-link {
    display: block;
    height: 34px;
    border: 2px solid #d8e5f3;
    border-radius: 34px;
    font-size: 12px;
    line-height: 22px;
    color: #242f35;
    padding: 4px 10px;
    text-decoration: none;
    transition: color 0.3s, border-color 0.3s;
    &:hover {
      color: #19abd6;
      border-color: #19abd6;
    }
  }
}
</style>
