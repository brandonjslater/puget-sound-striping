<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ subMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'firstPage',
  props: {
    msg: String,
    subMsg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
