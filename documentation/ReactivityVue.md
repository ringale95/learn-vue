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
