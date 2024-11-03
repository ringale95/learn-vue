<!--Binding class attribute-->

<script>
export default{

//data is a method where we define component's reactive properties. Vue uses returned object to initialize component's state
    data(){
      return{
        isActive: true,
        isError: false
    }
  },
  methods:{
    toggleActive(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<template>
  <div>
    <p v-if="isActive">This section is active</p>
    <button @click="toggleActive">Toggle Active</button>
  </div>
</template>