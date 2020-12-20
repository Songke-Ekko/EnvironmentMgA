<template>
    <div class="mainBox layui-row">
        <h1>环境管理A期系统</h1>
        <div class="large">
            <div class="small"></div>
            <h2>账号登录</h2>
            <div class="content content-studentNumber">
                <img src="../assets/学号.png" alt="">
                <input v-model="studentNumber" type="text" name="studentNumber" class="number studentNumber" placeholder="请输入属于您的学号" autocomplete="off">
            </div>
            <div class="content">
                <img src="../../static/images/用户.png" alt="">
                <input v-model="name" type="text" name="username" class="number" placeholder="请输入您好听的名字" autocomplete="off">
            </div>
            <div class="content">
                <img src="../../static/images/密码.png" alt="">
                <input v-model="password" type="password" name="password" class="password" placeholder="请输入您可耐的密码" autocomplete="off">
            </div>
            <button class="login" @click="login($event)">l&nbsp;o&nbsp;g&nbsp;i&nbsp;n</button>
            <span class="forget"><router-link to="/editPsd">忘记密码</router-link></span>
        </div>
    </div>
</template>
<script>
import { webUrl } from "../../static/js/public.js";
export default {
    name: 'login',
    data() {
        return {
            status: 1,   // 1.登录，2.注册，3.loading
            name: "",
            password: "",
            studentNumber: "",
            txtSignIn: false
        }
    },
    methods: {
        login: function(event){
            // 登录
            let that = this
            var reg = /^2015\d{7}$/
            var regA = reg.test($(".studentNumber").val())
            if ( regA ) {
                
            that.$axios.post(webUrl + "admin/login",{
                studentNumber: that.studentNumber,
                name: this.name,
                password: this.password
            })
            .then(response =>{
                if ( response.data.status == 1 ) {
                    let type = response.data.type
                    this.status = 3
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("user_name", response.data.user_name)
                    localStorage.setItem("studentNumber", response.data.studentNumber)
                    localStorage.setItem("signIn", 1)
                    layui.use('layer', function(){ 
                        var $ = layui.jquery, layer = layui.layer
                        layer.open({
                        type: 1,
                        title: false,
                        anim: 1,
                        closeBtn: false,
                        time: 1500,
                        area: '180px;',
                        shade: 0.6,
                        id: 'LAY_layuipro',
                        content: '<div style="padding: 20px 50px;text-align:center;">'
                                    + "登录成功" +
                                '</div>'
                        })
                    })
                    setTimeout(() => {
                        this.$router.push({
                            name: 'IndexPage1'
                        })
                    }, 1500);
                } 
            })
            } else {
                layui.use('layer', function(){ 
                    var $ = layui.jquery, layer = layui.layer
                    layer.open({
                    type: 1,
                    title: false,
                    anim: 1,
                    area: '380px;',
                    shade: 0.6,
                    id: 'LAY_layuipro',
                    btn: ['确定'],
                    btnAlign: 'c',
                    content: '<div style="padding: 20px 50px;text-align:center;">'
                                + "登录失败" +
                            '</div>'
                    })
                })
            }
            
            
        }
    },
}
</script>
<style scoped>
    .mainBox{
        height: 590px;
        background-image: url(../../static/images/1.png);
        background-size: 100% 100%;
        margin-top: -19px;
    }
    .large {
        position: relative;
        left: 8%;
        width: 500px;
        height: 400px;
        border: 1px solid white;
        margin-top: 90px;
        box-shadow: 0 0 5px 3px lightgray;
    }
    h2{
        text-align: center;
        color: white;
        opacity: 0.7;
    }

    input {
        width: 300px;
        outline: none;
        border: 0;
        position: relative;
        background: white;
        top: 12px;
    }
    img{
        width: 25px;
        height: 25px;
        position: relative;
        top: 10px;
    }
    .content{
        padding: 0 10px;
        margin: auto;
        margin-top: 40px;
        width: 400px;
        position: relative;
        top: 20px;
        height: 50px;
        border: 2px solid white;
        background: white;
        opacity: 0.7;
        box-shadow: 0 0 5px 3px white;
    }
   .content-studentNumber{
       margin-top: 10px;
   }

    .login{
        position: relative;
        top: 40px;
        left: 32px;
        width: 300px;
        height: 40px;
        border-radius: 20px;
        border: 2px solid white;
        background: white;
        opacity: 0.7;
        font-size: 18px;
        cursor: pointer;
        color: gray;
    }
    .small{
        width: 20px;
        height: 20px;
        border: 1px solid white;
        position: relative;
        transform: rotateZ(45deg);
        top: -11px;
        left: 250px;
        background: white;
        border-bottom: 0;
        border-right: 0;
        background: #1B7EB7;
    }
    h1{
        position: relative;
        top: 50px;
        width: 240px;
        left: 19%;
        color: white;
        opacity: 0.7;
    }
    .forget{
        position: relative;
        top: 70px;
        left: 30px;
    }
    .forget a{
        color: #ccc;
    }
    .forget a:hover{
        color: white;
    }
</style>
