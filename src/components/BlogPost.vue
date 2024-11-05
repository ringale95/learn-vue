<template>
  <h1>{{ title }}</h1>
  <ul>
    <li 
    v-for="post in posts"
    :key = "post.id"
    :value = "post.title"
    >{{ post.title }}</li>

  </ul>
</template>

<script>
  import { ref } from 'vue';

export default {
  
  setup() {
    const posts = ref([
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' }
    ]);
    return{
      posts
    }
  }
}
</script>