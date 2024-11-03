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