<template>
  <div class="hello">
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
          <li class="login login-username" v-if="signIn == 1" @mouseenter="signOut()" @mouseleave="noSignOut()">
              <span class="member-name login-username-title">{{name}}</span>
          </li>
          <div class="sign-out" @mouseenter="signOut()" @mouseleave="noSignOut()">
            <div class="sign-out-leave" @click="leave()">退出</div>
            <div class="sign-out-editPsw"><router-link to="/">返回主页</router-link></div>
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
            <a href="">
              <img src="../../static/images/手机.png" class="phone-icon">
            </a>
          </li>
          <li class="header-weixin" @mouseenter="weixinErwei()" @mouseleave="noWeixinErwei()">
            <a href="">
              <img src="../assets/微信.png" class="weixin-icon">
            </a>
          </li>
        </ul>
      </div>
      <div class="phone-erwei" @mouseenter="phoneErwei()" @mouseleave="noPhoneErwei()">
        <img src="../../static/images/二维码.jpg" alt="">
        <span class="telephoneVersion">环境管理A期手机版&nbsp;></span>
      </div>
      <div class="weixin-erwei" @mouseenter="weixinErwei()" @mouseleave="noWeixinErwei()">
        <img src="../../static/images/二维码.jpg" alt="">
        <span>环境管理A期订阅号：i13938338016</span>
        <div class="">扫一扫，<span class="subscriptionNumber">领取福利</span></div>
      </div>
      <div class="layui-col-md12 top-content">
        <div class="layui-col-md5 protect">
          <img src="../assets/环境保护法.png" class="environment-icon">
          <span class="protectContent">PROTECT</span>
          <span class="lowercase">ENVIRONMENT</span>
        </div> 
      </div>
      <div class="layui-col-md12 nav">
        环境管理A期
      </div>
    </div>
    <div class="middle-content">
      <img src="../assets/16.jpg" alt="" class="middle-content-img">
      <div class="layui-form middle-content-form">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名：</label>
          <div class="layui-input-block">
            <input type="text" name="username" v-model="username" required  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">新密码：</label>
          <div class="layui-input-block">
            <input type="password" name="password" v-model="newPassword" required  lay-verify="required" placeholder="请输入新密码" autocomplete="off" class="layui-input securityInput" @input="security()" @keydown="backspace($event)">
          </div>
          <div class="security">安全系数：</div> 
          <div class="middle-security">
            <span>&#x3000;&#x3000;弱&nbsp;&#x3000;中&#x3000;&nbsp;强&#x3000;极强</span>
          </div>
          <div class="middle-security-color">
            <div class="weak"></div>
            <div class="middle"></div>
            <div class="strong"></div>
            <div class="stronger"></div>
          </div>
        </div>
        <div class="layui-form-item again">
          <label class="layui-form-label">再次确认：</label>
          <div class="layui-input-block">
            <input type="password" name="password1" v-model="newPassword1" required  lay-verify="required" placeholder="请再次输入新密码" autocomplete="off" class="layui-input">
          </div>
        </div>
        <button class="layui-btn layui-btn-normal" @click="sunmit()">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
import { webUrl } from "../../static/js/public.js"

export default {
  name: 'editPsd',
  data(){
    return{
      flag: true,
      box: '',
      treess: true,
      flowerss: false,
      glassess: false,
      name: localStorage.getItem("user_name"),
      signIn: localStorage.getItem("signIn"),
      token: localStorage.getItem("token"),
      username: '',
      newPassword: '',
      newPassword1: ''
    }
  },
  mounted() {
    this.box = this.$refs.viewBox
    window.addEventListener('scroll',this.menu)

    layui.use('form', function(){
      var form = layui.form;
    });
  },
  methods: {
    appear(){
      $(".help-content").css("height", 140)
    },
    disappear(){
      $(".help-content").css("height", 0)
    },
    contract(){
      $(".help-content").css("height", 0)
    },
    noContract(){
      $(".help-content").css("height", 140)
    },
    closeTopNav(){
      this.flag = false
      $(".top-nav").css("height", 0)
    },
    nationDisplay(){
      if ( $(".footer-content-nation-display").css("height") == "0px" ) {
        $(".footer-content-nation-display").css("height", 60)
      } else {
        $(".footer-content-nation-display").css("height", 0)
      }
    },
    tabTrees(){
      this.treess = true
      this.flowerss = false
      this.glassess = false
      $(".table-nav-child-trees i").css("display","block")
      $(".table-nav-child-flowers i").css("display","none")
      $(".table-nav-child-glasses i").css("display","none")
    },
    tabFlowers(){
      this.treess = false
      this.flowerss = true
      this.glassess = false
      $(".table-nav-child-trees i").css("display","none")
      $(".table-nav-child-flowers i").css("display","block")
      $(".table-nav-child-glasses i").css("display","none")
    },
    tabGlasses(){
      this.treess = false
      this.flowerss = false
      this.glassess = true
      $(".treesTable").css("display","none")
      $(".flowersTable").css("display","none")
      $(".glassesTable").css("display","block")
      $(".table-nav-child-trees i").css("display","none")
      $(".table-nav-child-flowers i").css("display","none")
      $(".table-nav-child-glasses i").css("display","block")
    },
    phoneErwei(){
      $(".phone-erwei").css("height",180)
      $(".phone-erwei").css("padding",10)
      $(".phone-erwei").css("border","1px solid #D9D9D9")
      $(".phone-erwei").css("border-top","none")
      $(".header-phone").css("background-color","white")
      $(".header-phone").css("box-shadow","0 6px 8px 0px rgba(0, 0, 0, 0.15)")
    },
    noPhoneErwei(){
      $(".phone-erwei").css("height",0)
      $(".phone-erwei").css("padding",0)
      $(".phone-erwei").css("border","none")
      $(".header-phone").css("background-color","transparent")
      $(".header-phone").css("box-shadow","none")
    },
    weixinErwei(){
      $(".weixin-erwei").css("height",180)
      $(".weixin-erwei").css("padding",10)
      $(".weixin-erwei").css("border","1px solid #D9D9D9")
      $(".weixin-erwei").css("border-top","none")
      $(".header-weixin").css("background-color","white")
      $(".header-weixin").css("box-shadow","0 6px 8px 0px rgba(0, 0, 0, 0.15)")
    },
    noWeixinErwei(){
      $(".weixin-erwei").css("height",0)
      $(".weixin-erwei").css("padding",0)
      $(".weixin-erwei").css("border","none")
      $(".header-weixin").css("background-color","transparent")
      $(".header-weixin").css("box-shadow","none")
    },
    dingyue(){
      if ( $(".dingyue").val().indexOf("@") == -1 ) {
        layer.open({
            type: 1,
            title: false,
            anim: 4,
            time: 1500,
            closeBtn: false,
            area: '260px;',
            shade: 0.6,
            id: 'LAY_layuipro',
            content: '<div style="padding: 20px 50px;text-align:center;">'+ "请输入正确的邮箱地址" +'</div>'
        })
      } else {
        layer.open({
            type: 1,
            title: false,
            anim: 4,
            time: 1500,
            closeBtn: false,
            area: '200px;',
            shade: 0.6,
            id: 'LAY_layuipro',
            content: '<div style="padding: 20px 50px;text-align:center;">'+ "订阅成功" +'</div>'
        })  
      }
      $(".dingyue").val("")
    },
    weixinDisplay(){
      $(".weixin-erweima").css("opacity",1)
    },
    weixindisppear(){
      $(".weixin-erweima").css("opacity",0)
    },
    weiboDisplay(){
      $(".weibo-erweima").css("opacity",1)
    },
    weibodisppear(){
      $(".weibo-erweima").css("opacity",0)
    },
    tabSeeds(e){
      $(".middle-test-content-malvidin").css("display","none")
      $(".middle-content li").css("border-left","none")
      $(".middle-content a").css({"color":"white","background": "#2577e3"})
      for (let i = 0; i < $(".middle-test-content-malvidin").length; i++) {
        $(".layui-nav-item a").eq(i).attr("index",i)
      }
      var index = e.target.attributes.index.value * 1
      $(".middle-test-content-malvidin").eq(index).css("display","block")
      $(".middle-content li").eq(index).css("border-left","4px solid #ff9915")
      $(".middle-content a").eq(index).css({"color":"#2577e3","background": "white"})
    },
    backRotation(){
      $("html,body").animate({scrollTop: 0},400)
    },
    backTable(){
      $("html,body").animate({scrollTop: 650},400)
    },
    backPhoto(){
      $("html,body").animate({scrollTop: 1100},400)
    },
    backCartogram(){
      $("html,body").animate({scrollTop: 1460},400)
    },
    backBottomNavigation(){
      $("html,body").animate({scrollTop: 2000},400)
    },
    enterRotation(){
      $(".left-rotation-img").css("display","none")
      $(".left-rotation-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leaveRotation(){
      $(".left-rotation-img").css("display","block")
      $(".left-rotation-span").css("display","none")
    },
    enterTable(){
      $(".left-table-img").css("display","none")
      $(".left-table-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leaveTable(){
      $(".left-table-img").css("display","block")
      $(".left-table-span").css("display","none")
    },
    enterPhoto(){
      $(".left-photo-img").css("display","none")
      $(".left-photo-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leavePhoto(){
      $(".left-photo-img").css("display","block")
      $(".left-photo-span").css("display","none")
    },
    enterCartogram(){
      $(".left-cartogram-img").css("display","none")
      $(".left-cartogram-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leaveCartogram(){
      $(".left-cartogram-img").css("display","block")
      $(".left-cartogram-span").css("display","none")
    },
    enterNavigation(){
      $(".left-bottomNavigation-img").css("display","none")
      $(".left-bottomNavigation-span").css({"display":"block","line-height":2,"color":"white"})
    },
    leaveNavigation(){
      $(".left-bottomNavigation-img").css("display","block")
      $(".left-bottomNavigation-span").css("display","none")
    },
    signOut(){
      $(".login-username").css("background-color","white")
      $(".login-username").css("box-shadow","0 6px 8px 0px rgba(0, 0, 0, 0.15)")
      $(".sign-out").css("height",80)
    },
    noSignOut(){
      $(".login-username").css("background-color","transparent")
      $(".login-username").css("box-shadow","none")
      $(".sign-out").css("height",0)
    },
    sunmit(){
      // 修改密码
      var that = this

      if ( that.newPassword == that.newPassword1 ) {
        that.$axios.post(webUrl + "admin/editpsw",{
          username: that.username,
          newPassword: that.newPassword,
          newPassword1: that.newPassword1,
        }).then(response =>{
          layer.open({
              type: 1,
              title: false,
              anim: 4,
              time: 1500,
              closeBtn: false,
              area: '200px;',
              shade: 0.6,
              id: 'LAY_layuipro',
              content: '<div style="padding: 20px 50px;text-align:center;">'+ response.data.msg +'</div>'
          })
          setTimeout(() => {
              this.$router.push({name: "login"})
          }, 1500);
        })
      } else {
        layer.open({
              type: 1,
              title: false,
              anim: 4,
              time: 1500,
              closeBtn: false,
              area: '200px;',
              shade: 0.6,
              id: 'LAY_layuipro',
              content: '<div style="padding: 20px 50px;text-align:center;">'+ "两次密码不一致" +'</div>'
          })
      }
    },
    security(){
      var that = this
      
      var reg = /\d/
      var reg1 = /[a-z]/
      var reg2 = /[A-Z]/
      var reg3 = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]")
      var regA = reg.test(that.newPassword)
      var regB = reg1.test(that.newPassword)
      var regC = reg2.test(that.newPassword)
      var regD = reg3.test(that.newPassword)
    
      if ( regA || regB || regC || regD ) {
        $(".weak").css("background-color","#008000")
      }
      if( (regA && regB) || (regA && regC) || (regA && regD) || (regB && regC) || (regB && regD) || (regC && regD) ){
        $(".weak").css("background-color","#F0F028")
        $(".middle").css("background-color","#F0F028")
      }
      if( regA && regB && regC || regA && regB && regD || regA && regC && regD || regB && regC && regD ){
        $(".weak").css("background-color","#EE600D")
        $(".middle").css("background-color","#EE600D")
        $(".strong").css("background-color","#EE600D")
      }
      if( regA && regB && regC && regD ){
        $(".weak").css("background-color","#E80000")
        $(".middle").css("background-color","#E80000")
        $(".strong").css("background-color","#E80000")
        $(".stronger").css("background-color","#E80000")
      }
      if( that.newPassword == "" ){
        $(".weak").css("background-color","white")
        $(".middle").css("background-color","white")
        $(".strong").css("background-color","white")
        $(".stronger").css("background-color","white")
      }
    },
    backspace(event){
      var that = this
      
      var reg = /\d/
      var reg1 = /[a-z]/
      var reg2 = /[A-Z]/
      var reg3 = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]")
      
      that.newPassword2= $(".securityInput").val().substring(0,$(".securityInput").val().length-1)
      var regA = reg.test(that.newPassword2)
      var regB = reg1.test(that.newPassword2)
      var regC = reg2.test(that.newPassword2)
      var regD = reg3.test(that.newPassword2)

      if( event.keyCode == 8 ){
        if ( regA || regB || regC ) {
          $(".middle").css("background-color","white")
          $(".strong").css("background-color","white")
          $(".stronger").css("background-color","white")
          $(".weak").css("background-color","#008000")
        }
        if( (regA && regB) || (regA && regC) || (regB && regC) ){
          $(".strong").css("background-color","white")
          $(".stronger").css("background-color","white")
          $(".weak").css("background-color","#F0F028")
          $(".middle").css("background-color","#F0F028")
          
        }
        if( regA && regB && regC ){
          $(".stronger").css("background-color","white")
          $(".weak").css("background-color","#FF0000")
          $(".middle").css("background-color","#FF0000")
          $(".strong").css("background-color","#FF0000")
        }
      }
    }
  }
}
</script>
<style scoped>
h1, h2 {
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
a{
  color: white;
}
.header{
  height: 40px;
  background-color: #F4F4F4;
  margin-top: -7px;
}
.header-ul{
  height: 40px;
}
.nav{
  height: 40px;
  background-color: #393D49;
  color: white;
  line-height: 40px;
}
.header-glasses{
  margin-right: 5px;
  margin-top: -2px;
  width: 20px;
  height: 20px;
}
.slogan{
  font-size: 14px;
  color: #666;
  display: inline-block;
  margin: 10px;
  margin-left: 30px;
}
.login{
  margin-left: 242px;
}
.member-name{
  color: #3983e5;
  text-decoration: none;
}
.register{
  padding: 12px 0px;
  width: 92px;
  color: #666;
  text-align: center;
}
.register:hover{
  color: #3983e5;
}
.header-phone{
  margin: 0;
  width: 40px;
  height: 40px;
  position: relative;
  line-height: 40px;
  cursor: pointer;
}
.header-weixin{
  margin: 0;
  width: 40px;
  height: 40px;
  position: relative;
  line-height: 40px;
  cursor: pointer;
}
.weixin-icon{
  width: 20px;
  height: 20px;
}
.phone-icon{
  width: 20px;
  height: 20px;
}
.phone-erwei,
.weixin-erwei{
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
.phone-erwei{
  right: 140px;
}
.weixin-erwei{
  right: 96px;
}
.phone-erwei img,
.weixin-erwei img{
  width: 130px;
  height: 130px;
}
.login-username{
  width: 100px;
  height: 40px;
  top: -12px;
  position: relative;
  cursor: pointer;
}
.sign-out{
  position: absolute;
  width: 100px;
  background: white;
  right: 356px;
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
.login-username-title{
  position: relative;
  top: 12px;
}
.telephoneVersion{
  display: inline-block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  background: #91BBF1;
  color: white;
  margin-top: 10px;
  font-size: 12px;
  cursor: pointer;
}
.subscriptionNumber{
  color:#FF6600;
  cursor: pointer;
}
.top-content{
  height: 80px;
}
.environment-icon{
  width: 64px;
  height: 64px;
}
.protectContent{
  font-size: 22px;
  border-bottom: 1px solid;
  padding-bottom: 2px;
}
.lowercase{
  position: relative;
  top: 24px;
  left: -108px;
  font-weight: 600;
}
.addressInformation{
  margin-left: 250px;
  margin-top: 20px;
  width: 400px;
}
.middle-content{
  width: 400px;
  margin: auto;
}
.middle-content-img{
  position: relative;
  margin: auto;
  top: -60px;
  left: -50px;
  width: 450px;
  height: 300px;
  z-index: -1;
}
.middle-content-form{
  margin-top: -100px;
}
.security{
  position: relative;
  left: 240px;
  top: -30px;
}
.middle-security{
  display: inline-block;
  position: relative;
  right: -335px;
  top: -60px;
  z-index: 10;
}
.middle-security-color{
  position: relative;
  display: flex;
  justify-content: space-around;  
  left: 475px;
  top: -50px;
  width: 140px;
  transition: all 1s;
}
.middle-security-color .weak,
.middle-security-color .middle,
.middle-security-color .strong,
.middle-security-color .stronger{
  position: relative;
  width: 40px;
  height: 10px;
  border: 1px solid;
  border-radius: 5px;
}
.again{
  margin-top: -46px;
}
</style>