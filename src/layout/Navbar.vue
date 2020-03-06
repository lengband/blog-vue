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
          path: '/archives'
        },
        {
          name: '作品',
          path: '/demos'
        },
        {
          name: '理财',
          path: '/money'
        },
        {
          name: '生活',
          path: '/life'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@keyframes navbarHeight {
  0% {
    height: 60px;
  }
  30% {
    height: 70px;
  }
  100% {
    height: 60px;
  }
}
.navbar {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(to right, transparent, transparent);
  // background-image: linear-gradient(to right, transparent, transparent);
  // background-color: transparent;
  height: 60px;
  z-index: 100;
  color: #fff;
  margin-bottom: 60px;
  &.navbar-top {
    // background-color: #19abd6;
    animation: navbarHeight 0.3s;
    background-image: linear-gradient(to right, #19abd6 35%, #3ac0e8 100%);
  }
  .logo-link {
    height: 40px;
    img {
      height: 100%;
    }
  }
  .menus {
    width: 300px;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      &:hover {
        color: #353866;
      }
      transition: color 0.2s;
    }
  }
}
</style>
