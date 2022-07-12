<template>
  <div class="add-comment__container">
    <textarea name="comment"></textarea>
    <button class="btn">Dodaj komentarz</button>
  </div>
</template>
<style scoped>
.add-comment__container{
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;

}
.add-comment__container > textarea{
  width: 100%;
  height: 80px;
  padding: 3px 0 0 3px;
  resize:none;
}
.btn{
  width: 100px;
}
</style>