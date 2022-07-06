<template>
  <div>
    <h2>{{ $route.params.category }}</h2>
    <p v-for="p in showBlogs" :key="p">{{ p }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    showBlogs() {
      return this.$store.getters.getBlogs(this.$route.params.category).blogs;
    },
  },
};
</script>
