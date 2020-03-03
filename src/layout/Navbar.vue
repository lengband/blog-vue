<template>
  <header class="navbar">
    <div class="container d-flex justify-content-between">
      <router-link to="/" class="logo-link">
        <img src="../assets/images/logo_white.png" alt="logo" />
      </router-link>
      <div class="menus d-flex justify-content-around">
        <router-link v-for="(item, i) in menus" :key="i" :to="item.path">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menus: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '归档',
          path: '/'
        },
        {
          name: '作品',
          path: '/'
        },
        {
          name: '生活',
          path: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  height: 90px;
  transition: height 0.3s;
  z-index: 100;
  color: #fff;
  .logo-link {
    height: 60px;
    img {
      height: 100%;
    }
  }
  .menus {
    width: 300px;
    a {
      color: #fff;
    }
  }
}
</style>
