<template>
  <input class="caret-blue-600 border border-gray-300 py-3 
    focus:outline outline-blue-500 px-4 w-11/12 mt-4 rounded-md"
    
  />
</template>

<script>
export default {
  name: "Input",
    props:{
      userContact: {
        type: String
      },
      userPassword: {
        type: String
      },
      data (){
        return{
        }
      },
    emits: {

    }
    },
}
</script>

<style scoped>
</style>
