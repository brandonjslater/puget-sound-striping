<template>
  <div class="nav-container">
    <div class="nav-bar">
      <div class="nav-logo">
        <a href="#Home"><img alt="puget sound striping logo" class="logo" src="../assets/icon.png" /></a>
      </div>
      <div class="nav-title">
        <h1>{{ title }}</h1>  
        <img class="logo" src="../assets/pss.png" />
      </div>
      <div class="nav-menu">
        <a class="menu" @click="toggleNav">
          <font-awesome-icon icon="bars"></font-awesome-icon>
        </a>
      </div>
      
    </div>

    <ul id="Links"  @click="toggleNav">
      <a href="#Home"><li>Home</li></a>
      <a href="#Contact"><li>Contact</li></a>
      <a href="#About"><li>About</li></a>
    </ul>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

var nav = {};

nav.init = function(){
  nav.collapse();
};

nav.getState = function(){
  return document.getElementById("Links").style.display;
};

nav.expand = function(){
  document.getElementById("Links").style.display = "block";
};

nav.collapse = function(){
  document.getElementById("Links").style.display = "none";
};

nav.toggle = function(){
  var state = nav.getState();
    if (state === "none") {
      nav.expand();
      return;
    }
  nav.collapse();
}

library.add(faBars);
window.onload = nav.init;

export default {
  name: "navigation",
  props: {
    title: String,
  },
  methods: {
    toggleNav() {
      nav.toggle();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("theme.less");
.nav-container{
  position: fixed;
  width: 100%;  
  .nav-bar {
    background: black;
    border-bottom: @big-border;
    display: flex;
    overflow: hidden;
    .nav-logo {
      float:left;
      // max-width: 107px;
      img{
        height:100%;
        max-height: 90px;
        margin: 1em;
        float:left;
        display: none;
      }   
      @media screen and (min-width:350px) {
        img{
          display: block;
        }
      }
    }
    .nav-title{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        display: none;
        
      }
      img{
        width: 60%;
        top:50%;
        position: absolute;
        margin: auto;
        transform: translateY(-50%);
        margin-left: 2em;
      }
      @media screen and (min-width:350px) {
        img{
          width: 40%;
          margin: auto;
        }
      }
      @media screen and (min-width:450px) {
        img{
          width: 50%;
        }
      }
      @media screen and (min-width:650px) {
        img{
          position: relative;
          max-height: 75px;
          transform: translateY(0);
          top: auto;
          margin: 1em;
          width: auto;
        }
      }
      @media screen and (min-width:750px) {
        img{
          position: relative;
          max-height: 90px;
          transform: translateY(0);
          top: auto;
          margin: 1em;
          width: auto;
        }
      }
      
    }
    .nav-menu{
      cursor: pointer;
      display: flex;
      padding: 1em;
      font-size: 2.5em;
      text-align: right;
      .menu {        
        float:right;
        color: @brand-primary;
      }
    }
    
    
  }

  #Links {
      display: none;
      margin: 0px;
      padding: 0px;
      background: white;
      list-style: none;
      position: relative;
      font-size: 2em;
      // border-bottom:@big-border;
      a:first-child{
        li{
          border-top:  @tiny-border;
        }        
      }
      a{
        color: @brand-primary;
        text-decoration: none;
        li{
          background: black;
          border-bottom:  @tiny-border;
          padding: 1em;
          font-weight: bold;
        }
        li:hover{
          background:@brand-primary;
          color:black
        }
        
      }
      
    }
}
</style>