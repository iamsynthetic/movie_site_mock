<template>
  <div id="app">
    <div id="nav">
      <a @click="clickNavArrows(true)">UP</a>
      <a @click="clickNavArrows(false)">DOWN</a>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> -->
    </div>
      <div class="columns is-mobile">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
      </div>
      <svg class="svg-defs">
        <defs>
          <clipPath id="clipping1">
            <rect id="rectangle1" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping2">
            <rect id="rectangle2" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
        </defs>
      </svg>
      <app-about id="zp1"></app-about>
      <app-home id="zp2"></app-home>
      <!-- <router-view/> -->
  </div>
</template>

<script>

import { TweenMax } from 'gsap'
import router from './router'
import About from './views/About'
import Home from './views/Home'

export default {
  name:'App',
  data(){
    return {
      pagenum: 1,
      first: 0,
      last: 5
    }
  },
  components:{
    'appAbout': About,
    'appHome': Home
  },
  computed:{

  },
  created(){

  },
  mounted(){

  },
  methods:{
    clickNavArrows(bool=false){
      //router.push(url)
      console.log('bool is: ' + bool)
      console.log('pagenum is: ' + this.pagenum)
      // if(bool == true){
      //   if(this.pagenum != this.first){
      //     this.pagenum--
      //     console.log('pagenum-- is: ' + this.pagenum)
      //   }
      // }
      // else{
      //   if(this.pagenum != this.last){
      //     this.pagenum++
      //     console.log('pagenum++ is: ' + this.pagenum)
      //     //transition according to pagenum tweenmax.to(page[pagenum], .5, {y:100px})
      //   }
      // }

      if(this.pagenum == 1){
        TweenMax.to("#rectangle1", 2, {scaleY: 0, onComplete:this.changepage, onCompleteParams:['add']});
      }
      if(this.pagenum == 2){
        TweenMax.to("#rectangle2", 2, {scaleY: 0});
        this.pagenum = this.pagenum-1
      console.log('pagenum is: ' + this.pagenum)
      }
    },
    changepage:function(amount){
        if(amount == 'add'){
          this.pagenum = this.pagenum+1
          console.log('pagenum is: ' + this.pagenum)
        }
        else
        {
          this.pagenum = this.pagenum-1
          console.log('pagenum is: ' + this.pagenum)
        }
      }
  }
}

</script>

<style lang="scss">
@import './styles.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  z-index:1;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container{
  position:relative;
  width:100vw;
  height:100%;
  background-color:rgb(126, 126, 129);
}
.position1{
  top:0px;
  opacity:.5;
  height:100vh;
  position:relative;
}
.svg-defs {
  position: absolute;
}

#zp1{
  z-index:-1;
  top:0px;
  opacity:1;
  width:100vw;
  height:100vh;
  background-color:$danger;
  position:absolute;
  clip-path: url(#clipping1);
}
#zp2{
  z-index:-2;
  top:0px;
  opacity:1;
  width:100vw;
  height:100vh;
  background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping2);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
}

.element {
  clip-path: inset(10px 20px 30px 40px);
  /* Also can take single values to make all sides the same, or 2 values (vert/horz), or 3 values (top/horz/bottom). */
}
</style>
