<template>
  <div class="not-found" :style="{ backgroundImage: `url(${bgImg})` }">
    <navbar style="position: fixed; top: 0;" />
    <div class="error-container">
      <div class="error-container-main w-100">
        <h1 class="error-page__title">404</h1>
        <h2 class="error-page__subtitle">OOPS! THIS PAGE CANNOT BE FOUND!</h2>
        <p class="error-page__text">
          But we have lots of other pages for you to see.
        </p>
        <ul class="social d-flex justify-content-center align-items-center">
          <li class="social-item">
            <a
              href="https://github.com/lengband"
              target="_blank"
              title="github"
            >
              <icon
                type="github"
                color="#fff"
                style="width: 30px; height: 30px;"
              />
            </a>
          </li>
          <li class="social-item">
            <a
              href="https://github.com/lengband"
              target="_blank"
              title="github"
            >
              <icon
                type="email_circle"
                color="#fff"
                style="width: 25px; height: 25px;"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/layout/Navbar'

const bgImg = require('../assets/images/dog.jpg')

export default {
  name: 'NotFound',
  data() {
    return {
      bgImg
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  background: center no-repeat;
  background-size: cover;
  .error-container {
    display: flex;
    height: 100vh;
    width: 100%;
    text-align: center;
    align-items: center;
    background: linear-gradient(
      45deg,
      rgba(38, 44, 51, 0.8) 20%,
      rgba(0, 201, 255, 0.9) 100%
    );
    .error-page__title {
      color: rgba(0, 0, 0, 0.6);
      font-size: 180px;
      font-weight: 700;
    }
    .error-page__subtitle {
      color: #fff;
      font-size: 34px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .error-page__text {
      color: #fff;
    }
  }
  .social {
    .social-item {
      margin: 0 4px;
    }
  }
}
</style>
