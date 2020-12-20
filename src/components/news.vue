<template>
  <div>
    <div class="layui-col-md12 layui-row">
      <div class="layui-col-md12 header">
        <div class="layui-col-md4 slogan">
          <img src="../../static/images/草.png" class="header-glasses">
          请您爱护绿色，绿是生命之源
        </div>
        <ul class="header-ul">
          <li class="login" v-if="signIn == 0 || signIn == null">
            <router-link to="/login">
              <span class="member-name">您好，请登录</span>
            </router-link>
          </li>
          <li
            class="login login-username"
            v-if="signIn == 1"
            @mouseenter="signOut()"
            @mouseleave="noSignOut()"
          >
            <span class="member-name login-username-title">{{name}}</span>
          </li>
          <div class="sign-out" @mouseenter="signOut()" @mouseleave="noSignOut()">
            <div class="sign-out-leave" @click="leave()">退出</div>
            <div class="sign-out-editPsw"><router-link to="/editPsd">修改密码</router-link></div>
          </div>
          <li>
            <router-link to="/register">
              <span class="register">免费注册</span>
            </router-link>
          </li>
          <li>
            <router-link to="/helpCenter">
              <span class="register">服务中心</span>
            </router-link>
          </li>
          <li class="header-phone" @mouseenter="phoneErwei()" @mouseleave="noPhoneErwei()">
            <a href>
              <img src="../../static/images/手机.png" class="phone-icon">
            </a>
          </li>
          <li class="header-weixin" @mouseenter="weixinErwei()" @mouseleave="noWeixinErwei()">
            <a href>
              <img src="../assets/微信.png" class="weixin-icon">
            </a>
          </li>
        </ul>
      </div>
      <div class="phone-erwei" @mouseenter="phoneErwei()" @mouseleave="noPhoneErwei()">
        <img src="../../static/images/二维码.jpg" alt>
        <span class="telephoneVersion">环境管理A期手机版&nbsp;></span>
      </div>
      <div class="weixin-erwei" @mouseenter="weixinErwei()" @mouseleave="noWeixinErwei()">
        <img src="../../static/images/二维码.jpg" alt>
        <span>环境管理A期订阅号：i13938338016</span>
        <div class>
          扫一扫，
          <span class="subscriptionNumber">领取福利</span>
        </div>
      </div>
      <div class="layui-col-md12 top-content">
        <div class="layui-col-md5 protect">
          <img src="../assets/环境保护法.png" class="environment-icon">
          <span class="protectContent">PROTECT</span>
          <span class="lowercase">ENVIRONMENT</span>
        </div>
      </div>
      <div class="layui-col-md12 nav">环境管理A期</div>
    </div>
    <div class="layui-col-md12">
      <div class="layui-col-md8 middle-content">
        <div class="middle-content-title">
          <p id="middle-content-title-tip">热点要闻</p>
        </div>
        <i></i>
        <p>杭州斥资26亿打造全省第一垃圾处理“大胃王”</p>
        <i></i>
        <p>一图读懂2019年白洋淀污染防治大动作！</p>
        <i></i>
        <p>维尔利：正式组建企业集团并完成公司更名</p>
        <i></i>
        <p>突发！唐山市丰润区几十家水泥厂紧急停产！</p>
        <i></i>
        <p>57亿荆州水环境整治项目预中标结果揭晓</p>
        <i></i>
        <p>近34亿海口污水厂PPP项目面向全国征集合作单位</p>
        <i></i>
        <p>《政府工作报告》修改 生态环保方面补充了多项内容</p>
        <i></i>
        <p>国际案例 | 排污权还能交易？这不是在鼓励排污吗？！</p>
        <div class="layui-col-md4 layui-carousel carouselBox" id="test1">
          <div carousel-item>
            <img v-for="(item,index) in imgArray" :src="item" :key="index">
          </div>
        </div>
        <hr>
      </div>
      <div class="layui-col-md8 bottom-content">
        <div class="bottom-content-title">
          <p id="bottom-content-title-tip">郑州新闻</p>
        </div>
        <i></i>
        <p class="bottom-content-p">第四届河南环卫博览会3月4日将在郑州盛大召开</p>
        <i></i>
        <p>郑州市2018-2019年秋冬季工业企业错峰生产实施方案</p>
        <i></i>
        <p>立足智慧环保解决方案 雪城软件闪耀2018郑州环保展</p>
        <i></i>
        <p>斗艳2018郑州环保展 迪诺环保系列产品大放异彩</p>
        <i></i>
        <p>2018第三届中原经济区环保产业博览会在郑州隆重举行</p>
        <i></i>
        <p>2018第三届中原（郑州）环保展即将开幕</p>
        <i></i>
        <p>清洁取暖展亮相郑州，助力煤改电煤改气</p>
        <div class="henan">
          <div class="news-image">
            <span>新闻图片</span>
          </div>
          <img class src="../../static/images/16.jpg" alt>
          <p>周末河南持续晴暖 局地温度升至24℃</p>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
import { webUrl } from "../../static/js/public.js";

export default {
  name: "news",
  data() {
    return {
      imgArray: [
        "../../static/images/timg.jpg",
        "../../static/images/timg1.jpg",
        "../../static/images/timg2.jpg",
        "../../static/images/timg3.jpg"
      ],
      name: localStorage.getItem("user_name"),
      signIn: localStorage.getItem("signIn"),
      token: localStorage.getItem("token")
    };
  },
  mounted() {
    layui.use("carousel", function() {
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: "#test1",
        width: "420px",
        arrow: "hover"
      });
    });
  },
  methods: {
    phoneErwei() {
      $(".phone-erwei").css("height", 180);
      $(".phone-erwei").css("padding", 10);
      $(".phone-erwei").css("border", "1px solid #D9D9D9");
      $(".phone-erwei").css("border-top", "none");
      $(".header-phone").css("background-color", "white");
      $(".header-phone").css("box-shadow", "0 6px 8px 0px rgba(0, 0, 0, 0.15)");
    },
    noPhoneErwei() {
      $(".phone-erwei").css("height", 0);
      $(".phone-erwei").css("padding", 0);
      $(".phone-erwei").css("border", "none");
      $(".header-phone").css("background-color", "transparent");
      $(".header-phone").css("box-shadow", "none");
    },
    weixinErwei() {
      $(".weixin-erwei").css("height", 180);
      $(".weixin-erwei").css("padding", 10);
      $(".weixin-erwei").css("border", "1px solid #D9D9D9");
      $(".weixin-erwei").css("border-top", "none");
      $(".header-weixin").css("background-color", "white");
      $(".header-weixin").css(
        "box-shadow",
        "0 6px 8px 0px rgba(0, 0, 0, 0.15)"
      );
    },
    noWeixinErwei() {
      $(".weixin-erwei").css("height", 0);
      $(".weixin-erwei").css("padding", 0);
      $(".weixin-erwei").css("border", "none");
      $(".header-weixin").css("background-color", "transparent");
      $(".header-weixin").css("box-shadow", "none");
    },
    signOut() {
      $(".login-username").css("background-color", "white");
      $(".login-username").css(
        "box-shadow",
        "0 6px 8px 0px rgba(0, 0, 0, 0.15)"
      );
      $(".sign-out").css("height", 80);
    },
    noSignOut() {
      $(".login-username").css("background-color", "transparent");
      $(".login-username").css("box-shadow", "none");
      $(".sign-out").css("height", 0);
    },
    leave() {
      let that = this;
      that.$axios
        .post(webUrl + "admin/signOut", {
          name: that.name,
          token: that.token
        })
        .then(response => {
          if (response.data.status == 1) {
            localStorage.setItem("signIn", 0);

            layer.open({
              type: 1,
              title: false,
              anim: 1,
              closeBtn: false,
              time: 1500,
              area: "180px;",
              shade: 0.6,
              id: "LAY_layuipro",
              content:
                '<div style="padding: 20px 50px;text-align:center;">' +
                response.data.msg +
                "</div>"
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        })
        .catch(reject => {
          console.log(reject);
        });
    }
  },
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
a {
  color: white;
}
p {
  text-align: left;
  margin: 5px 0;
}
i {
  position: relative;
  top: 18px;
  left: 0;
  display: block;
  width: 5px;
  height: 5px;
  background: #da4453;
}
.header {
  height: 40px;
  background-color: #f4f4f4;
  margin-top: -7px;
}
.header-ul {
  height: 40px;
}
.nav {
  height: 40px;
  background-color: #393d49;
  color: white;
  line-height: 40px;
}
.header-glasses {
  margin-right: 5px;
  margin-top: -2px;
  width: 20px;
  height: 20px;
}
.slogan {
  font-size: 14px;
  color: #666;
  display: inline-block;
  margin: 10px;
  margin-left: 30px;
}
.login {
  margin-left: 280px;
}
.member-name {
  color: #3983e5;
  text-decoration: none;
}
.register {
  padding: 12px 0px;
  width: 92px;
  color: #666;
  text-align: center;
}
.register:hover {
  color: #3983e5;
}
.header-phone {
  margin: 0;
  width: 40px;
  height: 40px;
  position: relative;
  line-height: 40px;
  cursor: pointer;
}
.header-weixin {
  margin: 0;
  width: 40px;
  height: 40px;
  position: relative;
  line-height: 40px;
  cursor: pointer;
}
.weixin-icon {
  width: 20px;
  height: 20px;
}
.phone-icon {
  width: 20px;
  height: 20px;
}
.phone-erwei,
.weixin-erwei {
  position: absolute;
  top: 32px;
  width: 140px;
  height: 0;
  background: white;
  z-index: 10;
  overflow: hidden;
  box-shadow: 0 8px 12px 0px rgba(0, 0, 0, 0.15);
  border-top: none;
}
.phone-erwei {
  right: 116px;
}
.weixin-erwei {
  right: 72px;
}
.phone-erwei img,
.weixin-erwei img {
  width: 130px;
  height: 130px;
}
.login-username {
  width: 100px;
  height: 40px;
  top: -12px;
  position: relative;
  cursor: pointer;
}
.sign-out {
  position: absolute;
  width: 100px;
  background: white;
  right: 331px;
  top: 39px;
  height: 0px;
  overflow: hidden;
  line-height: 40px;
  z-index: 100;
  box-shadow: 0 8px 12px 0px rgba(0, 0, 0, 0.15);
  color: #3983e5;
  transition: all 0.5s;
  cursor: pointer;
}
.sign-out-leave:hover,
.sign-out-editPsw:hover{
  background-color: #ccc;
}
.sign-out-editPsw a{
  color: #3983e5;
}
.login-username-title {
  position: relative;
  top: 12px;
}
.telephoneVersion {
  display: inline-block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  background: #91bbf1;
  color: white;
  margin-top: 10px;
  font-size: 12px;
  cursor: pointer;
}
.subscriptionNumber {
  color: #ff6600;
  cursor: pointer;
}
.top-content {
  height: 80px;
}
.environment-icon {
  width: 64px;
  height: 64px;
}
.protectContent {
  font-size: 22px;
  border-bottom: 1px solid;
  padding-bottom: 2px;
}
.lowercase {
  position: relative;
  top: 24px;
  left: -108px;
  font-weight: 600;
}
.addressInformation {
  margin-left: 250px;
  margin-top: 20px;
  width: 400px;
}
.middle-content {
  margin-left: 200px;
}
.middle-content p {
  margin-left: 10px;
}
.middle-content p:first-of-type {
  font-size: 18px;
  color: black;
}
i:first-of-type {
  top: 20px;
}
.middle-content-title {
  width: 365px;
  border-bottom: 1px solid #ccc;
}
#middle-content-title-tip {
  font-size: 20px;
  color: #2f63ba;
  width: 120px;
  border-bottom: 2px solid #2f63ba;
  text-align: center;
  margin-bottom: 0px;
}
.carouselBox {
  margin-left: 400px;
  margin-top: -294px;
  width: 400px;
  height: 300px;
}
hr {
  margin-top: 40px;
  background-color: black;
}
.bottom-content {
  margin-left: 200px;
}
.bottom-content-title {
  border-bottom: 1px solid #ccc;
}
.bottom-content p {
  margin-left: 10px;
}
.bottom-content-p {
  font-size: 16px;
  color: black;
  font-weight: bold;
}
#bottom-content-title-tip {
  font-size: 20px;
  color: #2f63ba;
  width: 120px;
  border-bottom: 2px solid #2f63ba;
  text-align: center;
  margin-bottom: 0px;
}
.henan {
  width: 400px;
  margin-left: 400px;
  margin-top: -230px;
  text-align: left;
}
.news-image {
  margin-bottom: 10px;
}
.news-image span {
  font-size: 16px;
  color: #2f63ba;
  border-bottom: 2px solid #2f63ba;
}
</style>