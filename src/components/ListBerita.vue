<template>
  <div>
    <div class="card" >
      <li v-for="berita in listBerita" :key ="berita.id">
        {{ berita.title }}
      </li>

  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    listBerita () {
      return this.$store.state.list
    }
  },
  methods: {
    fetchBerita () {
      this.$store.dispatch('fetchList')
    }
  },
  mounted () {
    this.fetchBerita()
  }
}
</script>
