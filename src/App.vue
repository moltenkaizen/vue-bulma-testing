<template>
  <div id="app">
    <!--<auth></auth>-->
    <br />
    <!--<grace-note></grace-note>-->
    <!--<album-list></album-list>-->
    <appy></appy>
  </div>
</template>

<script>
import Auth from './components/Auth'
import GraceNote from './components/GraceNote'
import AlbumList from './components/AlbumList'
import Appy from './components/Appy'

export default {
  name: 'app',
  components: {
    Auth,
    GraceNote,
    AlbumList,
    Appy
  }
}
</script>

<style>
#app {
  /*text-align: center;*/
  /*margin-top: 10vh;*/
}
</style>
