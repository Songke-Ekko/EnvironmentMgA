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
            <div @click="leave()">退出</div>
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
      <div class="table-content">
        <table class="layui-hide" id="demo" lay-filter="test"></table>
      </div>
    </div>
    <div id="motaikunag" style="display: none;">
      <form action>
        <div class="layui-form">
          <div class="layui-form-item">
            <label class="layui-form-label">树种编号</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="number"
                required
                lay-verify="required"
                placeholder="请输入树种编号"
                autocomplete="off"
                class="layui-input"
                v-model="number"
                oninput="value=value.replace(/[^\d]/g,'')"
              >
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">树种类别</label>
            <div class="layui-input-block">
              <select name="type" lay-verify="required" class="types">
                <option value></option>
                <option value="樱花树">樱花树</option>
                <option value="石楠树">石楠树</option>
                <option value="速生杨">速生杨</option>
                <option value="法国梧桐">法国梧桐</option>
                <option value="柳树">柳树</option>
              </select>
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">树种年龄</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="age"
                required
                lay-verify="required"
                placeholder="请输入树种年龄"
                autocomplete="off"
                class="layui-input"
                v-model="age"
                oninput="value=value.replace(/[^\d]/g,'')"
              >
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">树种高度</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="height"
                required
                lay-verify="required"
                placeholder="请输入树种高度"
                class="layui-input"
                v-model="height"
                oninput="value=value.replace(/[^\d]/g,'')"
              >
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">树种直径</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="diameter"
                required
                lay-verify="required"
                placeholder="请输入树种直径"
                autocomplete="off"
                class="layui-input"
                v-model="diameter"
              >
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">栽培时间</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="date"
                class="layui-input dates"
                id="test1"
                placeholder="yyyy-MM-dd"
                v-model="date"
              >
            </div>
          </div>
        </div>
      </form>
      <br>
      <input type="button" class="layui-btn layui-btn-normal" @click="add()" title="确认" value="确认">
    </div>
    <div id="motaikunag1" style="display: none;">
      <form action="" class="layui-form">
        <div>
          <div class="layui-form-item" style="display:none;">
            <div class="layui-input-block">
              <input type="text" name="_id" autocomplete="off" class="layui-input edit-id">
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">树种编号</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="number"
                required
                lay-verify="title"
                placeholder="请输入树种编号"
                autocomplete="off"
                class="layui-input edit-number"
                v-model="number"
                oninput="value=value.replace(/[^\d]/g,'')"
              >
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">树种类别</label>
            <div class="layui-input-block edit-type">
              <select name="type" lay-verify="required" class="types" v-model="type">
                <option value></option>
                <option value="樱花树">樱花树</option>
                <option value="石楠树">石楠树</option>
                <option value="速生杨">速生杨</option>
                <option value="法国梧桐">法国梧桐</option>
                <option value="柳树">柳树</option>
              </select>
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">树种年龄</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="age"
                required
                lay-verify="required"
                placeholder="请输入树种年龄"
                autocomplete="off"
                class="layui-input edit-age"
                v-model="age"
                oninput="value=value.replace(/[^\d]/g,'')"
              >
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label add-label">树种高度</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="height"
                required
                lay-verify="required"
                placeholder="请输入树种高度"
                class="layui-input edit-height"
                v-model="height"
                oninput="value=value.replace(/[^\d]/g,'')"
              >
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">树种直径</label>
            <div class="layui-input-block">
              <input
                type="text"
                name="diameter"
                required
                lay-verify="required"
                placeholder="请输入树种直径"
                class="layui-input edit-diameter"
                v-model="diameter"
                oninput="value=value.replace(/[^\d]/g,'')"
              >
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">栽培时间</label>
            <div class="layui-input-block">
              <input
                type="text"
                required
                lay-verify="required"
                name="date"
                class="layui-input edit-dates"
                id="test2"
                placeholder="yyyy-MM-dd"
                v-model="date"
              >
            </div>
          </div>
        </div>
      </form>
      <br>
      <input type="button" class="layui-btn layui-btn-normal" @click="edit()" title="确认" value="确认">
      <br>
    </div>
  </div>
</template>

<script>
import { webUrl } from "../../static/js/public.js";

export default {
  name: "treesTable",
  data() {
    return {
      name: localStorage.getItem("user_name"),
      signIn: localStorage.getItem("signIn"),
      token: localStorage.getItem("token"),
      type: "",
      age: "",
      date: "",
      height: "",
      diameter: "",
      number: ""
    };
  },
  mounted() {
    var that = this
    layui.use(["laydate", "laypage", "layer", "table"], function() {
      var table = layui.table;
      var laydate = layui.laydate, //日期
        laypage = layui.laypage, //分页
        layer = layui.layer, //弹层
        table = layui.table, //表格
        form = layui.form;
      form.render(); //更新全部，解决动态渲染问题

      //常规用法
      laydate.render({
        elem: "#test1"
      });

      laydate.render({
        elem: "#test2"
      });

      //执行一个 table 实例
      table.render({
        elem: "#demo",
        height: 420,
        url: webUrl + "admin/getTrees",
        page: true,
        limit: 10,
        toolbar: "default",
        cols: [
          [
            //表头
            { type: "checkbox", fixed: "left" },
            {
              field: "number",
              title: "树种编号",
              width: "15%",
              sort: true,
              fixed: "left",
              align: "center",
              totalRowText: "合计："
            },
            { field: "type", title: "树种类别", width: "15%", align: "center" },
            {
              field: "age",
              title: "树种年龄",
              width: "13.2%",
              sort: true,
              totalRow: true,
              align: "center"
            },
            {
              field: "date",
              title: "栽培时间",
              width: "23.2%",
              sort: true,
              align: "center"
            },
            {
              field: "height",
              title: "树种高度",
              width: "15%",
              sort: true,
              totalRow: true,
              align: "center"
            },
            {
              field: "diameter",
              title: "树种直径",
              width: "15%",
              sort: true,
              align: "center"
            }
          ]
        ]
      });
     
      //监听头工具栏事件
      table.on("toolbar(test)", function(obj) {
        var checkStatus = table.checkStatus(obj.config.id),
          data = checkStatus.data; //获取选中的数据
        switch (obj.event) {
          case "add":
            if (localStorage.getItem("signIn") == "1") {
              layer.open({
                type: 1,
                area: ["600px", "400px"],
                title: "添加树种信息",
                shadeClose: false,
                content: $("#motaikunag")
              });
            } else {
              layer.open({
                type: 1,
                title: false,
                anim: 4,
                time: 1500,
                closeBtn: false,
                area: "200px;",
                shade: 0.6,
                id: "LAY_layuipro",
                content:
                  '<div style="padding: 20px 50px;text-align:center;">请先登录</div>'
              });
            }
            break;
          case "update":
            if (localStorage.getItem("signIn") == "1") {
              if (data.length === 0) {
                layer.msg("请选择一行");
              } else if (data.length > 1) {
                layer.msg("只能同时编辑一个");
              } else {
                layer.open({
                  type: 1,
                  area: ["600px", "400px"],
                  title: "编辑树种信息",
                  shadeClose: false,
                  content: $("#motaikunag1")
                });
                $(".edit-id").val(checkStatus.data[0]._id);
                that.number = checkStatus.data[0].number
                $(".types").val(checkStatus.data[0].type)
                form.render()
                that.age = checkStatus.data[0].age
                that.date = checkStatus.data[0].date
                that.height = checkStatus.data[0].height
                that.diameter = checkStatus.data[0].diameter
              }
            } else {
              layer.open({
                type: 1,
                title: false,
                anim: 4,
                time: 1500,
                closeBtn: false,
                area: "200px;",
                shade: 0.6,
                id: "LAY_layuipro",
                content:
                  '<div style="padding: 20px 50px;text-align:center;">请先登录</div>'
              });
            }
            break;
          case "delete":
            if (localStorage.getItem("signIn") == "1") {
              if (data.length === 0) {
                layer.msg("请选择一行");
              } else {
                $.post(
                  webUrl + "admin/deleteTrees",
                  { _id: checkStatus.data[0]._id,
                  username: localStorage.getItem("user_name"),
                  studentNumber: localStorage.getItem("studentNumber")},
                  function(result) {
                    layer.open({
                      type: 1,
                      title: false,
                      anim: 4,
                      time: 1500,
                      closeBtn: false,
                      area: "200px;",
                      shade: 0.6,
                      id: "LAY_layuipro",
                      content:
                        '<div style="padding: 20px 50px;text-align:center;">' +
                        result.msg +
                        "</div>"
                    });
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                  }
                );
              }
            } else {
              layer.open({
                type: 1,
                title: false,
                anim: 4,
                time: 1500,
                closeBtn: false,
                area: "200px;",
                shade: 0.6,
                id: "LAY_layuipro",
                content:
                  '<div style="padding: 20px 50px;text-align:center;">请先登录</div>'
              });
            }

            break;
        }
      });

      //监听行工具事件
      table.on("tool(test)", function(obj) {
        //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        var data = obj.data, //获得当前行数据
          layEvent = obj.event; //获得 lay-event 对应的值
        if (layEvent === "detail") {
          layer.msg("查看操作");
        } else if (layEvent === "del") {
          layer.confirm("真的删除行么", function(index) {
            obj.del(); //删除对应行（tr）的DOM结构
            layer.close(index);
            //向服务端发送删除指令
          });
        } else if (layEvent === "edit") {
          layer.msg("编辑操作");
        }
      });

      //分页
      laypage.render({
        elem: "pageDemo", //分页容器的id
        count: 100, //总页数
        skin: "#1E9FFF", //自定义选中色值
        //,skip: true //开启跳页
        jump: function(obj, first) {
          if (!first) {
            layer.msg("第" + obj.curr + "页", { offset: "b" });
          }
        }
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
    add() {
      let that = this;
      if ( that.number == "" || $(".types").val() == "" || that.age == "" || $(".dates").val() == "" || that.height == "" || that.diameter == "" ) {
        layer.open({
          type: 1,
          title: false,
          anim: 4,
          time: 1500,
          closeBtn: false,
          area: "200px;",
          shade: 0.6,
          id: "LAY_layuipro",
          content:
            '<div style="padding: 20px 50px;text-align:center;">' +
            "请不要输入空值" +
            "</div>"
        });
      } else{
        that.$axios
            .post(webUrl + "admin/addTrees", {
              number: that.number,
              type: $(".types").val(),
              age: that.age,
              date: $(".dates").val(),
              height: that.height,
              diameter: that.diameter,
              username: localStorage.getItem("user_name"),
              studentNumber: localStorage.getItem("studentNumber")
            })
            .then(response => {
              layer.open({
                type: 1,
                title: false,
                anim: 4,
                time: 1500,
                closeBtn: false,
                area: "200px;",
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
            });
      }
      
    },
    edit() {
      let that = this;

      if(that.number == "" || that.age == "" || $(".dates").val() == "" || that.height == "" || that.diameter == ""){
        layer.open({
          type: 1,
          title: false,
          anim: 4,
          time: 1500,
          closeBtn: false,
          area: "200px;",
          shade: 0.6,
          id: "LAY_layuipro",
          content:
            '<div style="padding: 20px 50px;text-align:center;">' +
            "请不要输入空值" +
            "</div>"
        });
      }else{
        that.$axios
        .post(webUrl + "admin/editTrees", {
          _id: $(".edit-id").val(),
          number: that.number,
          type: $(".edit-type select").val(),
          age: that.age,
          date: $(".edit-dates").val(),
          height: that.height,
          diameter: that.diameter,
          username: localStorage.getItem("user_name"),
          studentNumber: localStorage.getItem("studentNumber")
        })
        .then(response => {
          layer.open({
            type: 1,
            title: false,
            anim: 4,
            time: 1500,
            closeBtn: false,
            area: "200px;",
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
          // table.reload('idTest', { where: { key: { field: demoReload.val() } } });
        });
      }
        
   
      
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
.demo-carousel {
  height: 200px;
  line-height: 200px;
  text-align: center;
}
.table-content {
  background-color: white !important;
  margin-top: 40px;
}
</style>