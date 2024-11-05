<template>
  <ul>
    <li v-for="(item, index) in sets" :key="index">
      {{ even(item) }}
      </li>
  </ul>
</template>

<script>
import { ref } from 'vue';
export default{
  setup(){
    const sets = ref([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ])
   function even(numbers){
    return numbers.filter((number) => number % 2 === 0);  
   }
   return{
    sets,
    even
  }
  },
 
  }
</script>