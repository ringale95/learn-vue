<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Two way data binding</h1>
  <input type="text" v-model="count"/> 
  <h2>{{ count }}</h2>
</template>

<script>
export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home New",
  data(){
    return{
      count:5
    }
  }
}
</script>