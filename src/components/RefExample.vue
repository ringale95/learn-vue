<script>
import { ref, reactive, computed } from 'vue';

export default {
  setup() {
    // Define a reactive counter using ref
    const count = ref(0);

    // Define a reactive author object with name and books properties
    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 3 Guide',
        'Vue 2 Guide'
      ]
    });

    // Define a function to increment the counter
    function increment() {
      count.value++;
    }

    // Define a computed property that checks if the author has published books
    const publishedBooks = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No';
    });

    // Return all necessary variables and functions to the template
    return {
      count,
      increment,
      publishedBooks
    };
  }
};
</script>

<template>
  <div>
    <!-- Display the count value and button to increment it -->
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>

    <!-- Display whether the author has published books -->
    <p>Has published books: {{ publishedBooks }}</p>
  </div>
</template>
