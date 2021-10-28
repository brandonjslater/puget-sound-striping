<template>
  <div class="nav-container">
    <div class="nav-bar">
      <div class="nav-logo">
        <a href="#Home"><img class="logo" src="../assets/logo.svg" /></a>
      </div>
      <div class="nav-title">
        <h1>{{ title }}</h1>  
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
    background: @color-white;
    border-bottom: @big-border;
    display: block;
    overflow: hidden;
    .nav-logo {
      float:left;
      img{
        height:100%;
        max-height: 75px;
        padding: 1em;
        float:left;
      }      
    }
    .nav-title{
      width: 50%;
      height: 100%;
      float:left;
      text-align: left;
      vertical-align: middle;
      
      h1 {
        color: @color-green;
        
      }
      @media screen and (min-width: 680px) {
        h1{
          margin-top:1.1em;
        }
      }

    }
    .nav-menu{
      cursor: pointer;
      float:left;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      padding: 0.75em;
      font-size: 2em;
      width:25%;
      .menu {        
        float:right;
        color: @color-green;
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
      // border-bottom:@big-border;
      a:first-child{
        li{
          border-top:  @tiny-border;
        }        
      }
      a{
        color: @color-green;
        text-decoration: none;
        li{
          background: @color-white;
          border-bottom:  @tiny-border;
          padding: 1em;
          font-weight: bold;
        }
        li:hover{
          background:@color-light-green;
        }
        
      }
      
    }
}
</style>