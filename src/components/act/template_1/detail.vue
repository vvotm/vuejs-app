<template>
    <div class="layout" v-bind:style="{backgroundColor: act.color_plate}">
        <!--<div class="topBar color_fff f16"><span class="color_yellow">7800</span>人查看<span class="color_yellow pl10">39499</span>人分享<span class="color_yellow pl10">16333</span>人报名</div>-->
        <div class="relative">
            <img :src="act.banner_img" alt="" class="banner-bg">
            <!--<img src="/static/images/template_1/banner-bg.jpg" alt="" class="banner-bg">-->
            <div class="banner">
                <h1 class="title">{{act.title}}</h1>
            </div>
            <div class="countDown-box color_fff text-center">
                <countDown :date="countDownTime"></countDown>
                <p class="mt5"><span class="color_yellow">您</span><span class="color_fff key">{{act.act_start_time}}</span><span class="color_yellow">抽中奖品</span></p>
            </div>
        </div>
        <div class="text-center playBtn-box">
            <img src="/static/images/template_1/play-btn.png" alt="点我去玩" class="playBtn">
        </div>

        <div class="box">
            <h2 class="box-title">
                <span class="word w0">活</span>
                <span class="word w1">动</span>
                <span class="word w2">奖</span>
                <span class="word w3">励</span>
            </h2>
            <div class="inner text-center">
                <p>总共<span class="red key">{{act.act_prize_cnt}}</span>{{act.act_prize_unit}} 最后<span class="red key">{{act.act_prize_cnt}}</span>{{act.act_prize_unit}}</p>
            </div>
        </div>

        <div class="box">
            <h2 class="box-title">
                <span class="word w0">活</span>
                <span class="word w1">动</span>
                <span class="word w2">介</span>
                <span class="word w3">绍</span>
            </h2>
            <div class="inner">
                <p>{{act.description}}</p>
            </div>
        </div>
        
        <div class="box">
            <h2 class="box-title">
                <span class="word w0">参</span>
                <span class="word w1">与</span>
                <span class="word w2">规</span>
                <span class="word w3">则</span>
            </h2>
            <div class="inner">
                {{act.act_rule_desc}}
            </div>
        </div>

        <div class="box">
            <h2 class="box-title">
                <span class="word w0">奖</span>
                <span class="word w1">品</span>
                <span class="word w2">描</span>
                <span class="word w3">述</span>
            </h2>
            <div class="inner">
                {{act.act_prize_desc}}
                <div class="mt15 upload-box text-center">
                    <template v-for="item in act.act_images">
                        <img :src="item" alt="" class="img-w100">
                    </template>
                </div>
            </div>
        </div>

        <div class="box">
            <h2 class="box-title">
                <span class="word w0">领</span>
                <span class="word w1">奖</span>
                <span class="word w2">信</span>
                <span class="word w3">息</span>
            </h2>
            <p>主办方: {{act.organizer_name}}</p>
            <p>主办地址: {{act.organizer_address}}</p>
            <p>主办电话: {{act.organizer_phone}} </p>
        </div>

        <div class="box">
            <h2 class="box-title">
                <span class="word w0">关</span>
                <span class="word w1">于</span>
                <span class="word w2">我</span>
                <span class="word w3">们</span>
            </h2>
            <div class="inner">{{act.about_us}}</div>
        </div>

        <div class="box">
            <h2 class="box-title">
                <span class="word w0">活</span>
                <span class="word w1">动</span>
                <span class="word w2">排</span>
                <span class="word w3">名</span>
            </h2>
            <div class="inner">
                <p class="text-center"><span class="iconfont icon-team"></span>共有<span class="red key">{{rank.total}}</span>人参与</p>
                <table class="w100 ranking-table" cellpadding="0" cellspacing="1">
                    <thead>
                        <tr>
                            <th>名次</th>
                            <th>姓名</th>
                            <th>总用时</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in rank.data">
                            <td>{{index+1}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.spend_time+'小时'}}</td>
                            <td>{{item.is_completed ? '已完成' : ''}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <router-link :to="{name: 'actNew', params:{id: id}}" class="madeBtn">我要制作</router-link>
        <span v-if="!!act.background_music" class="music-icon iconfont icon-music" :class="{'isPaused': isPaused}" @click="togglePause"></span>
        <audio v-if="!!act.background_music" loop="" :src="act.background_music" autoplay="" id="music"></audio>
        <!-- {{act.description}} -->
    </div>
</template>

<script>
    import ActSrv from "../../../service/actSrv";
    import countDown from '../../shared/countDown.vue'

    export default {
        data: () => {
            return {
                id: 0,
                act: "",
                rank: {}, // 遍历排行榜
                countDownTime: new Date().getTime(),
                isPaused: true
            }
        },
        components: { countDown },
        created: function () {
            let id = this.$route.params.id;
            this.id = id;
            const actSrv = new ActSrv(this);
            actSrv.getActTemplateDetail(id).then((resp) => {
                this.act = resp.data.data;
                try {
                    this.act.act_images = JSON.parse(this.act.act_images);
                    document.title = this.act.title;
                } catch (e) {
                    console.error(e)
                    this.act.act_images = [];
                }
            });
            actSrv.getDefaultRank().then((resp) => {
                    this.rank = resp.data.data;
            });

        },
        methods: {
            //切换音乐开关
            togglePause: function(){
                if(this.isPaused){
                    document.getElementById('music').play()
                    this.isPaused = false
                } else {
                    document.getElementById('music').pause()
                    this.isPaused = true
                }
            },
        }
    }
</script>

<style scoped>
.music-icon.isPaused:after{
    content: '';
    width: 100%; height: 1px;
    background: #fff;
    position: absolute;
    top: 50%; left: 0;
    -webkit-transform:rotate(135deg); 
            transform:rotate(135deg);
}
.music-icon{
    display: block;
    width: 45px; height: 45px;
    border-radius: 50%;
    text-align: center;
    line-height: 45px;
    background: rgba(0,0,0,.7);
    color: #fff;
    position: fixed;
    top: 30px; right: 10px;
    font-size: 20px;
}
.layout{
    /*background: #fedc40;*/
    padding-bottom: 80px;
}
.color_yellow{
    color: #ffea00;
}
.red{
    color: #ff4c12;
}
.key{
    padding: 0 3px;
}
.topBar{
    background: #161331;
    padding: 0 10px;
}
.pl10{
    padding-left: 10px;
}
.banner-bg{
    width: 100%; height: auto;
}
.banner{
    position: absolute;
    width: 100%;
    top: 0; left: 0;
}
.title{
    color: #fff;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    padding: 40px 30px;
}
.countDown-box{
    position: absolute;
    bottom: 3px;
    left: 50%;
    width: 256px; height: 85px;
    margin-left: -128px;
    padding-top: 15px;
}
.playBtn-box{
    padding: 22px 0 0;
}
.playBtn{
    width: 76%;
}
.box{
    margin: 42px auto 0;
    width: 90%;
    background: #fdf8da;
    border-radius: 5px;
    padding: 40px 20px 20px;
    position: relative;
}
.box-title{
    width: 268px; height: 42px;
    position: absolute;
    top: -21px; left: 50%;
    margin-left: -134px;
    background: url(/static/images/template_1/tit-bg.png) no-repeat 0 0;
    background-size: 100% auto;
    color: #fff;
    font-size: 16px;
    text-align: center;
}
.word{
    position: absolute;
    left: 50%;
}
.w0{
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
    top: 13px;
    margin-left: -30px;
}
.w1{
    -webkit-transform: rotate(5deg);
            transform: rotate(5deg);
    top: 15px;
    margin-left: -10px;
}
.w2{
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
    top: 15px;
    margin-left: 10px;
}
.w3{
    -webkit-transform: rotate(-16deg);
            transform: rotate(-16deg);
    top: 12px;
    margin-left: 30px;
}
.inner{
    color: #4d3a1b;
    line-height: 22px;
}
.inner p{
    padding-top: 20px;
}
.inner p:first-child{
    padding-top: 0;
}
.inner .num{
    display: inline-block;
    text-align: center;
    width: 22px; height: 22px;
    border-radius: 50%;
    color: #fff;
    background: #ff4c12;
    margin-right: 5px;
}
.madeBtn{
    display: block;
    width: 100%; height: 48px;
    line-height: 48px;
    background: #ff4c12;
    position: fixed;
    bottom: 0; left: 0;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.ranking-table{
    margin-top: 15px;
}
.ranking-table th,
.ranking-table td{
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.ranking-table th{
    background: #e6c86b;
    color: #fff;
    font-weight: normal;
}
.ranking-table td{
    background: #f8eba9;
}
.icon-team{
    color: #4d3a1b;
    font-size: 20px;
    margin-right: 5px;
}
</style>













