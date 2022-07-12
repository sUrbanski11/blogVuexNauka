<template>
  <div class="comment-list__conteiner">
    <add-new-comments/>
    <comment-item/>
  </div>  
</template>

<script>
import AddNewComments from './AddNewComments.vue'
import CommentItem from './CommentItem.vue'

export default {
  components: { AddNewComments,CommentItem },
  
}
</script>
<style scoped>
.comment-list__conteiner{
  width: 600px;
}
</style>