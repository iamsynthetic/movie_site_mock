<template>
  <div class="aboutgrid">
    <section class="a-grid-1">
        <div id="a-item-1" class="a-item"></div>
        <div id="a-item-2" class="a-item"></div>
        <div id="a-item-3" class="a-item"></div>
        <div id="a-item-4" class="a-item"></div>
        <div id="a-item-5" class="a-item">
            <ul>
                <li><span id="a-item-5-txt-1"><p id="a-title1" class="a-titletxt">Chase the</p></span></li>
                <li><span id="a-item-5-txt-1b"><p id="a-title2" class="a-titletxt">Flavors</p></span></li>
            </ul>
            <ul>
                <li><span id="a-item-5-txt-2"><p id="a-title3" class="a-bodytxt">WHERE FOOD SPEAKS</p></span></li>
                <li><span id="a-item-5-txt-2b"><p id="a-title4" class="a-bodytxt">WITH YOUR PALATE</p></span></li>
            </ul>
        </div>
        
    </section>
  </div>
</template>

<script>

import { TweenMax } from 'gsap'
import { MapState, MapMutations, MapActions, mapGetters } from 'vuex'

export default {
    name: 'AboutGrid',
    
    data(){
        return{
            blah: 0
        }
    },

  computed:{
      thepagenumber: function(){
          return this.$store.state.pagenumber;
      }
  },
  watch: {
      thepagenumber(newCount, oldCount){
          console.log(`current page number is: ${newCount}`)
          this.animateTitle()
      }
  },
  created(){
    //this.blah = this.thepagenumber()
    //console.log('blah is: ' + this.blah)
    
  },
  mounted(){
      TweenMax.set('#a-title1', {opacity:0})
      TweenMax.set('#a-title2', {opacity:0})
      TweenMax.set('#a-title3', {opacity:0})
      TweenMax.set('#a-title4', {opacity:0})
  },
  methods:{
      setTitles(){
        TweenMax.set('#a-title1', {opacity:1})
        TweenMax.set('#a-title2', {opacity:1})
        TweenMax.set('#a-title3', {opacity:1})
        TweenMax.set('#a-title4', {opacity:1})
        this.animateTitle()
      },
      animateTitle(){
        TweenMax.set('#a-title1', {opacity:1})
        TweenMax.set('#a-title2', {opacity:1})
        TweenMax.set('#a-title3', {opacity:1})
        TweenMax.set('#a-title4', {opacity:1})
        TweenMax.from('#a-title1', 3.4, {y:400, delay:0, ease:Power3.easeInOut})
        TweenMax.from('#a-title2', 3, {y:400, delay:.4, ease:Power3.easeInOut})
        TweenMax.from('#a-title3', 3.2, {x:400, delay:.8, ease:Power3.easeInOut})
        TweenMax.from('#a-title4', 3.2, {x:-450, delay:.8, ease:Power3.easeInOut})
    }
  }
}
</script>

<style scoped lang="scss">
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
a {
  color: #42b983;
}

.aboutgrid{
    width:90vw;
    height:90vh;
    margin:auto;
}

@supports (display: grid) {
    .a-grid-1 {
        display:grid;
        height:100%;
        margin:0 auto;
        grid-template-columns:1fr;
    }

    @media only screen and (min-width: 375px) {
        
        #a-item-5{
            display: flex;
            flex-direction: column;
            justify-content:center;
        }

        #a-item-5-txt-1, #a-item-5-txt-1b, #a-item-5-txt-2, #a-item-5-txt-2b{
            -webkit-clip-path: inset(0 0 0 0);
            clip-path: inset(0 0 0 0);
            display:inline-block;
        }

        #a-item-5 p{
            text-align:center;
        }
        #a-item-5 ul{
            text-align:center;
        }

        #a-item-5 ul li {
            margin:0;
        }

        #a-title1{
            margin:0;
        }

        #a-title2{
            margin-left:1rem;
        }

        #a-title3{
            margin:0;
        }

        #a-title4{
            margin-left:1rem;
        }

         #a-item-5 .a-titletxt{
            font-family: 'Fredericka the Great', cursive;
            font-size:40px;
            line-height:40px;
            color:white;
        }

        #a-item-5 .a-bodytxt{
            font-family: 'Cutive Mono', monospace;
            //font-family: 'Anton', sans-serif;
            font-size:16px;
            line-height:30px;
            color:white;
        }
    }

    @media only screen and (min-width: 768px) {
   
        .a-grid-1 {
            display: grid;
            margin:0 auto;
            grid-template-columns: repeat(4, [col] 25%);
            grid-template-rows: repeat(5, [row] 20%);
        }

        #a-item-5{
            grid-column: 1 / span 3;
            grid-row: 2 / span 3;
            display: flex;
            flex-direction: column;
            justify-content:center;
        }
        
        #a-item-5 p{
            text-align:left;
        }
        #a-item-5 ul{
            text-align:left;
        }

        #a-title2{
            margin-left:2rem;
        }


        #a-item-5 .a-titletxt{
            font-family: 'Fredericka the Great', cursive;
            font-size:60px;
            line-height:80px;
            color:white;
        }

        #a-item-5 .a-bodytxt{
            font-family: 'Cutive Mono', monospace;
            font-size:26px;
            line-height:30px;
            color:white;
        }
    }

    @media only screen and (min-width: 1050px) {
         #a-item-5 .a-titletxt{
            font-family: 'Fredericka the Great', cursive;
            font-size:80px;
            line-height:110px;
            color:white;
        }

        #a-item-5 .a-bodytxt{
            font-family: 'Cutive Mono', monospace;
            //font-family: 'Anton', sans-serif;
            font-size:36px;
            line-height:30px;
            color:white;
        }
    }
}

</style>
