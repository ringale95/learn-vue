<script setup>
import DataBinding from './components/DataBinding';
import RefExample from './components/RefExample.vue';
import TwoWayDB from './components/TwoWayDB.vue';
</script>

<template>
  <header>
    <div>
      <DataBinding />
    </div>
    <div>
      <TwoWayDB /> 
    </div>
    <div>
      <RefExample />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    gap:2rem;
  }
}
</style>
