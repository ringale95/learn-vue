# API Styles

Vue components can be authored in two different API Styles.

- Options API
- Composition API

<code>Options API</code>
Define components logic using object of options such as:

- data
- methods
- mounted

Properties defined by options are exposed on <code>this</code> inside functions

**_Data_**

```
<script>
export default{
    data(){
        return {
            count: 0;
        }
    },

    methods: {
        increament(){
            this.count++;
        }
    },

    mounted(){
        console.log(`The initial count is ${this.count});
    }
}
</script>

<template>
<button @click="increment"> Count is: {{ count }}</button>
```

data() method is a special function in Vue components where we define stateful data.
data() returns an object which Vue treats as reactive state of component
data() returns an object with one property: count, set to an initial value of 0.
Vue will track changes to count and update component's view when count changes. Properties returned from data() (in this case, count) become available on this, making it accessible anywhere within the component as this.count
