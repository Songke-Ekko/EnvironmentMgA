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
      <div class="layui-col-md12 table-background"> 
        <div class="table-content layui-col-md11" style="margin-left: 50px;margin-top: 40px;">
          <table class="layui-hide" id="testReload" lay-filter="testReload"></table>
        </div>
      </div>
    </div>
</template>
<script>
import { webUrl } from "../../static/js/public.js";
export default {
    name: 'operationLog',
    data() {
        return {
            name: localStorage.getItem("user_name"),
            signIn: localStorage.getItem("signIn"),
            token: localStorage.getItem("token"),
            type: "",
        }
    },
    mounted() {
        var that = this
        layui.use(["laypage", "layer", "table"], function() {
          var table = layui.table;
          var laypage = layui.laypage, //分页
            table = layui.table, //表格
            form = layui.form;

        form.render(); //更新全部，解决动态渲染问题

        //执行一个 table 实例
        table.render({
          elem: "#testReload",
          height: 420,
          url: webUrl + "admin/getUserOp",
          page: true,
          limit: 10,
          toolbar: "default",
          cols: [
            [
              //表头
              { type: "checkbox",fixed: "true" },
              { field: 'studentNumber',fixed: "true",sort: true,title: "学号",align: "center"},
              { field: "name",title: "名字",align: "center"},
              { field: "time", title: "时间",sort: true,align: "center" },
              { field: "operation",title: "操作",sort: true,totalRow: true,align: "center"}
            ]
          ],
          id: 'testReload'
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
    },
    },
}
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
.table-background {
  height: 700px;
  background-image: url(../../static/images/背景.jpg);
  background-size: 100% 100%;
}
.demoTable{
  color: white;
}
</style>