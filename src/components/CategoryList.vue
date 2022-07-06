<template>
  <div class="wrap">
    <router-link v-for="category in categories" :key="category" :to="{ name: 'blog', params: { category } }" class="category">
      <h2>{{ category }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      categories: ["IT", "Szachy", "Jedzenie", "Tajemnice Watykanu"],
    };
  },
};
</script>

<style scoped>
.wrap {
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.category {
  text-decoration: none;
}
</style>
