<template>
    <div>
      <h1>Berita Terkini</h1>
    <ListBerita />
  </div>
</template>

<script>
import ListBerita from '@/components/ListBerita.vue'

export default {
  name: 'Home',
  components: {
    ListBerita
  }
}
</script>
