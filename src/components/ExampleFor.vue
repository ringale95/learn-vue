<template>
  <ul>
    <li v-for="(value, key) in myObj" :key="key">{{ value }}</li>
  </ul>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const myObj = reactive({
      name: 'John Doe',
      age: 50,
      location: 'USA'
    });

    return { myObj }; 
  }
};
</script>
