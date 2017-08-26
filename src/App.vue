<template>
  <div id="app">
    <!--<auth></auth>-->
    <br />
    <grace-note></grace-note>
  </div>
</template>

<script>
import Auth from './components/Auth'
import GraceNote from './components/GraceNote'

export default {
  name: 'app',
  components: {
    Auth,
    GraceNote
  }
}
</script>

<style>
#app {
  /*text-align: center;*/
  /*margin-top: 10vh;*/
}
</style>
