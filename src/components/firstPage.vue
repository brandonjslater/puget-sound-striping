<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ slogan }}</h2>
    <p>{{ about }}</p>
    <img v-bind:src="logo">
  </div>
</template>

<script>
export default {
  name: 'firstPage',
  props: {
    msg: String,
    slogan: String,
    about: String,
    logo: String
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div{
  width: 100%;
  height: 100vh;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
