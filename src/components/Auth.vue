<template>
  <div class="columns is-vcentered">
    <!--<div class="column is-one-quarter">Auto</div>-->
    <div class="column box is-one-third is-offset-one-third">
      <img class="has-text-centered" src="../../src/assets/logo.png">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
      <i class="fa fa-envelope"></i>
    </span>
          <span class="icon is-small is-right">
      <i class="fa fa-check"></i>
    </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
      <i class="fa fa-lock"></i>
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
    <!--<div class="column is-one-quarter">Auto</div>-->
  </div>
</template>

<script>

</script>

<style scoped>
  .box {
    padding-left: 3em;
    padding-right: 3em;
  }

</style>
