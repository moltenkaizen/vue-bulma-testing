<template>
  <div>

    <!--<div class="column box is-10-mobile is-offset-1-mobile is-half-tablet is-offset-one-quarter-tablet is-one-third-desktop is-offset-one-third-desktop">-->
    <div class="box">

      <img class="has-text-centered" src="../../src/assets/logo.png">
      <form @submit.prevent.stop="login">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input v-model.lazy="email" class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span v-show="email" class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input v-model.lazy="password" class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
        </p>
      </div>

      <p class="control login">
        <button class="button is-primary is-outlined is-large is-fullwidth">Login</button>
      </p>
      </form>
      <div class="section forgot-password">
        <p class="has-text-centered">
          <a href="#">Forgot password</a>
          <span>|</span>
          <a href="#">Need help?</a>
        </p>
      </div>

    </div>
    <div class="modal" :class="{ 'is-active': modalActive}">
      <div @click="modalActive = false" class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
        <div class="box">
          <p>Thanks {{ email }} !</p>
        </div>
      </div>
      <button @click="modalActive = false" class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        modalActive: false
      }
    },
    methods: {
      login() {
        // show modal
        if ( !this.email && !this.password ) { return false }
        this.modalActive = true;
      }
    }
  }

</script>

<style scoped>
  .box {
    padding-top: 2em;
    padding-left: 3em;
    padding-right: 3em;
    width: 25em;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 450px) {
    .box {
      width: 90vw;
      padding: 1em 1em 0em 1em;
    }
  }


</style>
