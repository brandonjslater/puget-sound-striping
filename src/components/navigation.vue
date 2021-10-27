<template>
  <div class="nav-container">
    <div class="nav-bar">
      <div class="nav-logo">
        <a href="#Home"><img class="logo" src="../assets/logo.png" /></a>
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
.nav-container{
  position: fixed;
  width: 100%;
  .nav-bar {
    // padding: 0.5em;
    border-bottom: 10px solid green;
    display: block;
    background: white;
    overflow: hidden;
    .nav-logo {
      width:25%;
      float:left;
      img{
        max-height: 50px;
        padding: 1em;
        float:left;
      }      
    }
    .nav-title{
      width: 50%;
      float:left;
      h1 {
        color: green;                
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
      border-bottom: 10px solid green;
      li {
        padding: 1em;
      }
    }
}
</style>