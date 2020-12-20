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
            <div @click="leave()" class="sign-out-leave">退出</div>
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
      <div class="middle-image">
        <img src="../../static/images/time.jpg" alt>
      </div>
      <div class="middle-content1">
        <p>关于环境管理</p>
        <span>
          本系统拥有众多管理功能，并且一向是IT引以为荣的经营理念。本系统出了可以管理学校的树种外，
          <br>还可以对花种，草种进行记录数据与管理，本系统的目标是实时监控郑州大学的美丽环境的数据，
          <br>并且能够对环境进行保护。
        </span>
      </div>
      <div class="middle-content2">
        <p>环境管理背景</p>
        <span>
          本系统的起源可以追溯到一个简单的概念：如今的地球环境已经遭到了严重的，不可逆转的破坏，
          <br>所以为了保护我们的环境，特此做出一个系统能够对我们校园的环境进行有效的管理与监控，用以
          <br>观察和保护我们校园的环境。
        </span>
        <p>
          在本系统的背后，我凭借一份对于保护环境的热情，希望能够把环境管理系统发扬光大并且带到
          <br>更高的层次当中，从校园到城市，从城市到祖国，从祖国到整个地球。我相信我们都有一颗保护
          <br>环境， 热爱生活的心。所以如果经过长年的发展与积极的号召肯定能够使得环境管理系统进行
          <br>到B期，C期甚至D期。
        </p>
      </div>
      <div class="middle-content3">
        <p>环境管理的使命</p>
        <span>
          本系统一向忠于本校的环境保护，以保护环境并且以让环境更好为目标，习大大说过：“绿水青山
          <br>就是金山银山。”我们渴望与大家共同进步，不断完善，并且在相互尊重的基础下做得更好!
        </span>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
import { webUrl } from "../../static/js/public.js";

export default {
  name: "aboutEnvironment",
  data() {
    return {
      name: localStorage.getItem("user_name"),
      signIn: localStorage.getItem("signIn"),
      token: localStorage.getItem("token")
    };
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
  }
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
.carouselBox {
  padding: 40px 0 40px 90px;
}
.footer-content-nation {
  position: relative;
  left: 300px;
  top: 10px;
  height: 100px;
  width: 130px;
  overflow: hidden;
  z-index: 10;
  color: white;
}
#china {
  background: #5fb878;
  text-align: left;
  padding: 0px 5px;
  padding-top: 5px;
}
.footer-content-nation-display {
  height: 0px;
  overflow: hidden;
  transition-delay: 100ms;
  transition: all 0.7s;
}
.footer-content-china,
.footer-content-hongkong {
  height: 30px;
  background: #5fb878;
  text-align: left;
  z-index: 10;
  padding: 0px 5px;
}
.footer-content-china-img {
  display: inline-block;
  width: 26px;
  height: 18px;
  background-image: url(../../static/images/icon.png);
  background-position: -127px -324px;
}
.footer-content-china-arrow {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-image: url(../../static/images/icon.png);
  background-position: -233px -414px;
  cursor: pointer;
}
.footer-content-hongkong-img {
  display: inline-block;
  width: 26px;
  height: 18px;
  background-image: url(../../static/images/icon.png);
  background-position: -159px -324px;
}
.middle-image img {
  width: 100%;
  height: 120%;
}
.middle-content1 p,
.middle-content2 p:first-of-type,
.middle-content3 p {
  font-size: 26px;
  margin-top: 60px;
}
.middle-content2 p:last-of-type {
  width: 602px;
  margin: 0 auto;
  text-align: left;
  margin-top: 20px;
}
.middle-content1 span,
.middle-content2 span,
.middle-content3 span {
  display: inline-block;
  margin-top: 20px;
  text-align: left;
}
hr {
  margin-top: 40px;
  background-color: black;
}
</style>