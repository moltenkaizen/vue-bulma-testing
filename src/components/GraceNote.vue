<template>
  <div class="container box">
    <form class="box" @submit.prevent="queryApi">
    <div class="field">
      <div class="control">
        <input v-model="artist" class="input" type="text" placeholder="Artist">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input v-model="title" class="input" type="text" placeholder="Album Title">
      </div>
    </div>
      <div class="field">
        <p class="control">
          <button class="button is-primary" :class="{ 'is-loading': loading}">
            Search
          </button>
        </p>
      </div>
    </form>
<br/>

  <div v-for="album in apiResponse" class="card">
    <div class="card-image">
      <figure class="image is-square">
        <img :src="album.album_art_url" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <!--<div class="media-left">-->
          <!--<figure class="image is-48x48">-->
            <!--<img :src="album.artist_image_url" alt="Image">-->
          <!--</figure>-->
        <!--</div>-->
        <div class="media-content">
          <p class="title is-4">{{ album.album_artist_name }}</p>
          <p class="subtitle is-6">{{ album.album_title }} - <small>{{ album.album_year }}</small></p>
        </div>
      </div>

      <div class="content">
        <ol>
          <li v-for="track in album.tracks">{{ track.track_title }}</li>
        </ol>
        <!--<p class="subtitle is-6">Genres</p>-->
        <span v-for="genre in album.genre">{{ genre.text }} | </span>
      </div>
    </div>
      <footer class="card-footer">
        <a class="card-footer-item">Save</a>
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
      </footer>
  </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        artist: 'Damien Rice',
        title: 'O',
        apiResponse: []
      }
    },
    methods: {
      queryApi() {
        if (!this.artist || !this.title) { return false };
        this.loading = true;
        const request = new Request(`http://localhost:8081/api/gracealbum?artist=${this.artist}&title=${this.title}`, {
          method: 'GET'
        });
        fetch(request)
          .then(response => response.json())
          .then((response) => {
//            console.log(response);
            this.apiResponse = response;
            this.loading = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }

</script>

<style scoped>
  .card {
    width: 400px;
  }
</style>
