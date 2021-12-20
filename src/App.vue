<template>
  <navigation 
    title="Puget Sound Striping"
  />

  <home
    slogan="Prolong - Save - Service"
    about="Puget Sound Striping's goal is to PROLONG the look and functionality of your parking lot, SAVE you money, and to provide you with top tier SERVICE in the process."
    logo="assets/background.png"
  />

  <contact
    email="yoro@pugetsoundstriping.com"
    phone="(360) 632-8947"
  />

  <about/>
</template>

<script>
import navigation from './components/navigation.vue';
import home from './components/home.vue';
import contact from './components/contact.vue';
import about from './components/about.vue';

export default {
  name: 'application',
  components: {
    navigation,
    home,
    contact,
    about
  }
};
</script>
<style lang="less">
@import url("./components/theme.less");
body {
  margin: 0px !important;
  padding: 0px !important;
  background: black;
}
h2{
  color: @brand-primary;
}
#app {
  margin: 0px !important;
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div{
  scroll-margin-top: 180px;
}
@media screen and (min-width: 400px) {
  div{
    scroll-margin-top: 120px;
  }
 
}
@media screen and (min-width: 680px) {
  div{
    scroll-margin-top: 92px;
  }
}

</style>
