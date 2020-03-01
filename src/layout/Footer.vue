<template>
  <footer class="footer">
    <div class="container d-flex">
      <div class="footer-items">
        <h3 class="footer-item_title">关于</h3>
        <div class="item_content">
          <p class="item__text">
            本站是基于Vue开发的个人博客，主要用于分享日常学习、生活及工作的一些心得体验
          </p>
          <ul class="footer__contact-info">
            <li class="contact-info__item d-flex align-items-center">
              <icon
                class="mr-2"
                type="address"
                :style="{ color: '#69747a', fontSize: '14px' }"
              />
              <span>Beijing, China</span>
            </li>
            <li class="contact-info__item d-flex align-items-center">
              <icon
                class="mr-2"
                type="email"
                :style="{ color: '#69747a', fontSize: '14px' }"
              />
              <span>lengband@163.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-links">
        <h3 class="footer-item_title">友情链接</h3>
        <ul>
          <li class="footer-item_link">
            <a href="https://jdc.jd.com/">JDC京东设计中心</a>
          </li>
          <li class="footer-item_link">
            <a href="https://aotu.io/">凹凸实验室</a>
          </li>
          <li class="footer-item_link">
            <a href="http://fex.baidu.com/">百度FEX</a>
          </li>
          <li class="footer-item_link">
            <a href="https://fed.taobao.org/">淘宝FED</a>
          </li>
          <li class="footer-item_link">
            <a href="https://tgideas.qq.com/">TGIdeas</a>
          </li>
        </ul>
      </div>
      <div class="footer-links">
        <h3 class="footer-item_title">构建工具</h3>
        <ul>
          <li class="footer-item_link">
            <a href="https://jdc.jd.com/">JDC京东设计中心</a>
          </li>
          <li class="footer-item_link">
            <a href="https://aotu.io/">凹凸实验室</a>
          </li>
          <li class="footer-item_link">
            <a href="http://fex.baidu.com/">百度FEX</a>
          </li>
          <li class="footer-item_link">
            <a href="https://fed.taobao.org/">淘宝FED</a>
          </li>
          <li class="footer-item_link">
            <a href="https://tgideas.qq.com/">TGIdeas</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterInfo'
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 0;
  background-color: #242f35;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  .footer-item_title {
    color: #a4b1bf;
    font-size: 18px;
    margin: 30px 0;
    text-transform: capitalize;
  }
  .footer-items {
    flex: 2;
    .item_content {
      font-size: 14px;
      .contact-info__item {
        line-height: 30px;
        height: 30px;
        font-size: 12px;
      }
    }
  }
  .footer-links {
    flex: 1;
    .footer-item_link {
      margin-bottom: 12px;
    }
    a {
      font-size: inherit;
      text-decoration: none;
      transition: color 0.3s;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
