<template>
  <img alt="Vue logo" src="https://media.istockphoto.com/photos/teamwork-pavement-asphalt-road-marking-paint-and-striping-with-picture-id487565318?s=612x612">
  <firstPage 
    msg="Puget Sound Striping"
    subMsg="Some Subtext"/>
</template>

<script>
import firstPage from './components/firstPage.vue';

export default {
  name: 'application',
  components: {
    firstPage
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
  margin-top: 60px;
}
</style>
