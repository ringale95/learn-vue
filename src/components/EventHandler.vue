<template>
  <button @click="greet">Greet me</button>
</template>

<script>
import { ref } from 'vue';
export default{
  setup(){
  const name = ref('Vue js');
function greet(event){
  alert('Hello' + name.value)
  if(event){
    console.log(event)
    alert(`Event triggered by: ${event.target.tagName}`)
  }
}
return{
  name,
  greet 
}
  }
}

</script>