<template>
  <div class="container">
    <div class="box">
    <h1>Hello Appy</h1>
    <h1 v-if="userObject.refreshToken">Welcome {{ userObject.user.firstName }} {{ userObject.user.lastName }} - {{ userObject.user.email }}</h1>

    <form @submit.prevent="logIn">
    <div class="field">
      <div class="control">
        <input v-model="login.email" class="input" type="text" placeholder="Username">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input v-model="login.password" class="input" type="password" placeholder="Password">
      </div>
    </div>
      <div class="field">
        <p class="control">
          <button class="button is-primary" :class="{ 'is-loading': loginLoading}">
            Log In
          </button>
        </p>
      </div>
    </form>

    </div>

    <div class="box">
      <h1>Add Album</h1>

      <form @submit.prevent="addAlbum">
        <div class="field">
          <div class="control">
            <input v-model="newAlbum.artist" class="input" type="text" placeholder="Artist">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input v-model="newAlbum.title" class="input" type="text" placeholder="title">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input v-model="newAlbum.year" class="input" type="number" placeholder="year">
          </div>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-primary" :class="{ 'is-loading': loginLoading}">
              Add
            </button>
          </p>
        </div>
      </form>
    </div>

    <div class="box">
      <div class="field">
        <p class="control">
          <button @click="loadData" class="button is-primary" :class="{ 'is-loading': dataLoading}">
            Get Albums
          </button>
        </p>
      </div>
      <ul>
        <li v-for="album in albums">{{ album.artist }} - {{ album.title }} - {{ album.year }} <button class="button is-small is-warning" @click="deleteAlbum(album)">Delete</button></li>
      </ul>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        loginLoading: false,
        dataLoading: false,
        albums: [],
        userObject: {
          firstName: '',
          lastName: '',
          refreshToken: '',
          authHeader: ''
        },
        login: {
          email: '',
          password: ''
        },
        newAlbum: {
          artist: '',
          title: '',
          year: 0,
          owner: ''
        }
      }
    },
    methods: {
      logIn() {
        this.loginLoading = true;
        const request = new Request('http://localhost:8125/login', {
          method: 'POST',
          body: JSON.stringify(this.login)
        });
        fetch(request)
          .then(response => response.json())
          .then((response) => {
            this.loginLoading = false;
            console.log(response.user._id);
            console.log(response.refreshToken);
            this.userObject = response;
          })
          .catch((e) => {
            this.loginLoading = false;
            console.log(e);
          });
      },
      loadData() {
        this.dataLoading = true;
        const request = new Request(`http://localhost:8125/user/${this.userObject.user._id}/album`, {
          method: 'GET',
          headers: { authorization: this.userObject.refreshToken }
        });
        fetch(request)
          .then(response => response.json())
          .then((response) => {
            this.albums = response.docs;
            this.dataLoading = false;
          })
          .catch((e) => {
            console.log(e);
            this.dataLoading = false;
          });
      },
      addAlbum() {
        this.newAlbum.owner = this.userObject.user._id;
        const request = new Request('http://localhost:8125/album', {
          method: 'POST',
          headers: { authorization: this.userObject.authHeader },
          body: JSON.stringify([this.newAlbum])
        });
        fetch(request)
          .then(response => response.json())
          .then((response) => {
            // console.log(response);
            this.loadData();
          })
          .catch((e) => {
            console.log(e);
          });
      },
      deleteAlbum(album) {
        const request = new Request(`http://localhost:8125/user/${this.userObject.user._id}/album/${album._id}`, {
          method: 'DELETE',
          headers: { authorization: this.userObject.authHeader }
        });
        fetch(request)
          .then((response) => {
            console.log(response);
            this.loadData();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    created() {
      // this.loadData();
    }
  }

</script>

<style>

</style>
