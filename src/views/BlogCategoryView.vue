<template>
  <div>
    <h2>{{ $route.params.category }}</h2>
    <div v-if="showBlogs">
      <blog-item/>
      <router-link v-for="p in showBlogs.blogs" :key="p" :to="{name: 'blogByCategoryAndId',params:{id:5}}">{{ p }}</router-link>
    </div>
    <p v-else>Brak powiązanych blogów</p>
    
  </div>
</template>

<script>
import BlogItem from "./../components/BlogItem.vue"
export default {
  components:{BlogItem},
  computed: {
    showBlogs() {
      return this.$store.getters["blog/getBlogs"](this.$route.params.category);
    },
  },
};
</script>

<style scoped>

</style>