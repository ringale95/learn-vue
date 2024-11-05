# Vue js notes

- Progressive JS framework for building UI and SPA
- Reactive data binding and component based architecture

### Prerequisite:
1. Js fundamentals(loops, functions, objects)
2. Events and DOM manipulation
3. Fetch API and basic http
4. Arrow functions, high order methods, destructuring
5. npm

Vue extends standard HTML with a template syntax that allow us to declaratively describe HTML output based on JS state

Vue tracks JS state changes and updates DOM when changes happen:

Vue application starts by creating a new application instance with <code>createApp</code>. Inside createApp we pass root component that contains other component

```
import { createApp } from 'vue';
import App from './App.vue'

const app = createApp(App)

app.mount(#app);
```

mount - Vue takes control of DOM element with id = "app"
mount - call when all app configurations and assets are done


## ref()

In Composition API, the recommended way to declare reactive state where Vue changes or tracks any update made to ref 
```
ref()
```

ref takes argument and returns it wrapped within a ref object with a <code> .value </code> property

Refs can hold any value type, including deeply nested objects, arrays, or JavaScript built-in data structures like Map.

DOM is updated automatically when reactive state changes, Vue collects or buffers for all the changes and apply them at once ensuring each component updates once.

`ref can take objects and primitives and can be reassigned using property .value. 
Reactive take only objects and can't be reassigned`

### Computed Properties:

Contains computations and conditions outside the template. Helps us to calculate values based on reactive data without directly putting the logic in template

```
const author = reactive({
    name: 'John',
    books: [
        'Vue 1',
        'Vue 2'
    ]
})
const publishedBooks = computed(() =>{
    return author.books.length > 0? 'Yes':'No'
})
```

### Watchers
To note side effects in reaction to state changes for example mutating DOM

`watch` is used to trigger callback whenever apiece of reactive state changes
```
import { watch, ref } from 'vue';

const myData = ref(0);

watch(myData, (newValue, oldValue) => {
  console.log(`Value changed from ${oldValue} to ${newValue}`);
});

```

### Deep watcher for arrays and objects

```
const user = ref({
  name: 'John Doe',
  age: 30,
  address: {
    city: 'Boston'
  }
});

watch(user, (newUser, oldUser) => {
  console.log(`User data changed`, newUser, oldUser);
}, { deep: true });
```

Can detect nested changes as well

### Template refs in composition API

For managing focus, integrating third-party libraries, or performing direct DOM manipulations on mount

Difference between `ref` and `useTemplateRef`
- `ref` is used for DOM element or general purpose data like numbers, strings, objects, array etc
- `useTemplateRef` is used specifically for DOM elements only like div, input, button, img
  
### Component `$emit` method
It is method used to create custom events in component enabling communication from child component to parent component allowing child to send signals or data upward in component heirarchy

When a child component needs to notify the parent about an event (like a button click or data change), it can use $emit to trigger a custom event.

Child simply emit events and parents have the implementation after emit is received. Child need not know anything about implementation

```
this.$emit(eventName, payload)
```

### Component registration

Two ways to register components:
1. Global
2. Local

Global:
- Use .component()
  ```
  const app = createApp({})
  app.component(
    'MyComponent'
  )
  ```
  or

  ```
  app
  .component('ComponentA', ComponentA)
  .component('ComponentB', ComponentB)
  .component('ComponentC', ComponentC)
  ```

  Make it work by calling:
  ```
  <Component A/>
  ```
  Global registration prevents build systems from removing unused components (a.k.a "tree-shaking"). If you globally register a component but end up not using it anywhere in your app, it will still be included in the final bundle.

  ### Local registration
  ```
  <script setup>
import ComponentA from './ComponentA.vue'
</script>

<template>
  <ComponentA />
</template>
```
or
```
import ComponentA from './ComponentA.js'

export default {
  components: {
    ComponentA
  },
  setup() {
    // ...
  }
}
```

### Props
Static array binding: 
Binding comment-ids prop of blogpost component to static array. `:` is essential as it tells Vue to treat it as JS expression instead of just strings or single string instead of an array
```
<BlogPost :comment-ids="[234, 266, 273]" />
```

Dynamic Binding
```
<BlogPost :comment-ids="post.commentIds" />
```

Props are read only

Example:
```
defineProps({
    limit: Number;
    showBtn: {
        type: Boolean
        default: false
    }
})

<template>
    <JobListing v-for"job in jobs.slice(0,limits || jobs.length)" :key="job.id" :job="job" />
    <section v-if="showBtn">
    <button></button>
    </section>
</template>


<jobListing :limit="3" :showBtn="true"/>
```

### Vue router

```
npm i vue-router
```

- src
  - router
    - index.js

***index.js***
```
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/'
            name: 'home'
            component: HomeView
        }
    ]
})

export default router
```

###main.js

```
import router from './router';
const app = createApp(App)
app.use(router);

```

###App.vue

```
import { RouterView } from 'vue-router'

<template>
    <Navbar />
    <RouterView />
</template>

```

To configure dynamic settings:

```
const isActiveLink = (routePath) =>{
    const route = useRoute();
    return route.path === routePath;
}

<RouterLink
to="/"
:class="[isActiveLink('/') ? '' : '']"
```

### Vue spinner

Install vue spinner
```
npm i vue-spinner
```

```
// Show loading spinner if loading = true
<div v=if="state.isLoading">PulseLoader</div>

else..
``

###useRoute()

Gives access to current route's information inside a component. It allows u to get details like
route parameters, query strings, route metadata without needing to use this.$route (available in Options API)

### Proxy

When you deploy your app then http://localhost:8000 will not work so use proxy:
Go to vite.config.js
```
export default defineConfig({
    server:{
        port: 3000,
        proxy:{
            '/api' : {
                target: 'http://localhost:8000',
                changeOrigin: true,
                rewrite:(path) => path.replace(/^\/api/, ''),
            }
        }
    }
})
```

For toast popup in vue use vue-toastification
