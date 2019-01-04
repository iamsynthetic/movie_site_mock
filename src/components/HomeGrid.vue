<template>
  <div class="homegrid">
    <h1>{{ msg }}</h1>
    <!-- <section class="grid1">
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
        <div class="strapline">
            <blockquote>“Almost immediately, word spread of a Welshman who had built this incredible sounding sub bass system, and soon enough audiophiles began searching out these legendary subs that were built like no other.”</blockquote>
        </div>
        <div class="cta-wrapper">  
            <div class="cta">
                <h1>Gibraltar</h1>
                <p>Introducing 212/SE, our most powerful and agile subwoofer, designed exclusively for larger systems and rooms to allow superior state of the art speakers to spring to full voice.</p>
                <a class="button" href="">View Product Details →</a>
            </div>
        </div>
    </section> -->
    <section class="grid-1">
        <div class="item-1">1</div>
        <div class="item-2">2</div>
        <div class="item-3">3</div>
        <div class="item-4">4</div>
        <div class="item-5">5</div>
        <div class="item-6">6</div>
        <div class="item-7">7</div>
        <div class="item-8">8</div>
        <div class="item-9">9</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    //margin:0 auto;
    background-color:red;
    margin:auto;
    // padding-top:50px;
    // padding-left:50px;
    // padding-right:50px;
    // padding-bottom:50px;
}
.grid-1 {
    display: grid;
    //width:90vw;
    //height:90vh;
    margin:0 auto;
    background-color:blue;
    //all three columns (3 values so 3 columns) should be 150px wide
    //33.33% 33.33% 33.33%; this makes it 'fluid'
    //grid-template-columns: 150px 150px 150px;
    //below does the same as 33.33 33.33 33.33
    grid-template-columns: repeat(3, 1fr);
    //grid-template-columns: 300px 1fr 3fr 20%;
    //all three rows (3 values so 3 rows) should be auto height (based on content inside)
    //grid-template-rows: auto auto auto;
    grid-template-rows: repeat(3, 33.33%);
    //grid-column-gap and grid-row-gap can be combined to:
    grid-gap:20px
}
.grid-1 div {
    color: white;
    font-size: 20px;
    padding: 20px;
}

.item-1 {
  background: #b03532;
}
.item-2 {
  background: #33a8a5;
}
.item-3 {
  background: #30997a;
}
.item-4 {
  background: #6a478f;
}
.item-5 {
  background: #da6f2b;
}
.item-6 {
  background: #3d8bb1;
}
.item-7 {
  background: #e03f3f;
}
.item-8 {
  background: #59a627;
}
.item-9 {
  background: #4464a1;
}

// .grid1 {
//   display: grid;
//   grid-template-columns: 3fr 6fr 1fr 5fr 10fr 2fr;
//   grid-template-rows: 100px auto 15px auto auto;
// }

// .img1 {  
//   /* could use `object-fit: cover;` on an img, but tricky*/
//   background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/wooden.jpg);
//   background-size: cover;
  
//   grid-column: 1 / span 2;
//   grid-row: 2 / span 3;
// }

// .img2 {  
//   background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/speaker.jpg);
//   background-size: cover;
  
//   grid-column: 2 / span 2;
//   grid-row: 3 / span 3;
// }

// .img3 {  
//   /* https://elements.envato.com/gradient-network-wave-backgrounds-L5PGKP */
//   background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/waves.jpg);
//   background-size: cover;
  
//   grid-column: 5 / span 2;
//   grid-row: 4 / span 2;
// }

// .strapline {
//   grid-column: 3 / span 3;
//   grid-row: 2 / span 1;

//   padding: 0 16%;
//   text-align: center;
//   margin-top: 100px;
//   position: relative;
// }

// .strapline::before {
//   content: '';
//   display: block;
//   background-size: cover;
//   width: 20%;
//   height: .5em;
//   position: absolute;
//   top: -3em;
//   left: 40%;
// }

// .cta-wrapper {
//   grid-column: 4 / span 2;
//   grid-row: 4 / span 2;
// }

// @media only screen and (min-width: 768px) {
   
//   .grid1 {
//     grid-template-columns: 3fr 6fr 1fr 5fr 10fr 2fr;
//     grid-template-rows: 100px auto 15px auto auto;
//   }
// }

</style>
