<template>
  <div class="homegrid">
    <section class="grid-1">
        <div id="item-1" class="item">1</div>
        <div id="item-2" class="item">2</div>
        <div id="item-3" class="item">3</div>
        <div id="item-4" class="item">4</div>
        <div id="item-5" class="item">
            <p class="titletxt">Can You Stomach It</p>
            <p class="bodytxt">DO YOU HAVE THE GUTS TO EAT OUR FOOD?</p>
        </div>
        <div id="item-6" class="item">6</div>
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
        <div id="item-20" class="item">20</div>
        
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


// .wrapper {
//         display: grid;
//     grid-gap: 10px;
//         grid-template-columns: repeat(5, [col] 100px ) ;
//         grid-template-rows: repeat(3, [row] auto  );
//         background-color: #fff;
//         color: #444;
//     }

//     .box {
//         background-color: #444;
//         color: #fff;
//         border-radius: 5px;
//         padding: 20px;
//         font-size: 150%;
//         z-index:10;

//     }

//     .a {
//         grid-column: col / span  2;
//         grid-row: row ;
//     }
//     .b {
//         grid-column: col 3 / span  3 ;
//         grid-row: row ;
//     }
//     .c {
//         grid-column: col ;
//         grid-row: row 2 ;
//     }
//     .d {
//         grid-column: col 2 / span  3 ;
//         grid-row: row 2 ;
//     }

//     .e {
//         grid-column: col / span  5;
//         grid-row: row 3;
//     }

//     .f {
//         grid-column: col 3 / span 3;
//         grid-row: row 2  ;
//         background-color: rgba(49,121,207, 0.5);
//         z-index: 20;
//     }



.homegrid{
    width:90vw;
    height:90vh;
    //margin:0 auto;
    //background-color:red;
    margin:auto;
    // padding-top:50px;
    // padding-left:50px;
    // padding-right:50px;
    // padding-bottom:50px;
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

    // #item-1 {
    //     background: #b03532;
    // }
    // #item-2 {
    //     background: #8c67ef;
    // }
    // #item-3 {
    //     background: #30997a;
    // }
    // #item-4 {
    //     background: #6a478f;
    // }
    // #item-5 {
    //     background: #000000;
    // }
    // #item-6 {
    //     background: #3d8bb1;
    // }
    // #item-7 {
    //     background: #e03f3f;
    // }
    // #item-8 {
    //     background: #59a627;
    // }
    // #item-9 {
    //     background: #4464a1;
    // }
    // #item-10 {
    //     background: #d85e49;
    // }
    // #item-11 {
    //     background: #b03532;
    // }
    // #item-12 {
    //     background: #8c67ef;
    // }
    // #item-13 {
    //     background: #30997a;
    // }
    // #item-14 {
    //     background: #6a478f;
    // }
    // #item-15 {
    //     background: #da6f2b;
    // }
    // #item-16 {
    //     background: #3d8bb1;
    // }
    // #item-17 {
    //     background: #e03f3f;
    // }
    // #item-18 {
    //     background: #59a627;
    // }
    // #item-19 {
    //     background: #4464a1;
    // }
    // #item-20 {
    //     background: #d85e49;
    // }

    @media only screen and (min-width: 768px) {
   
        .grid-1 {
            display: grid;
            //height:100%;
            margin:0 auto;
            //text-align:left;
            //background-color:blue;
            // grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            // grid-template-rows: repeat(3, 33.33%);
            grid-template-columns: repeat(4, [col] 25%);
            grid-template-rows: repeat(5, [row] 20%);
        }

        #item-1 {
            //grid-column: 1 / span  1;
            //grid-row: row;
            // display: flex;
            // flex-direction: column;
        }
        
        #item-2{
            //grid-column: 1 / span  1;
            //grid-row: row ;
        }

        #item-3{
           //grid-column: 1 / span  1;
            //grid-row: row ;
        }

        #item-5{
            grid-column: 1 / span 2;
            grid-row: 2 / span 3;
            display: flex;
            flex-direction: column;
            justify-content:center;
        }
        
        #item-5 p{
            text-align:left;
        }

        #item-5 .titletxt{
            font-family: 'Fredericka the Great', cursive;
            font-size:120px;
            line-height:110px;
            color:white;
            margin-bottom:20px;
            width:75%;
            background-color:black;
        }

        #item-5 .bodytxt{
            font-family: 'Cutive Mono', monospace;
            //font-family: 'Anton', sans-serif;
            font-size:34px;
            line-height:30px;
            color:white;
            width:90%;
            background-color:black;
        }
    }
}

</style>
