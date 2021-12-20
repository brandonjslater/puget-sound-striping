<template>
  <div id="About">
    <div class="title">
      <h2>About</h2>
    </div>
    <div class="info-wrapper">
      <div class="info">
        <h3>Specialties</h3>
        <ul>
          <li>Parking Lot Re-Striping</li>
          <li>New Layout Striping</li>
          <li>Fire Lane Striping</li>
          <li>Curb Striping</li>
          <li>Stencilling</li>
          <li>Wheelstops</li>
          <li>Signage</li>
          <li>Pressure Washing</li>
          <li>Hot Tape and Pre-Mark Thermoplastic</li>
        </ul>
        <h3>Goal</h3>
        <p>Prolong; Save; Service;</p>
        <p>
          Puget Sound Striping's goal is to PROLONG the look and functionality
          of your parking lot, SAVE you money, and to provide you with top tier
          SERVICE in the process.
        </p>
        <h3>Mission</h3>
        <p>
          We are excited to service the Puget Sound by providing an inexpensive
          solution for parking lot rejuvenation. Re-striping is one of the
          easiest ways to to make a faded parking lot pop again! No matter the
          condition of your parking lot, re-striping is a fast and easy solution
          to renew your curb appeal and functionality.
        </p>
        <p>
          Here at Puget Sound Striping, we take pride in our service and
          accommodating abilities. We will work day or night, weekday or weekend
          to ensure that your business is least affected by our work. We want to
          ensure that your parking lot receives the attention it needs in order
          to service your requests.
        </p>
      </div>
      <div class="logo">
        <img alt="Puget Sound Striping Logo" src="../assets/logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("theme.less");
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#About {
  background: @color-blue;
  border-top: @big-border;
  color: white;
  height: 100%;
  text-align: left;
  padding: 1em;
  padding-bottom: 3em;
  flex-direction: column;
  .title {
    width: 100%;
  }
  .info-wrapper {
    width: 100%;
    flex-direction: row;
    .info,.logo{
      *{
        width: 100%;
        margin: 5px 1em;
      }
    }
    .info{
      width:70%
    }
    .logo {
      width: 30%;
    }
  }
}

h2 {
  text-align: center;
  color: @color-orange;
}
ul {
  padding: 0;
}
li {
  margin: 0 2em;
}
</style>
