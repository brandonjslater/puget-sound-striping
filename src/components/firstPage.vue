<template>
<div>
  <div class="info">
    <h2>{{ slogan }}</h2>
    <p>{{ about }}</p>
    <input type="button" value="inquire"/>
  </div>
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
  .info{
    color: white;
    background: rgba(0,0,0,0.5);
    h1,h2,h3,h4,h5{
      text-shadow: 2px 2px black;
      width: 100%;
    }    
  }
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
