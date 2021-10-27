<template>
<div>
  <h1>{{title}}</h1>
</div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    title: String
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  div{
    text-align: left;
    padding: 0 1em;
  }
</style>
