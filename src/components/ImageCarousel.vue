<template>
  <div class="carousel">
    <div v-for="(image, index) in images" :key="index" class="carousel-item">
      <img :src="image" alt="carousel image">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
      ]
    };
  }
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow-x: auto;
}
.carousel-item {
  min-width: 100%;
}
.carousel-item img {
  width: 100%;
  display: block;
}
</style>
