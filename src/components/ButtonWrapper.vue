<template>
  <button
    data-test="label"
    class="bg-blue-500 w-36 h-10 px-4 rounded text-white text-base font-outfit font-normal"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonWrapper",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
