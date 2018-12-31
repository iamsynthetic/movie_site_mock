<template>
  <div id="app">
    <div class="header-gradient">
    </div>
    <!--<div class="picture-border">
    </div> -->
    <div id="nav">
      <!-- <div class="block">
            <b-icon icon="account" size="is-small"></b-icon>
      </div> -->
      <ul>
        <li>
          <a @click="clickNavArrows(false)"><b-icon class="uparrow" icon="chevron-up" size="is-medium" type="is-warning"></b-icon></a>
        </li>
        <li>
          <p class="nav-title">scroll to navigate</p>
        </li>
        <li>
          <a @click="clickNavArrows(true)"><b-icon icon="chevron-down" size="is-medium" type="is-warning"></b-icon></a>
        </li>
      </ul>
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
          <clipPath id="clipping3">
            <rect id="rectangle3" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping4">
            <rect id="rectangle4" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping5">
            <rect id="rectangle5" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping6">
            <rect id="rectangle6" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping7">
            <rect id="rectangle7" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
        </defs>
      </svg>
      <app-home id="zp1"></app-home>
      <app-about id="zp2"></app-about>
      <app-page3 id="zp3"></app-page3>
      <app-page4 id="zp4"></app-page4>
      <app-page5 id="zp5"></app-page5>
      <app-page6 id="zp6"></app-page6>
      <app-page7 id="zp7"></app-page7>
      <!-- <router-view/> -->
      <div class="footer-gradient">
    </div>
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
import Page6 from './views/Page6'
import Page7 from './views/Page7'

export default {
  name:'App',
  data(){
    return {
      pagenum: 1,
      first: 0,
      last: 5,
      isbtndisabled:false
    }
  },
  components:{
    'appHome': Home,
    'appAbout': About,
    'appPage3': Page3,
    'appPage4': Page4,
    'appPage5': Page5,
    'appPage6': Page6,
    'appPage7': Page7
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
      
      //working perfect.

      if(bool == true){
        
        console.log('down arrow')
        if(this.isbtndisabled == false){
          
          this.isbtndisabled = true
          
           if(this.pagenum == 7){
             console.log('its 7')
             this.isbtndisabled = false
          }
          else
          {
            TweenMax.to('#zp'+String(this.pagenum), 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.from('#zp'+String(this.pagenum+1), 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle'+String(this.pagenum), 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle'+String(this.pagenum)]})
          }
          // ///perfect
          // if(this.pagenum == 1){
          //     TweenMax.to('#zp1', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.from('#zp2', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle1', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle1']})
          // }
          // else if(this.pagenum == 2){
          //     TweenMax.to('#zp2', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.from('#zp3', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle2', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle2']})
          // }  
          // else if(this.pagenum == 3){
          //     TweenMax.to('#zp3', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.from('#zp4', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle3', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle3']})
          // }  
          // else if(this.pagenum == 4){
          //     TweenMax.to('#zp4', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.from('#zp5', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle4', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle4']})
          // }
          // else if(this.pagenum == 5){
          //     TweenMax.to('#zp5', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.from('#zp6', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle5', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle5']})
          // }
          // else if(this.pagenum == 6){
          //     TweenMax.to('#zp6', 1, {y:'-50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.from('#zp7', 1, {y:'50%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle6', 1.5, {delay:.5, scaleY:0, ease:Expo.easeOut, force3D:false, onComplete:this.changepage, onCompleteParams:['add', '#rectangle6']})
          // }
        }
      }
      else if(bool == false){

        if(this.isbtndisabled == false){
          
          this.isbtndisabled = true
          console.log('up arrow')

          if(this.pagenum == 1){
            console.log('its 1')
            this.isbtndisabled = false
          }
          else
          {
            TweenMax.from('#zp'+String(this.pagenum-1), 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#zp'+String(this.pagenum), 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
            TweenMax.to('#rectangle'+String(this.pagenum-1), 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle'+String(this.pagenum-1)]})
          }
          // ///perfect
          // if(this.pagenum == 2){
          //     TweenMax.from('#zp1', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#zp2', 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle1', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle1']})
          // }
          // ///need to fix this transition
          // else if(this.pagenum == 3){
          //     TweenMax.from('#zp2', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#zp3', 1, {y:'40%',delay:.1, ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle2', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle2']})
          // }  
          // else if(this.pagenum == 4){
          //     TweenMax.from('#zp3', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#zp4', 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle3', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle3']})
          // }  
          // else if(this.pagenum == 5){
          //     TweenMax.from('#zp4', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#zp5', 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle4', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle4']})
          // }
          // else if(this.pagenum == 6){
          //     TweenMax.from('#zp5', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#zp6', 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle5', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle5']})
          // }
          // else if(this.pagenum == 7){
          //     TweenMax.from('#zp6', 1, {y:'-40%', ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#zp7', 1, {y:'40%', delay:.1, ease:Expo.easeInOut, force3D:false})
          //     TweenMax.to('#rectangle6', 1, {scaleY:1, ease:Expo.easeInOut, force3D:false, onComplete:this.changepage, onCompleteParams:['subtract', '#rectangle6']})
          // } 
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
      //TweenMax.set(mask, {scaleY:0});

      TweenMax.set('#zp1', {css: {y:'0%'}});
      TweenMax.set('#zp2', {css: {y:'0%'}});
      TweenMax.set('#zp3', {css: {y:'0%'}});
      TweenMax.set('#zp4', {css: {y:'0%'}});
      TweenMax.set('#zp5', {css: {y:'0%'}});
      TweenMax.set('#zp6', {css: {y:'0%'}});
      TweenMax.set('#zp7', {css: {y:'0%'}});
      this.isbtndisabled = false
    }
  }
}

</script>

<style lang="scss">
@import './styles.scss';

body {
    overflow:hidden;
  //   .picture-border{
  width:100vw;
  height:100vh;
  // border:30px solid black;
  border-top:20px solid black;
  border-bottom:20px solid black;
  // position:absolute;
  // float:left;
}

::-webkit-scrollbar { 
    display: none; 
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  z-index:10;
  float:left;
  position:absolute;
  margin:auto;
  bottom:0;
  margin-bottom:50px;
  width:100%;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.uparrow{
  padding:0px;
}
.nav-title{
  color:$warning;
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
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping1);
  background: url(./assets/food/bbq.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp2{
  z-index:-2;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping2);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food/cheese.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp3{
  z-index:-3;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping3);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food/dessert.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp4{
  z-index:-4;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping4);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food/fries.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp5{
  z-index:-5;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping5);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food/grapes.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp6{
  z-index:-6;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping6);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food/spoon_spice.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp7{
  z-index:-7;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping7);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food/pizza.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}

.element {
  clip-path: inset(10px 20px 30px 40px);
  /* Also can take single values to make all sides the same, or 2 values (vert/horz), or 3 values (top/horz/bottom). */
}

.header-gradient{
  z-index:1;
  float:left;
  width:100%;
  height:70px;
  top:20px;
  position:fixed;
  background-color:black;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
  background: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
}

.footer-gradient{
  float:left;
  width:100%;
  height:70px;
  position: fixed;
  bottom:20px;
  background-color:black;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,1+100 */
  background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 10  0%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
}

// .picture-border{
//   width:100vw;
//   height:100vh;
//   border:30px solid black;
//   position:absolute;
//   float:left;
// }

</style>
