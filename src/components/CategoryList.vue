<template>
  <div class="wrap">
    <router-link v-for="category in categories" :key="category.text" :to="{ name: 'blogByCategory', params: { category: category.text } }" class="category">
      <div class="test" :style='{backgroundImage:`url("${category.img}")`}'>
        <h2 class="pog">{{ category.text }}</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      categories: [{
        text:"IT",
        img:"https://i.pinimg.com/474x/10/f8/15/10f815df7e26d99973ed76ad545f9c43.jpg",
      },
      {
        text:"Szachy",
        img:"https://i.pinimg.com/474x/10/f8/15/10f815df7e26d99973ed76ad545f9c43.jpg",
      },
      {
        text:"Jedzenie",
        img:"https://i.pinimg.com/474x/10/f8/15/10f815df7e26d99973ed76ad545f9c43.jpg",
      },
      {
        text:"Tajemnice Watykanu",
        img:"https://i.pinimg.com/474x/10/f8/15/10f815df7e26d99973ed76ad545f9c43.jpg",
      },],
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
.test{
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
