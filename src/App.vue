<template>
  <navigation 
    title="Puget Sound Striping"
  />
  <firstPage
    slogan="Prolong, Save, Service"
    about="Puget Sound Striping's goal is to PROLONG the look and functionality of your parking lot, SAVE you money, and to provide you with top tier SERVICE in the process."
    logo="assets/background.png"
    />
    <about/>
</template>

<script>
import navigation from './components/navigation.vue';
import firstPage from './components/firstPage.vue';
import about from './components/about.vue';

export default {
  name: 'application',
  components: {
    navigation,
    firstPage,
    about
  }
};
</script>
<style lang="less">
body {
  margin: 0px !important;
  padding: 0px !important;
}
#app {
  margin: 0px !important;
  font-family: Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
