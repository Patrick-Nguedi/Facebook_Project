<template>
  <button class="font-bold text-white border-2
     rounded-md mt-4 py-3 contrast-150">
    {{name}}
  </button>
</template>

<script lang="ts">
  export default {
    name: "Button",
      props:{
        name:{
          type: String,
          required: true
        },
      }
  }
</script>

<style scoped>

</style>