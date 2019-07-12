<template>
  <div class="about">
    <AboutGrid/>
  </div>
</template>

<script>

// import { TweenMax } from 'gsap'
// import router from '../router'
import { TweenMax } from 'gsap'
import { MapState, MapMutations, MapActions, mapGetters } from 'vuex'
import AboutGrid from '@/components/AboutGrid.vue'

export default {
name:'About',
  data(){
    return {
    }
  },
  components:{
   AboutGrid
  },
  computed:{

  },
  created(){

  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>

<style lang="scss">
@import '../styles.scss';
.about{
  display: flex;
    justify-content: center;
    align-items: center;
}
</style>
