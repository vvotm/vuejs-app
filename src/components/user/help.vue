<template>
    <div class="wrap">
        <header class="header">
            <span class="iconfont icon-back header-goback" @click="goback"></span>
            <h1 class="header-title">联系客服</h1>
        </header>
        <img src="/static/images/logo.png" alt="我要联赢" class="logo">
        <div class="code-box bg_fff">
            <p class="text-center color_000">客服微信：商家恋客服</p>
            <img src="/static/images/qrcode.jpg" alt="长按识别二维码" class="qrcode">
            <p class="text-center color_000">长按识别二维码</p>
        </div>
        <p class="text-center color_666 mt10"><span class="iconfont icon-phone"></span><a href="tel:18668181158">18668181158</a></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        components: {  },
        created: function () {
            
        },
        methods: {
            goback: function(){
                history.go(-1)
            }
        }
    }
</script>

<style scoped>
.logo{
    margin: 50px auto 15px;
    width: 98px; height: auto;
    display: block;
}
.qrcode{
    display: block;
    margin: 10px auto;
    width: 169px; height: auto;
}
.code-box{
    width: 199px;
    margin: 0 auto;
    padding: 15px;
}
.icon-phone{
    color: #12abcc;
}
</style>










