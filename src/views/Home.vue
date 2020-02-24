<template>
  <div class="home">
    <banner />
    <div class="home-body container d-flex mt-5">
      <div style="flex: 1;">
        <card-list />
      </div>
      <sidebar />
    </div>
  </div>
</template>

<script>
import Banner from '@/layout/Banner'
import Sidebar from '@/layout/Sidebar'
import CardList from '@/components/CardList'

export default {
  name: 'Home',
  components: {
    Banner,
    CardList,
    Sidebar
  }
}
</script>
