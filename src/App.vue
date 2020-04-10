<template>
  <div id="app">
    <router-view/>
    <div id="fullScreen">
       <div class="landscape">
        <div class="phoneIcon">
          <img src="./assets/icon/phone.svg" alt="PHONE">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes rotatePhone
{
    from {transform: rotate(0deg);}
    to {transform: rotate(90deg);}
}
 
@-webkit-keyframes rotatePhone 
{
    from {transform: rotate(0deg);}
    to {transform: rotate(90deg);}
}

#fullScreen{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  z-index:999999999;
  background-color: black;
  display: none;
  .landscape{
    position: absolute;
    top:40%;
    left:0;
    right:0;
    margin:auto;
    width:40px;
    .phoneIcon{
      width:40px;
      animation: rotatePhone 1s infinite;
      img{
        width:100%;
      }
    }
  }
}
@media screen  and (orientation: landscape){
  #fullScreen{
    display: block;
  }
}
</style>
