<template>
  <div id="app">
    <auth></auth>
  </div>
</template>

<script>
import Auth from './components/Auth'

export default {
  name: 'app',
  components: {
    Auth
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 10vh;
}
</style>
