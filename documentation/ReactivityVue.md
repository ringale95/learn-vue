## Reactivity in Vue

Two ways to handle reactive data:
- ref()
- reactive()

1. ref()
    - Creates a reactive reference to a value. It wraps value and provides .value property to access and mutate value
  
  ```
    import { ref } from 'vue'
    const count = ref(0)
    console.log(count)          // Outputs: { value: 0 }
    console.log(count.value)     // Outputs: 0
    count.value++                // Increment the value
    console.log(count.value)     // Outputs: 1

  ```

   Declare refs() in setup() function
   ```
   export default{
    setup(){
        const count = ref(0)
        return {
            count
        }
    }
   }

   Modify ref in event handlers
   ```
   <template>
    <button @click="count++">{{ count }}</button>
   </template>
   ```

 .value allows to track when a <code>ref</code> value is accessed or mutated.


 2. reactive()
    - It makes entire object reactive instead of wrapping a single value
```
const state = reactive({ count: 0})
```
This makes every property inside state as reactive.

## Deep reactivity
All properties inside object or array including any nested objects are made reactive.

Example:
```
export default{
    setup(){
        const state = reactive({
            user:{
                name:'Alice',
                details:{
                    age: 25,
                    location: 'New York'
                }
            }
        });
        state.user.name = 'Bob',
        state.user.details.age = 30;
        return { state };
    }
}
```

ref()
```
export default{
    setup(){
        const user = ref({
            name: 'Alice',
            details:{
                age:26;
            }
        });
        user.value.details.age = 30;
        return { user }
    }
}

### Shallow reactivity:
Only the top-level properties are reactive any nested objects within those properties are not reactive
Example:
```
export default{
    setup(){
        const state = shallowReactive({
            user:{
                name: 'Alice',
                details: {
                    age:20
                }
            }
        });
        state.user = { name: 'Bob' } // this is reactive
        state.user.details.age = 55;   //this is not reactive
    }
}
```

If we need to wait for DOM to update after a state change use:
nextTick()

ref() is best for single values (primitives like numbers, strings, booleans).

reactive() is best for objects and collections (like arrays, objects, Map, Set) and allows tracking multiple properties.

Since reactive() returns a Proxy, some limitations exist:

Primitive values (like strings, numbers, booleans) cannot be directly used with reactive().

reactive() does not work well with destructuring. If you destructure properties from a reactive object, they lose reactivity.

```
let { count } = state  // Loses reactivity
```
