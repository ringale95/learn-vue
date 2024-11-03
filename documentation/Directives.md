## Directives

###Directives are special tokens in markup that tell library to do something with DOM element. They are prefixed with "v-" to indicate that they are special attribute provided by Vue.

Specific purpose:
- conditional rendering
- binding data
- looping
- handling events

1. Data Binding:
   - These bind data to HTML attributes making element reactive by connecting them to component's state
```
<img v-bind:src="imageURL">
or
<img :src="imageURL">
```

Two way Data binding: Allows data to be synchronised between UI and JS model(data) in both directions.

Example: form elements like input, textarea, select
```
v-model
```
Data to view: When data property changes in component, Vue updates DOM to reflect new value
View to data: When user updates value in UI Vue updates data property in component

```
<template>
<h1> Two way db </h1>
<input type="text" v-model="count"/>
<span> {{ count }} </span>
</template>

<script>
export default{
    data(){
        return{
            count: 0;
        }
    }
}
</script>
```

Other directives:

1. v-if: Renders element if expression is true
   ```
   <p v-if="isVisible">This is a para rendered if "isVisisble" is true </p>
   ```
2. v-else
   ```
   <p v-else>Error loading data <p>
3. v-show
   ```
   Toggles visiblity of element using CSS display based on condition unlike v-if it does not remove element from DOM
   ```

Looping Rendering
1. v-for
   ```
   <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }} </li>
   </ul> 
   ```

Event Handling Directives
- Used to listen for and handle user interactions, such as clicks, form submissions and key press

1. v-on: Attaches an event listener to an element and executes a method when event occurs
   
   ```
   <button v-on:click="handleClick">Click me</button>
   ```

2. Text and HTML Rendering Directives
   1. v-text: Sets the text content of an element. Replaces inner content of element with specified value
    ```
    <p v-text="message"></p>
    ```
    Above is similar to {{ message }} but it does not allow HTML

3. v-html: Renders raw html

4. v-pre: Prevents Vue from compiling this element. Useful when we want to display raw mustache
```
<div v-pre>{{ this will not be compiled }}</div>
```
