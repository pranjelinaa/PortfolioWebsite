<template>
  <div>
    <h2>Welcome to My Pastel Portfolio</h2>
    <Carousel />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';

export default {
  components: {
    Carousel
  }
};
</script>

<style scoped>
h2 {
  color: #ffabc1;
}
</style>
