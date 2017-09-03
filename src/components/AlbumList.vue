<template>
  <section class="section cards">
    <div class="container-full">
    <div class="columns is-mobile is-multiline">
      <div class="column is-offset-1 is-10">
      <div class="field">
        <div class="control">
          <input v-model="searchTerm" class="input" type="text" placeholder="Search...">
        </div>
      </div>
          <p>showing {{ filteredAlbums.length }} of {{ albums.length }} albums</p>
      </div>
      <div v-for="album in filteredAlbums" class="column is-narrow is-6-mobile is-4-tablet is-3-desktop is-2-fullhd">

        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="album.cover" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content has-text-centered">
                <p class="title is-size-5">{{ album.title }}</p>
                <p class="subtitle is-size-6 has-text-grey-light">{{ album.artist }}</p>
                <!--<p>{{ album.year }} - {{ album.country}} - {{ album.format }}</p>-->
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>

  </section>
</template>

<script>

  export default {
    data() {
      return {
        loading: false,
        searchTerm: '',
        albums: []
      }
    },
    computed: {
      filteredAlbums() {
        return this.albums.filter((album) => {
          return album.title.match(new RegExp(this.searchTerm, "ig")) || album.artist.match(new RegExp(this.searchTerm, "ig"))
        })
      }
    },
    methods: {
      loadData() {
        this.loading = true;
        const request = new Request('http://localhost:8081/api/albums', {
          method: 'GET'
        });
        fetch(request)
          .then(response => response.json())
          .then((response) => {
//            console.log(response);
            this.albums = response;
            this.loading = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    created() {
      this.loadData();
    }
  }

</script>

<style scoped>
.card {
  /*width: 200px;*/
  height: 100%;
  /*margin: .5em;*/
}
  .media-content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
