<template>
  <div id="app">
    <div id="nav">
      <a @click="clickNavArrows(true)">UP</a>
      <a @click="clickNavArrows(false)">DOWN</a>
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
            <rect id="rectangle1" x="0" y="0" width="100vw" height="120vh" />
          </clipPath>
          <clipPath id="clipping2">
            <rect id="rectangle2" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping3">
            <rect id="rectangle3" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping4">
            <rect id="rectangle4" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping5">
            <rect id="rectangle5" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
        </defs>
      </svg>
      <app-home id="zp1"></app-home>
      <app-about id="zp2"></app-about>
      <app-page3 id="zp3"></app-page3>
      <app-page4 id="zp4"></app-page4>
      <app-page5 id="zp5"></app-page5>
      <!-- <router-view/> -->
  </div>
</template>

<script>

import { TweenMax } from 'gsap'
//import router from './router'
import Home from './views/Home'
import About from './views/About'
import Page3 from './views/Page3'
import Page4 from './views/Page4'
import Page5 from './views/Page5'

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
    'appHome': Home,
    'appAbout': About,
    'appPage3': Page3,
    'appPage4': Page4,
    'appPage5': Page5
  },
  computed:{

  },
  created(){

  },
  mounted(){

  },
  methods:{
    clickNavArrows(bool=false){
      console.log('bool is: ' + bool)
      console.log('pagenum is: ' + this.pagenum)

      if(bool == true){
        ///perfect
        if(this.pagenum == 1){
          
            TweenMax.to('#zp1', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.from('#zp2', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle1', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle1']})
          
          // TweenMax.to('#zp1', 1, {y:'-90%', ease:Expo.easeInOut, force3D:false})
          // TweenMax.to("#rectangle1", 2.2, {delay:.15, scaleY:0, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle1']});
          // TweenMax.from('#zp2', 1, {y:'80%', ease:Expo.easeInOut, force3D:false})
        }
        else if(this.pagenum == 2){
            TweenMax.to('#zp2', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.from('#zp3', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle2', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle2']})
        }  
        else if(this.pagenum == 3){
            TweenMax.to('#zp3', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.from('#zp4', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle3', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle3']})
        }  
        else if(this.pagenum == 4){
            TweenMax.to('#zp4', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.from('#zp5', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle4', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle4']})
        }  
      }
      else if(bool == false){
        ///perfect
        if(this.pagenum == 2){
            TweenMax.from('#zp1', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#zp2', 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle1', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle1']})

          // TweenMax.from('#zp1', 1, {y:'-80%', delay:.15, ease:Expo.easeOut, force3D:false})
          // TweenMax.to("#rectangle1", 2.2, {scaleY: 1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract']});
          // TweenMax.to('#zp2', 1, {y:'80%', delay:.15, ease:Expo.easeInOut, force3D:false})
          
        }
        ///need to fix this transition
        else if(this.pagenum == 3){
            TweenMax.from('#zp2', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#zp3', 1, {y:'40%',delay:.1, ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle2', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle2']})
        }  
        else if(this.pagenum == 4){
            TweenMax.from('#zp3', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#zp4', 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle3', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle3']})
        }  
        else if(this.pagenum == 5){
            TweenMax.from('#zp4', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#zp5', 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle4', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle4']})
        }  
      }
    },
    changepage:function(amount, mask){
      if(amount == 'add'){
        this.pagenum = this.pagenum+1
        console.log('pagenum is: ' + this.pagenum)
      }
      else if(amount == 'subtract')
      {
        this.pagenum = this.pagenum-1
        console.log('pagenum is: ' + this.pagenum)
      }
      TweenMax.set('#zp2', {css: {y:'0%'}});
      TweenMax.set('#zp1', {css: {y:'0%'}});
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
  top:-10vh;
  opacity:1;
  width:100vw;
  height:120vh;
  background-color:$danger;
  position:absolute;
  clip-path: url(#clipping1);
  background: url(./assets/motorcycle_bg.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp2{
  z-index:-2;
  top:10%;
  opacity:1;
  width:100vw;
  height:120vh;
  background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping2);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/graffiti_bg.jpg) no-repeat center center fixed; 
  -webkit-background-size: 120%;
  -moz-background-size:  120%;
  -o-background-size:  120%;
  background-size:  120%;
}
#zp3{
  z-index:-3;
  top:0%;
  opacity:1;
  width:100vw;
  height:120vh;
  background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping3);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/camera_bg.jpg) no-repeat center center fixed; 
  -webkit-background-size: 120%;
  -moz-background-size:  120%;
  -o-background-size:  120%;
  background-size:  120%;
}
#zp4{
  z-index:-4;
  top:-10%;
  opacity:1;
  width:100vw;
  height:120vh;
  background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping4);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/purpleface_sized_test.jpg) no-repeat center center fixed; 
  -webkit-background-size: 120%;
  -moz-background-size:  120%;
  -o-background-size:  120%;
  background-size:  120%;
}
#zp5{
  z-index:-5;
  top:-10%;
  opacity:1;
  width:100vw;
  height:120vh;
  background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping5);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/skateboard_test.jpg) no-repeat center center fixed; 
  -webkit-background-size: 120%;
  -moz-background-size:  120%;
  -o-background-size:  120%;
  background-size:  120%;
}

.element {
  clip-path: inset(10px 20px 30px 40px);
  /* Also can take single values to make all sides the same, or 2 values (vert/horz), or 3 values (top/horz/bottom). */
}
</style>
