<template>
  <firstPage
    msg="Puget Sound Striping"
    slogan="Prolong, Save, Service"
    about="Puget Sound Striping's goal is to PROLONG the look and functionality of your parking lot, SAVE you money, and to provide you with top tier SERVICE in the process."
    logo="https://media.istockphoto.com/photos/teamwork-pavement-asphalt-road-marking-paint-and-striping-with-picture-id487565318?s=612x612"
    />
    <about/>
</template>

<script>
import firstPage from './components/firstPage.vue';
import about from './components/about.vue';

export default {
  name: 'application',
  components: {
    firstPage,
    about
  }
};
</script>

<style lang="less">
img{
  max-width:100%;
}
#app {
  font-family: Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
