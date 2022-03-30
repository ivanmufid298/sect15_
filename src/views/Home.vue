<template>
    <div>
      <h1>Berita Terkini</h1>
    <ListBerita />
  </div>
</template>

<script>
// @ is an alias to /src
import ListBerita from '@/components/ListBerita.vue'

export default {
  name: 'Home',
  components: {
    ListBerita
  }
}
</script>
