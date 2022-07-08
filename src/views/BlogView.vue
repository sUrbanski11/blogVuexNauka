<template>
  <div>
    <h2>{{ $route.params.category }}</h2>
    <div v-if="showBlogs">
      <p v-for="p in showBlogs.blogs" :key="p">{{ p }}</p>
    </div>
    <p v-else>Brak powiązanych blogów</p>
    
  </div>
</template>

<script>
export default {
  computed: {
    showBlogs() {
      return this.$store.getters["blog/getBlogs"](this.$route.params.category);
    },
  },
};
</script>
