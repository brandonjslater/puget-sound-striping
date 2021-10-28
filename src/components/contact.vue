<template>
  <div id="Contact">
    <h2>Contact</h2>
    <div class="info">
      <h3>Jaysen Yoro, Founder</h3>
        <div class="buttons">
      <a v-bind:href="mailToLink()" class="button button-primary">{{email}}</a>
      <a v-bind:href="telLink()" class="button button-primary">{{phone}}</a>
    </div>
     <p>Jaysen Yoro founded Puget Sound Striping in 2021. With the desire to create and build his own dreams, he decided to go into business for himself. Starting his career as a striper and seal coater, Jaysen has been in the Asphalt and Concrete industry since 2015. He spent three years in the field working and refining his skills as a Striper. He then spent three more years working as an estimator and sales representative before founding Puget Sound Striping.</p>
    </div>
  
    
  </div>
</template>

<script>
export default {
  name: 'contact',
  props:{
    email: String,
    phone: String
  },
  methods:{
    mailToLink: function(){
      return "mailto:"+this.email;
    },
    telLink: function(){
      return "tel:"+this.phone;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("theme.less");
*{
  margin-top:1em;
}
#Contact{
  background: @color-white;
  border-top: @big-border;
  height: 100%;
  text-align: left;
  padding:1em;
  padding-bottom:3em;
}
div:not(#Contact){
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.info{
  p{
    margin-top:2em
  }
}
h2,h3{
  text-align:center;
  margin-bottom:0;
}
ul {
  padding: 0;
}
li {
  margin: 0 2em;
}
.button{
  font-size: 1em !important;
  margin-top: 2em;
}
@media screen and (min-width: 680px) {
  .button{
    font-size: 2em !important;
  }
}
</style>
