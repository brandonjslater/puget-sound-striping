<template>
<div>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ slogan }}</h2>
    <p>{{ about }}</p>
  </div>
   <input type="button" value="inquire"/>
</div>
</template>

<script>
export default {
  name: 'firstPage',
  props: {
    msg: String,
    slogan: String,
    about: String
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div{
  background-image: url('../assets/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  border: 0px;
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
