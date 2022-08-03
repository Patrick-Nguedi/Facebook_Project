<template>
    <input class="caret-blue-600 border border-gray-300 py-3 focus:outline 
    outline-blue-500 px-4 w-11/12 mt-4 rounded-md" :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<script lang="ts">
  export default {
    name: "Input",
    props:{
      modelValue: {
        type: String,
        required: true
      }
    },
}
</script>

<style scoped>

</style>