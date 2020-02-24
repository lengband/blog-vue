<template>
  <div class="input">
    <input class="search" type="text" :placeholder="placeholder" />
    <icon type="search" class="search-icon" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: '请输入关键字搜索'
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  .search {
    display: block;
    width: 100%;
    height: 44px;
    padding: 8px 46px 8px 20px;
    outline: 0;
    color: inherit;
    border: none;
    border-radius: 22px;
    background-color: rgba(164, 177, 191, 0.15);
    box-shadow: none;
    transition: box-shadow 0.3s;

    cursor: text;
    margin: 0em;
    font: 400 11px system-ui;
    text-align: start;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-rendering: auto;
    &:hover {
      box-shadow: inset 0 0 0 2px #3ac0e8;
    }
  }
  .search-icon {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    font-size: 18px;
    color: #3ac0e8;
    cursor: pointer;
  }
}
</style>
