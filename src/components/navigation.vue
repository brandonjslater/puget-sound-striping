<template>
  <div class="nav-container">
    <div class="nav-title">
      <a href="#Home"><img class="logo" src="../assets/logo.png" /></a>
      <h1>{{ title }}</h1>
      <a class="menu" @click="doSomething">
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </a>
    </div>
    <ul id="Links"  @click="doSomething">
      <li><a href="#Home">Home</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li><a href="#About">About</a></li>
    </ul>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

export default {
  name: "navigation",
  props: {
    title: String,
  },
  methods: {
    doSomething() {
      var display = document.getElementById("Links").style.display;
      if (display === "none") {
        document.getElementById("Links").style.display = "block";
        return;
      }

      document.getElementById("Links").style.display = "none";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav-container{
  position: fixed;
  width: 100%;
  .nav-title {
    padding: 0.5em;
    border-bottom: 10px solid green;
    display: flex;
    background: white;
    overflow: hidden;
    img {
      max-height: 50px;
      padding: 1em;
    }
    h1 {
      display: inline-flex;
      color: green;
      width: 100%;
      margin-right: 2em;
    }
    .menu {
      cursor: pointer;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      padding: 1em;
      font-size: 2em;
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
