<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from "./routes/Login"
export default {
    name: 'app',
    components: {
    },
    data() {
      return {
        visible: true
      }
    },
    created() {
      this.$router.replace({ path: '/routes/Login', name: 'Login', component: Login });
    },
    methods: {

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
