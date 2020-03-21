<template>
  <header class="navbar-header">
    <div
      class="container d-flex justify-content-between h-100 align-items-center"
    >
      <router-link to="/" class="logo-link">
        <img src="../assets/images/logo_white.png" alt="logo" />
      </router-link>
      <div class="menus d-flex justify-content-around h-100 align-items-center">
        <router-link v-for="(item, i) in menus" :key="i" :to="item.path">
          {{ item.name }}
        </router-link>
        <div
          class="admin-menus justify-content-center cursor-pointer d-flex align-items-center h-100"
        >
          <icon type="user" />
          <ul class="sub-menus">
            <li class="menu-item d-flex align-items-center" @click="login">
              <icon
                type="login"
                class="mr-2"
                style="width: 16px; height: 16px;"
              />
              <span class="text">用户登录</span>
            </li>
            <li class="menu-item d-flex align-items-center" @click="adminLogin">
              <icon
                type="admin"
                class="mr-2"
                style="width: 16px; height: 16px;"
              />
              <span class="text">管理员登录</span>
            </li>
          </ul>
        </div>
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
        }
      ]
    }
  },
  methods: {
    login() {
      alert('功能暂未开通，目前仅支持管理员登录')
    },
    adminLogin() {
      console.log(process.env, 'process.env')
      window.location.href = `${process.env.VUE_APP_ADMIN_PERFIX}`
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

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
.navbar-header {
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
        color: #7ac9cc;
      }
      transition: color 0.2s;
    }
    .admin-menus {
      position: relative;
      width: 100px;
      &:hover {
        .sub-menus {
          display: block;
        }
      }
      .sub-menus {
        display: none;
        padding: 6px;
        width: 130px;
        position: absolute;
        top: 60px;
        left: 0px;
        border-radius: 5px 5px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: #fff;
        .menu-item {
          cursor: pointer;
          height: 30px;
          line-height: 30px;
          color: $text-color;
          .text {
            font-size: 14px;
          }
          &:hover {
            color: $heading-color;
          }
        }
      }
    }
  }
}
</style>
