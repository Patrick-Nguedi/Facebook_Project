<template>
  <div
    class="cursor-pointer h-[129px] flex justify-between border border-gray-100 rounded overflow-hidden font-outfit"
  >
    <div class="relative h-full w-[38%]">
      <BaseImage :path="imageUrl" class="absolute object-cover w-full h-full" />
    </div>
    <div class="flex flex-col justify-between py-[5%] w-[50%] font-outfit">
      <span class="font-light leading-4 pl-2 text-xs" data-test="level">{{
        domain.levelName
      }}</span>
      <div class="flex flex-col justify-between pl-2">
        <span
          class="font-semibold text-sm leading-5"
          data-test="cycle-and-specialty"
          >{{ domain.cycleName }} {{ domain.codeName }}</span
        >
        <span
          class="font-normal leading-5 text-gray-300 text-sm text-gray-600"
          data-test="specialty"
          >{{ domain.specialty }}</span
        >
      </div>
    </div>
    <div class="flex justify-end items-end pr-[4%] pb-[8%] w-[10%]">
      <RightArrow />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RightArrow from "../components/icons/RightArrow.vue";
import BaseImage from "../components/BaseImage.vue";
import type { PropType } from "vue";
import type { Examination } from "@/domain/exam";

defineProps({
  domain: Object as PropType<Examination>,
  imageUrl: {
    type: String,
    default: () => {
      const imageFiles: string[] = ["pc.jpg", "studytwo.jpg", "domain.jpeg"];
      return `../assets/images/${
        imageFiles[Math.floor(Math.random() * imageFiles.length)]
      }`;
    },
  },
});
</script>
