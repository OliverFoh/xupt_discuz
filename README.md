# 校园百科社区

[TOC]

## 前言

本应用是以小程序的形式，致力于创造一个属于西安邮电大学自己的校园线上问答社区，方便学生查询或回答日常存在的问题，主要在学习，学校，学术等这几方面的问题，为大家在校生活提供便利，给大家创造一个安全可靠的问答解疑的环境。

由于之前做的时候一直处于渣渣水平，所以就没有搭后台，一直是用[知晓云](https://cloud.minapp.com/)提供的Paas功能，省去了搭建后端的步骤（估计这也是以后个人开发者的发展趋势吧~）,不过好歹经过自己最后的努力，还是给做出来了。后来拿着这个去参加微信小程序开发大赛，但是没有后话了：>，不过还是学习到的东西挺多的，最起码对前端这一块有了更多了解，同时也对团队成员之间的分工协调有了更多的经验（当时找了一个UI设计的同学，还有一个写介绍文档，一个学弟和我一块开发）。这算是我第一次正式的和别的人做开发吧，确实刚开始有好多问题不懂（也可以理解，毕竟那会都是大一大二），但是后来慢慢做起来就顺手多了，总之虽然最终没能获奖，但是这次经历却对我来说非常可贵。

## 应用概览

- 欢迎页
![欢迎页](https://i.loli.net/2020/01/12/zvQwrlCUPE2kcGA.png)

- 首页
![首页](https://i.loli.net/2020/01/12/GqsDvZVCmBcrNJH.png)

- 信息发布页
![信息发布页面](https://i.loli.net/2020/01/12/CV3lPw1mETcLFxu.png)

- 百科页
![百科页面](https://i.loli.net/2020/01/12/K1YyZXpFqhTRG82.png)

- 通知页
![通知页](https://i.loli.net/2020/01/12/YWTGVOaN9dbFLng.png)

- 个人信息页
![个人信息页面](https://i.loli.net/2020/01/12/eRASb4JZWI9rkfD.png)

## 技术细节

### 技术方案

邮我问小程序在设计之初就是立足于简洁、高效的理念，因此在为了节约开发成本，前端使用了微信小程序官方Mina框架，同时为了使UI样式看起来更加统一，使用了Wux-Weapp第三方UI组件库，后端则使用了知晓云后端云存储小程序使用过程中用到的数据，同时在涉及到用户数据的敏感操作时使用了云函数，进一步提高了数据的安全性。另外，为了减少网络请求，节省服务器资源，在一些地方使用了缓存机制，将一些热数据和静态数据缓存起来，从而为用户提供了流畅的使用体验。

### 项目结构

- **dist**

  第三方UI库样式，包含按钮、文本框、提示框等常用组件

- **icons**

  自定义图标，主要是引用了一些阿里图标库的UI作为补充

- **pages**

  页面文件，单个页面包含三个基础文件

  - page.wxml    实现页面超文本显示，类似于html
  - page.js     实现页面基本逻辑，包括数据绑定等功能
  - page.wxss     页面层叠样式文件，负责页面内容显示样式

- **app.js**

  负责应用整体逻辑，第一次打开时注册，包含应用一些系统功能调用与全局变量注册等功能实现

- **app.json**

  注册应用中所有页面，定义窗口，状态切换栏、及第三方组件等

- **app.wxss**

  全局样式注册及第三方UI样式引入

### 交互设计

小程序整体颜色风格呈现蓝色风格，其中首页有一个蓝色的悬浮按钮，由于考虑到用户在上拉加载了大量数据后回到顶部需要持续下滑，从而使得体验不佳，因此设计了蓝色的悬浮按钮，点开后再点击向上箭头可以直接回到页面顶部。另外，在开始设计的时候将发帖提问独占为一个tab页面，显得有些主次不分，后经调整，将其与回到顶部按钮放置在悬浮按钮中，从而实现隐藏式设计。在速查页面，为了更加清晰的呈现出各个分类，因而选择九宫格布局，用户可以通过问题所属的分类去查询对应的问题。同时，在个人中心页面，正上方显示的是用户的头像（添加阴影从而实现悬浮视觉效果），个人中心列表选项都是简洁的灰色UI风格，从而给用户呈现柔和、整体、统一的视觉效果。

## 作品演示

[邮我问小程序](https://1drv.ms/v/s!ApkMtnzNxlVoesixssQv6oz57bc?e=naYPZT)
