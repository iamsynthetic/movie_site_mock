<template>
  <div class="homegrid">
    <section class="grid-1">
        <div id="item-1" class="item"></div>
        <div id="item-2" class="item"></div>
        <div id="item-3" class="item"></div>
        <div id="item-4" class="item"></div>
        <div id="item-5" class="item">
            <ul>
                <li><span id="item-5-txt-1"><p id="title1" class="titletxt">Chase the</p></span></li>
                <li><span id="item-5-txt-1b"><p id="title2" class="titletxt">Flavors</p></span></li>
            </ul>
            <ul>
                <li><span id="item-5-txt-2"><p id="title3" class="bodytxt">WHERE FOOD SPEAKS</p></span></li>
                <li><span id="item-5-txt-2b"><p id="title4" class="bodytxt">WITH YOUR PALATE</p></span></li>
            </ul>
        </div>
        <!-- <div id="item-6" class="item">6</div>
        <div id="item-7" class="item">7</div>
        <div id="item-8" class="item">8</div>
        <div id="item-9" class="item">9</div>
        <div id="item-10" class="item">10</div>
        <div id="item-11" class="item">11</div>
        <div id="item-12" class="item">12</div>
        <div id="item-13" class="item">13</div>
        <div id="item-14" class="item">14</div>
        <div id="item-15" class="item">15</div>
        <div id="item-16" class="item">16</div>
        <div id="item-17" class="item">17</div>
        <div id="item-18" class="item">18</div>
        <div id="item-19" class="item">19</div>
        <div id="item-20" class="item">20</div> -->
        
    </section>
  </div>
</template>

<script>

import { TweenMax } from 'gsap'

export default {
  name: 'HomeGrid',
  props: {
    msg: String
  },
  computed:{

  },
  created(){
  },
  mounted(){
    TweenMax.from('#title1', 3.4, {y:400, delay:.6, ease:Power3.easeInOut})
    TweenMax.from('#title2', 3, {y:400, delay:1, ease:Power3.easeInOut})
    TweenMax.from('#title3', 3.2, {x:400, delay:1.4, ease:Power3.easeInOut})
    TweenMax.from('#title4', 3.2, {x:-450, delay:1.4, ease:Power3.easeInOut})
  },
  methods:{
  
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

.homegrid{
    width:90vw;
    height:90vh;
    margin:auto;
}

@supports (display: grid) {
    .grid-1 {
        display:grid;
        height:100%;
        margin:0 auto;
        //background-color:blue;
        grid-template-columns:1fr;

        //display: grid;
        //width:90vw;
        //height:100%;
        //margin:0 auto;
        //background-color:blue;
        //all three columns (3 values so 3 columns) should be 150px wide
        //33.33% 33.33% 33.33%; this makes it 'fluid'
        //grid-template-columns: 150px 150px 150px;
        //below does the same as 33.33 33.33 33.33
        //grid-template-columns: repeat(3, 1fr);
        //grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        //grid-template-columns: 300px 1fr 3fr 20%;
        //all three rows (3 values so 3 rows) should be auto height (based on content inside)
        //grid-template-rows: auto auto auto;
        //grid-template-rows: repeat(3, 33.33%);
        //grid-column-gap and grid-row-gap can be combined to:
        //grid-gap:20px
    }

    .item{
    }

    @media only screen and (min-width: 375px) {
        
        #item-5{
            display: flex;
            flex-direction: column;
            justify-content:center;
        }

        #item-5-txt-1, #item-5-txt-1b, #item-5-txt-2, #item-5-txt-2b{
            -webkit-clip-path: inset(0 0 0 0);
            clip-path: inset(0 0 0 0);
            display:inline-block;
        }

        #item-5 p{
            text-align:center;
        }
        #item-5 ul{
            text-align:center;
        }

        #item-5 ul li {
            margin:0;
        }

        #title1{
            margin:0;
        }

        #title2{
            margin-left:1rem;
        }

        #title3{
            margin:0;
        }

        #title4{
            margin-left:1rem;
        }

         #item-5 .titletxt{
            font-family: 'Fredericka the Great', cursive;
            font-size:40px;
            line-height:40px;
            color:white;
        }

        #item-5 .bodytxt{
            font-family: 'Cutive Mono', monospace;
            //font-family: 'Anton', sans-serif;
            font-size:16px;
            line-height:30px;
            color:white;
        }
    }

    @media only screen and (min-width: 768px) {
   
        .grid-1 {
            display: grid;
            margin:0 auto;
            grid-template-columns: repeat(4, [col] 25%);
            grid-template-rows: repeat(5, [row] 20%);
        }

        #item-5{
            grid-column: 1 / span 3;
            grid-row: 2 / span 3;
            display: flex;
            flex-direction: column;
            justify-content:center;
        }
        
        #item-5 p{
            text-align:left;
        }
        #item-5 ul{
            text-align:left;
        }

        #title2{
            margin-left:2rem;
        }


        #item-5 .titletxt{
            font-family: 'Fredericka the Great', cursive;
            font-size:60px;
            line-height:80px;
            color:white;
        }

        #item-5 .bodytxt{
            font-family: 'Cutive Mono', monospace;
            font-size:26px;
            line-height:30px;
            color:white;
        }
    }

    @media only screen and (min-width: 1050px) {
         #item-5 .titletxt{
            font-family: 'Fredericka the Great', cursive;
            font-size:80px;
            line-height:110px;
            color:white;
        }

        #item-5 .bodytxt{
            font-family: 'Cutive Mono', monospace;
            //font-family: 'Anton', sans-serif;
            font-size:36px;
            line-height:30px;
            color:white;
        }
    }
}

</style>
