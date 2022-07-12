<template>
  <div>
    <div class="user-box">
      <div class="avatar" :style='{backgroundImage:`url("https://img.favpng.com/7/14/5/computer-icons-social-media-avatar-png-favpng-juHuFP8ptcdpS3yhgAGyT88YM.jpg")`}'></div>
      <p>Nick</p>
    </div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate natus, voluptas dolores omnis minus magni ad corrupti, a aperiam consectetur pariatur temporibus quasi ipsa odit unde assumenda! Quia, eligendi!</div>
  </div>
</template>

<style scoped>
.user-box{
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap:5px
}
.avatar{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}
</style>