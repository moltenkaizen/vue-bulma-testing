<template>
  <div class="">

    <!--<div class="column box is-10-mobile is-offset-1-mobile is-half-tablet is-offset-one-quarter-tablet is-one-third-desktop is-offset-one-third-desktop">-->
    <div class="box">

      <img class="has-text-centered" src="../../src/assets/logo.png">

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

      <div class="section forgot-password">
        <p class="has-text-centered">
          <a href="#">Forgot password</a>
          <span>|</span>
          <a href="#">Need help?</a>
        </p>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
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
  }

  @media (max-width: 450px) {
    .box {
      width: 90vw;
      padding: 1em 1em 0em 1em;
    }
  }


</style>
