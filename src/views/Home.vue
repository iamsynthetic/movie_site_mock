<template>
  <div class="home">
    <HomeGrid msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

// import { TweenMax } from 'gsap'
// import router from '../router'
import HomeGrid from '@/components/HomeGrid.vue'

export default {
  name: 'Home',
  components: {
    HomeGrid
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
.home{
  display: flex;
    justify-content: center;
    align-items: center;
}
</style>

