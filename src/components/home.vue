<template>
<div id="Home">
  <div class="info">
    <h2>{{ slogan }}</h2>
    <a href="#Contact" class="button button-primary">Contact</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  props: {
    slogan: String,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("theme.less");
div{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#Home{
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border: 0px;
  color: white;
  width: 100%;
  height: 100vh;
  a{
    text-decoration: none;
  }
  h2{
    color: white;
    font-size: 4em;
  }
  .info{
    height:100%;
    width:100%;
    color: white;
    background: rgba(0,0,0,0.65);
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
