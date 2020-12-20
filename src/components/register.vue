<template>
    <div class="mainBox layui-row">
      <div class="layui-col-md4 large">
          <div class="header">
              <p class="chase">追</p>
              <p class="born">Born to chase books</p>
          </div>
          <div class="footer">
            <div class="number">
                <img src="../assets/6.png">
                <input v-model="name" class="input" type="text" placeholder="起一个好听的名字吧" autocomplete="off">
            </div>
            <div class="number">
                <img src="../assets/7.png">
                <input v-model="password" class="input firstPassword" type="password" placeholder="请输入您可耐的密码" autocomplete="off">
            </div>
            <div class="number">
                <img src="../../static/images/确认.png">
                <input v-model="password1" class="input secondPassword" type="password" placeholder="请再次确认您的密码" autocomplete="off">
            </div>
            <button class="regist layui-btn" data-method="confirmTrans" @click="regist()">regist</button>
          </div>
          <span class="haved">已有账号？返回 <router-link to="/login">登录</router-link></span>
      </div>
    </div>
</template>
<script>
import { webUrl } from "../../static/js/public.js";
export default {
    name: 'register',
    data(){
        return {
            status: 1, //1登录,2注册，3loading
            name: "",
            password: "",
            password1: ""
        }
    },
    beforeCreate() {
        layui.use('layer', function(){ 
            var $ = layui.jquery, layer = layui.layer
            layer.open({
            type: 1,
            title: "环境管理A期系统注册协议和隐私政策",
            anim: 1,
            area: '380px;',
            shade: 0.6,
            id: 'LAY_layuipro',
            btn: ['阅读完毕'],
            btnAlign: 'c',
            content: '<div style="padding: 20px 50px;text-align:center;">'
                        + "亲爱的用户，在你注册成为本系统用户的过程中，请您遵守信息不外泄，不传播的协议与政策，遵纪守法，谢谢合作，有任何问题即可联系我们，祝您愉快。" +
                     '</div>'
            })
        })
        
    },
    methods: {
        regist: function(){
            // 注册
            let that = this
           
            if ( that.name.length > 20 ) {
                layer.open({
                    type: 1,
                    title: false ,
                    area: '220px;',
                    anim: 6,
                    time: 2000,
                    shade: 0.8,
                    id: 'LAY_layuipro',
                    btn: ['确定'],
                    btnAlign: 'c',
                    content: '<div style="padding: 20px 50px 0px 50px;text-align:center;">'+ "注册名字太长" +'</div>'
                })
                return
            }
            if ( that.name.length == 0 || that.password.length == 0 || that.password1.length == 0) {
                layer.open({
                    type: 1,
                    title: false ,
                    area: '220px;',
                    anim: 6,
                    time: 2000,
                    shade: 0.8,
                    id: 'LAY_layuipro',
                    btn: ['确定'],
                    btnAlign: 'c',
                    content: '<div style="padding: 20px 50px 0px 50px;text-align:center;">'+ "用户名或密码为空" +'</div>'
                })
                return
            }
            if ( $(".firstPassword").val() != $(".secondPassword").val() ) {
                layer.open({
                    type: 1,
                    title: false ,
                    area: '220px;',
                    anim: 6,
                    time: 2000,
                    shade: 0.8,
                    id: 'LAY_layuipro',
                    btn: ['确定'],
                    btnAlign: 'c',
                    content: '<div style="padding: 20px 50px 0px 50px;text-align:center;">'+ "两次密码不一致" +'</div>'
                })
                return
            }
            that.$axios.post(webUrl + "admin/regist",{
                name: that.name,
                password: that.password,
                password1: that.password1
            })
            .then(response =>{
                if( response.data.status == 1 ){
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
                } else{
                    layer.open({
                        type: 1,
                        title: false ,
                        anim: 4,
                        closeBtn: false,
                        area: '200px;',
                        shade: 0.8,
                        id: 'LAY_layuipro',
                        btn: ['确定'],
                        btnAlign: 'c',
                        content: '<div style="padding: 20px 50px 0px 50px;text-align:center;">'+ response.data.msg +'</div>'
                    })
                }
            })
            .catch(reject =>{
                console.log(reject)
            })
        }
    },
}

</script>
<style scoped>
    .mainBox {
        height: 674px;
        background-image: url(../assets/5.jpeg);
        background-size: 100% 108%;
        margin-top: -50px;
    }
    .large {
        position: relative;
        transform: translate(40%, 0);
        top: 100px;
        height: 500px;
        border: 1px solid;
        box-shadow: 0 0 3px 3px #1b405b;
    }

    .header {
        width: 100%;
        height: 160px;
        background: linear-gradient(lightblue, #1b405b);
        text-align: center;
    }

    .footer {
        width: 100%;
        height: 340px;
        background: white;
    }

    img {
        width: 30px;
        height: 30px;
        position: relative;
        top: 40px;
    }

    .number {
        position: relative;
        top: 10px;
        width: 260px;
        height: 60px;
        margin: auto;
    }

    .input {
        border: 0;
        border-bottom: 2px solid #1b405b;
        padding: 10px;
        position: relative;
        top: 35px;
        outline: none;
    }

    p {
        margin: 0;
    }

    .chase {
        position: relative;
        top: 40px;
        font-size: 40px;
        font-weight: bolder;
        color: white;
    }

    .born {
        position: relative;
        top: 50px;
        font-size: 12px;
        color: white;
    }
    .regist{
        position: relative;
        width: 200px;
        height: 40px;
        border-radius: 20px;
        left: 10px;
        top: 60px;
        border: 2px solid;
        color: white;
        cursor: pointer;
        outline: none;
        font-size: 16px;
        background: #1b405b;
    }
    .haved{
      position: relative;
      top: -29px; 
      left: 130px;
    }
    .attention{
      cursor: pointer;
      position: relative;
      top: 70px; 
      left: -220px;
    }
</style>
