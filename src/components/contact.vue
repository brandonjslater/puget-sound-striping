<template>
  <div id="Contact">
    <h2>Contact</h2>
  </div>
</template>

<script>
export default {
  name: 'Contact'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("theme.less");
#Contact{
  background: @color-white;
  border-top: @big-border;
  height: 100vh;
  text-align: left;
  padding:1em;
  padding-bottom:3em;
}

h2 {
  text-align:center;
}
ul {
  padding: 0;
}
li {
  margin: 0 2em;
}
</style>
