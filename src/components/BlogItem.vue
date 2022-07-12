<template>
  <div class="blog-item__container">
        <div class="img-blog" :style='{backgroundImage:`url("https://i.pinimg.com/474x/10/f8/15/10f815df7e26d99973ed76ad545f9c43.jpg")`}'></div>
        <div class="blog-item__blog-info">
          <p class="blog-title">tytul</p>
          <div class="create-and-mod-date">
          <p class="create-date">utworzono 44.44.4444</p>
          <p class="create-and-mod-date__p">modyfikacja 77.77.7777</p>
          </div>
          <p class="blog-preview-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque corporis voluptatum nobis, ipsa laborum dicta!</p>
          <div class="link-to-blog__wrap">
              <router-link :to="{name:'blogByCategoryAndId',params:{id:5}}" class="link-to-blog">Czytaj -></router-link>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name:"BlogItem",
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.blog-item__container{
  display: flex;
  width: 60%;
  position: relative;
  margin-bottom: 15px;
}
.img-blog{
  width: 150px;
  height: 150px;
}
.blog-item__blog-info{
  margin-left: 10px;
}
.blog-title{
  font-size: 24px;
  text-align: left;
}
.create-and-mod-date{
  display: flex;
  gap: 10px;
  font-size: 10px;
  margin: 7px 0;
}
.create-date{
  margin-left: 10px;
}
.blog-preview-text{
  margin-top: 5px;
  text-align: left;
}
.link-to-blog__wrap{
  position: absolute;
  bottom: 0;
  right: 0;
}
.link-to-blog{
    text-decoration: none;
}
.link-to-blog:hover{

  color: aquamarine;
}
</style>