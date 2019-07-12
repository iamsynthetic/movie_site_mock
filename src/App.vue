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
          <a @mouseover="mouseoverNavArrows()" @mouseout="mouseoutNavArrows()" @click="clickNavArrows(false)"><b-icon class="uparrow" icon="chevron-up" size="is-medium"></b-icon></a>
        </li>
        <li>
          <p class="nav-title">scroll to navigate</p>
        </li>
        <li>
          <a @mouseover="mouseoverNavArrows()" @mouseout="mouseoutNavArrows()" @click="clickNavArrows(true)"><b-icon class="downarrow" icon="chevron-down" size="is-medium"></b-icon></a>
        </li>
      </ul>
    </div>
    <!-- <div class="columns is-mobile">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
    </div> -->
    <svg class="svg-defs">
        <defs>
          <clipPath id="clipping1">
            <rect id="rectangle1" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping2">
            <rect id="rectangle2" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping3a">
            <rect id="rectangle3" x="0" y="0" width="50vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping3b">
            <rect id="rectangle3" x="0" y="0" width="50vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping4">
            <rect id="rectangle4" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping5">
            <rect id="rectangle5" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping6a">
            <rect id="rectangle6" x="0" y="0" width="33vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping6b">
            <rect id="rectangle6" x="0" y="0" width="34vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping6c">
            <rect id="rectangle6" x="0" y="0" width="33vw" height="100vh" />
          </clipPath>
          <clipPath id="clipping7">
            <rect id="rectangle7" x="0" y="0" width="100vw" height="100vh" />
          </clipPath>
        </defs>
      </svg>
      <app-home id="zp1"></app-home>
      <app-about id="zp2"></app-about>
      <app-page3 id="zp3" class="zp3a"></app-page3>
      <app-page3 id="zp3" class="zp3b"></app-page3>
      <app-page4 id="zp4"></app-page4>
      <app-page5 id="zp5"></app-page5>
      <app-page6 id="zp6" class="zp6a"></app-page6>
      <app-page6 id="zp6" class="zp6b"></app-page6>
      <app-page6 id="zp6" class="zp6c"></app-page6>
      <app-page7 id="zp7"></app-page7>
      <!-- <router-view/> -->
      <div class="footer-gradient">
    </div>
  </div>
</template>

<script>

import { TweenMax } from 'gsap'
//import router from './router'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
    ...mapGetters(['checkpagenumber'])
  },
  created(){
    //need var self = this because 'this' is binding inside the callback which is not pointing to the vue instance
    var self = this;
    window.addEventListener("wheel", function(e) {
        var dir = Math.sign(e.deltaY);
        console.log(dir);
        if(dir == 1){
          //down
          self.clickNavArrows(true)
        }
        else{
          //up
          self.clickNavArrows(false)
        }
    });
  },
  mounted(){
    
  },
  methods:{
    ...mapMutations(['CHANGE_PAGENUMBER']),
    ...mapActions(['changePagenumber']),

    changethepagenumber(id){
      this.changePagenumber(id)
    },
    mouseoverNavArrows(){
      console.log("mouseover nav arrows")
      //TweenMax.to('.uparrow', .5, {css:{color:"#ffffff"}, ease:Back.easeOut})
    },
    mouseoutNavArrows(){
      console.log("mouseout nav arrows")
    },
    clickNavArrows(bool=false){
      console.log('bool is: ' + bool)
      console.log('pagenum is: ' + this.pagenum)
      
      //
      //
      //
      //
      //////

      // need to figure out how to set page number sooner. taking too long for each title to animate in.
      
      //////
      //working perfect.

      if(bool == true){
        
        TweenMax.to('.downarrow', .5, {css:{color:"#999999"}, ease:Back.easeOut})
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
        }
      }
      else if(bool == false){
        
        TweenMax.to('.uparrow', .5, {css:{color:"#999999"}, ease:Back.easeOut})

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

      TweenMax.to('.uparrow', .5, {css:{color:"#ffffff"}, ease:Back.easeOut})
      TweenMax.to('.downarrow', .5, {css:{color:"#ffffff"}, ease:Back.easeOut})
      TweenMax.set('#zp1', {css: {y:'0%'}});
      TweenMax.set('#zp2', {css: {y:'0%'}});
      TweenMax.set('#zp3', {css: {y:'0%'}});
      TweenMax.set('#zp4', {css: {y:'0%'}});
      TweenMax.set('#zp5', {css: {y:'0%'}});
      TweenMax.set('#zp6', {css: {y:'0%'}});
      TweenMax.set('#zp7', {css: {y:'0%'}});
      this.isbtndisabled = false
      this.changethepagenumber(this.pagenum)
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
    color: #ffffff;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.uparrow{
  padding:0px;
}
.downarrow{
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
  background: url(./assets/food_edit_images/bbq_edit.jpg) no-repeat center center fixed; 
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
  background: url(./assets/food_edit_images/dessert_edit.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
.zp3a{
  z-index:-3;
  top:0vh;
  opacity:1;
  width:50vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping3a);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food_edit_images/half_img1.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
.zp3b{
  z-index:-4;
  top:0vh;
  left:50vw;
  opacity:1;
  width:50vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping3b);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food_edit_images/half_img2.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp4{
  z-index:-5;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping4);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food_edit_images/burger_edit.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp5{
  z-index:-6;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping5);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food_edit_images/cookies_edit.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
.zp6a{
  z-index:-7;
  top:0vh;
  opacity:1;
  width:33vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping6a);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food_edit_images/thirds_img1.jpg) no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
.zp6b{
  z-index:-8;
  top:0vh;
  left:33vw;
  opacity:1;
  width:34vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping6b);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food_edit_images/thirds_img2.jpg) no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
.zp6c{
  z-index:-9;
  top:0vh;
  left:67vw;
  opacity:1;
  width:33vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping6c);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food_edit_images/thirds_img3.jpg) no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size:  cover;
  background-size:  cover;
}
#zp7{
  z-index:-10;
  top:0vh;
  opacity:1;
  width:100vw;
  height:100vh;
  // background-color:$twitter;
  position:absolute;
  clip-path: url(#clipping7);
  //clip: rect(0px, 100vw, 100vw, 0px); //top (start pos) right (left to right) bottom (top to the bottom) left (start pos)
  background: url(./assets/food_edit_images/bread_edit.jpg) no-repeat center center fixed; 
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
