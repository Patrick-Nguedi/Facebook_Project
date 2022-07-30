<template>
  <button type="submit" class="font-bold text-white border-2
     rounded-md mt-4 py-3 contrast-150">
    {{nameButton}}
  </button>
</template>

<script>
  export default {
    name: "ButtonBadge",
      props:{
        nameButton:{
          type: String,
          required: true
        },
      }
  }
</script>

<style lang="scss" scoped>

</style>