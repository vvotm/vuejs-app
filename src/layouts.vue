<template>
    <div class="container">
        <router-view></router-view>
        
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
        
    }
}
</script>

<style>
@import '/static/font/iconfont.css';
body,
div,
p,
ul,
li,
a,
img,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
input,
textarea,
button,
span{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
}
input, select, textarea{
    -webkit-appearance: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 14px;
    font-weight: normal;
}

button {
    outline: none;
}

input[type="radio"]{
    margin: 0 5px 0 0;
}
body,
html {
    display: block;
    height: 100%;
    background: #f2f5f8;
}

body {
    color: #333;
    -webkit-font-smoothing: antialiased;
    font: 14px/1.5 Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
}
ul, li{
    list-style: none;
}
img{
    vertical-align: middle;
}
a{
    color: #333;
    text-decoration: none;
}
.wrap{
    padding-top: 40px;
}
.clearfix:before,
.clearfix:after{
    content: " ";
    display:block;
    height: 0;
    line-height: 0;
    clear: both;
}
.f12{
    font-size: 12px;
}
.f16{
    font-size: 16px;
}
.fl {
    float: left
}
.fr {
    float: right
}
.relative{
    position: relative;
}
.block{
    display: block;
}
.inline-block{
    display: inline-block;
}
.text-center{
    text-align: center;
}
.text-right{
    text-align: right;
}
.valign-m{
    vertical-align: middle;
}
.mt15{
    margin-top: 15px;
}
.mt10{
    margin-top: 10px;
}
.mt5{
    margin-top: 5px;
}
.bg_fff{
    background: #fff;
}
.color_fff{
    color: #fff;
}
.color_000{
    color: #000;
}
.color_666{
    color: #666;
}
.color_gray{
    color: #a5a5a5;
}
.color_yellow{
    color: #f6ff00;
}
.color_yellow2{
    color: #ffb400;
}
.table{
    display: table;
}
.table-row{
    display: table-row;
}
.table-cell{
    display: table-cell;
    vertical-align: top;
}
.w100{
    width: 100%;
}
.h100{
    height: 100%;
}
.b-t-1,.b-r-1,.b-b-1,.b-l-1{
    position: relative;
}
.b-t-1:after{
    content: '';
    border-top: 1px solid #e9e9e9;
    width: 200%; height: 1px;
    position: absolute;
    left: 0; top: 0;
    -webkit-transform:scale(0.5);
    transform:scale(0.5);
    -webkit-transform-origin:0 0;
    transform-origin:0 0;
}
.b-r-1:after{
    content: '';
    border-bottom: 1px solid #e9e9e9;
    width: 1px; height: 200%;
    position: absolute;
    right: 0; top: 0;
    -webkit-transform:scale(0.5);
    transform:scale(0.5);
    -webkit-transform-origin:0 0;
    transform-origin:0 0;
}
.b-b-1:after{
    content: '';
    border-bottom: 1px solid #e9e9e9;
    width: 200%; height: 1px;
    position: absolute;
    left: 0; bottom: 0;
    -webkit-transform:scale(0.5);
    transform:scale(0.5);
    -webkit-transform-origin:0 0;
    transform-origin:0 0;
}
.b-l-1:after{
    content: '';
    border-left: 1px solid #e9e9e9;
    width: 1px; height: 200%;
    position: absolute;
    left: 0; top: 0;
    -webkit-transform:scale(0.5);
    transform:scale(0.5);
    -webkit-transform-origin:0 0;
    transform-origin:0 0;
}
.overflow-hidden{
    overflow: hidden;
}
.clamp1{
    display: block;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.clamp2{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    height: 42px;
}
.clamp3{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    word-break: break-all;
}
.container{
    width: 100%; max-width: 640px;
    margin: 0 auto;
}
/* header */
.header{
    height: 40px;
    line-height: 40px;
    background: #ffb400;
    position: relative;
    position: fixed;
    width: 100%; top: 0; left: 0;
    z-index: 111;
}
.header-title{
    text-align: center;
    color: #fff;
    font-size: 16px;
}
.header-goback,
.header-service{
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    color: #fff;
}
.header-goback{
    left: 10px;
}
.header-service{
    right: 10px;
}
/* title */
h2.title{
    height: 44px; line-height: 44px;
    padding: 0 15px;
    color: #666
}

.data-none{
    padding: 100px 0;
}
/* 推荐 */
.recommend-list{
    padding: 0 15px;
}
.recommend-list img {
    width: 110px;
    height: 110px;
    vertical-align: middle;
}
.recommend{
    width: 32%;
    margin-right: 2%;
    padding: 0 0 10px;
}
.recommend:nth-child(3n){
    margin-right: 0;
}
.recommend-thumbnail{
    width: 100%; height: auto;
}
.act-title{
    text-align: left;
    padding: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* activityList */
.activityList-wrap{
    position: absolute;
    width: 100%; height: 100%;
    top: 0; left: 0;
    padding-top: 40px;
    overflow-y: scroll;
}
.activityList-wrap .item{
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    background: #fff;
    padding: 0 15px;
}
.activityList-wrap .thumbnail-box{
    padding: 10px 10px 10px 0;
}
.activityList-wrap .thumbnail{
    width: 110px; height: auto;
}
.activityList-wrap .item-info{
    padding: 10px 0 10px 10px;
}
.activityList-wrap .desc{
    color: #ababab;
    margin-top: 5px;
}
.activityList-wrap .loading-bottom{
    padding: 10px 0;
    width: 90px;
    margin: 0 auto;
}
@-webkit-keyframes line-spin-fade-loader {
  50% { opacity: 0.3; }

  100% { opacity: 1; }
}

@keyframes line-spin-fade-loader {
  50% { opacity: 0.3; }

  100% { opacity: 1; }
}

.line-spin-fade-loader {
    position: relative;
}
.line-spin-fade-loader > div:nth-child(1) {
top: 6px;
left: 0;
-webkit-animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out; }
.line-spin-fade-loader > div:nth-child(2) {
top: 4px;
left: 4px;
-webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
-webkit-animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out; }
.line-spin-fade-loader > div:nth-child(3) {
top: 0;
left: 6px;
-webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
        transform: rotate(90deg);
-webkit-animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out; }
.line-spin-fade-loader > div:nth-child(4) {
top: -4px;
left: 4px;
-webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
        transform: rotate(45deg);
-webkit-animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out; }
.line-spin-fade-loader > div:nth-child(5) {
top: -6px;
left: 0;
-webkit-animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out; }
.line-spin-fade-loader > div:nth-child(6) {
top: -4px;
left: -4px;
-webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
-webkit-animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out; }
.line-spin-fade-loader > div:nth-child(7) {
top: 0;
left: -6px;
-webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
        transform: rotate(90deg);
-webkit-animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out; }
.line-spin-fade-loader > div:nth-child(8) {
top: 4px;
left: -4px;
-webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
        transform: rotate(45deg);
-webkit-animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out; }
.line-spin-fade-loader > div {
background-color: #000;
border-radius: 2px;
margin: 2px;
-webkit-animation-fill-mode: both;
        animation-fill-mode: both;
position: absolute;
width: 1px;
height: 4px;
}
.line-spin-fade-loader{
    margin: 5px 0 0 10px;
}
/* chart-table */
.chart-table{
    background: #eee;
}
.chart-table th{
    background: #f6f6f6;
    text-align: left;
    font-weight: normal;
}
.chart-table td{
    background: #fff;
}
.chart-table .td-left{
    width: 35%;
    padding: 10px 0;
}
.chart-table .td-right{
    padding: 10px;
}
.chart-table-box{
    padding: 0 15px 15px;
}
/* 按钮 */
.btn{
    height: 42px;
    line-height: 42px;
    background: #ffb400;
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 16px;
    border: none;
    border-radius: 2px;
    font-weight: bold;
}
.btn[disabled]{
    background: #f7db95;
}
/* 表单 */
.form-inputBox{
    background: #fff;
    position: relative;
}
.form-inputBox:after{
    /*content: ''; */
    border: 1px solid #e9e9e9;
    width: 200%; height: 200%;
    position: absolute;
    top: 0; left: 0;
    border-radius: 3px;
    -webkit-transform:scale(0.5);
    transform:scale(0.5);
    -webkit-transform-origin:0 0;
    transform-origin:0 0;
}
.input-box{
    height: 54px;
    padding: 7px 10px;
    position: relative;
}
.input-box:after{
    content: '';
    border-bottom: 1px solid #e9e9e9;
    width: 200%; height: 1px;
    position: absolute;
    left: 0; bottom: 0;
    -webkit-transform:scale(0.5);
    transform:scale(0.5);
    -webkit-transform-origin:0 0;
    transform-origin:0 0;
}
.input-box:last-child:after{
    border-bottom: none;
}
.ui-input{
    border: none;
    width: 100%;
    height: 40px;
    line-height: 32px;
    padding: 4px 5px 4px 30px;
    outline: none;
}
.input-icon{
    position: absolute;
    left: 15px; top: 50%;
    color: #777;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
}
.errorTips{
    position: fixed;
    bottom: 50px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    background: rgba(0,0,0,.6);
    color: #fff;
    max-width: 90%;
    padding: 7px 15px;
    border-radius: 3px;
    font-size: 12px;
    z-index: 3;
}
</style>










