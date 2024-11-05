<script setup>
import ArryaFilters from './components/ArryaFilters.vue';
import BlogPost from './components/BlogPost.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import DataBinding from './components/DataBinding.vue';
import EventHandler from './components/EventHandler.vue';
import ExampleFor from './components/ExampleFor.vue';
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
    <div>
      <ConditionalRendering />
    </div>
    <div>
      <ExampleFor />
    </div>
    <div>
      <ArryaFilters />
    </div>

    <div>
      <EventHandler />
    </div>
    <div>
      <BlogPost />
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
