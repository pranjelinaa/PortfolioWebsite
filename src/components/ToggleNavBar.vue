<template>
  <div>
    <button @click="toggleNav">Toggle Navigation</button>
    <nav v-show="navVisible">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/coming-soon">Coming Soon</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navVisible: false
    };
  },
  methods: {
    toggleNav() {
      this.navVisible = !this.navVisible;
    }
  }
};
</script>

<style scoped>
button {
  background-color: #ffd1dc;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav li {
  margin: 10px 0;
}
nav a {
  text-decoration: none;
  color: #333;
}
</style>
