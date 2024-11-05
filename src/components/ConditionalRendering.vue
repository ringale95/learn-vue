<template>
  <button @click="awesome = !awesome">Click me</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h2 v-else>Oh no</h2>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Define 'awesome' as a reactive ref with an initial value of false
    const awesome = ref(false);

    // Return 'awesome' so it's accessible in the template
    return { awesome };
  }
};
</script>
