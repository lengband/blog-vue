<template>
  <svg class="icon" aria-hidden="true" style="width: 20px; height: 20px;">
    <use :xlink:href="`#icon-${type}`" />
  </svg>
</template>

<script>
import { addScript } from '@/lib/utils'

addScript('//at.alicdn.com/t/font_1652447_8yzs12pfcby.js')

export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
