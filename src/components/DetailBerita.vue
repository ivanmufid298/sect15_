<template>
  <div id="detailBerita">
    <img :src="oneBerita.urlToImage" />
    <h1 class="title">{{ oneBerita.title }}</h1>
    <h3 class="info">
      {{ oneBerita.author }} -
      {{ moment(oneBerita.publishedAt).locale("id").format("LLLL") }}
    </h3>
    <p class="desc">{{ oneBerita.content }}</p>
    <a :href="oneBerita.url" target="_blank">Baca selengkapnya</a>
  </div>
</template>
<script>
export default {
  computed: {
    oneBerita () {
      return this.$store.state.oneBerita
    }
  },
  methods: {
    getBerita (slug) {
      this.$store.dispatch('getBerita', slug)
    }
  },
  created () {
    this.getBerita(this.$route.params.slug)
  }
}
</script>
<style scoped>
#detailBerita {
  margin: 0 250px;
}
img {
  object-fit: cover;
  height: 30rem;
  width: 50rem;
  border-radius: 5px;
  display: block;
  margin: auto;
}
.title {
  font-size: 30px;
}
.info {
  font-size: 15px;
  color: rgb(114, 113, 113);
}
.desc {
  font-size: 20px;
}
a {
  font-weight: bold;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  transition: 0.3s;
}
a:hover {
  color: #b34040;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  background-color: #ffffff;
  margin: 4px;
}
</style>
