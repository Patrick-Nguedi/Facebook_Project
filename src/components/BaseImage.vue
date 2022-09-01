<template>
  <img :src="getImageUrl" alt="image" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const getImageUrl = computed(() => {
  return new URL(props.path, import.meta.url).href;
});
</script>
