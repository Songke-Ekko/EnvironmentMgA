<template>
    <div class="large">
        <h1>
            <a class="logo">Flusk</a>
        </h1>
        <div class="slogan">
            SLIM &amp; STYLISH
        </div>
        <div class="secondary-slogan">
            The Flusk Theme By ThemeWagon.
        </div>
        <span class="enter">
            <router-link to="/IndexPage1">
                <img src="../assets/向下继续.png">
            </router-link> 
        </span>
    </div>
</template>
<script>
export default {
    name: 'IndexPage',
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
    .large{
        width: 1252px;
        height: 578px;
        margin-top: -8px;
        background-image: url(../assets/header-bg.jpg);
        background-size: 100% 125%;
    }
    .logo{
        position: relative;
        font-family: 'Alegreya SC';
        color: white;
        left: -590px;
    }
    .slogan {
        font-size: 4em;
        margin-bottom: 15px;
        line-height: 1em;
        font-family: 'Nixie One';
        color: white;
        margin-top: 200px;
    }
    @font-face{
        font-family: 'Nixie One';
        src: url(../assets/1111.ttf);
    }
    .secondary-slogan {
        font-size: 1.6em;
        color: rgba(255,255,255,.5);
        line-height: 1em;
        font-family: 'Alegreya SC';
    }
    @font-face{
        font-family: 'Alegreya SC';
        src: url(../assets/1112.ttf);
    }
    @keyframes myMove{
        from {
            height: 0px;
        }
        to {
            height: 40px;
        }
    }
    .enter img{
        margin-top: 32px;
        width: 40px;
        animation: myMove 1.2s infinite;
        cursor: pointer;
    }
    
</style>