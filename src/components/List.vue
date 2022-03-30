<script>
export default {
  name: 'Home',
  computed: {
    listBerita () {
      return this.$store.state.berita.list
    }
  },
  methods: {
    fetchBerita () {
      this.$store.dispatch('berita/fetchlist')
    }
  },
  mounted () {
    this.fetchBerita()
  }
}
</script>
