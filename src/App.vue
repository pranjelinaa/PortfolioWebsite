
<template>
  <div id="app">
    <Header />
    <ToggleNavBar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ToggleNavBar from './components/ToggleNavBar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ToggleNavBar
  }
};
</script>

<style>
/* You can put your global styles here or in a separate CSS file */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
