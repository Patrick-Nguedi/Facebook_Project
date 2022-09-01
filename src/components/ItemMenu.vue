<template>
  <div class="ml-8 mt-8 w-[215px] flex items-center h-[30px] bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-400">
    <component :is="icons[icon]" />
    <span>{{label}}</span>
  </div>
</template>

<script lang="ts" setup>
import AcademyIcon from './icons/AcademyIcon.vue'
import CycleIcon from './icons/CycleIcon.vue'
import DomainIcon from './icons/DomainIcon.vue'
import FacultyIcon from './icons/FacultyIcon.vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
const icons =
   {
     academy: AcademyIcon,
     cycle: CycleIcon,
     domain: DomainIcon,
     faculty: FacultyIcon
   }

</script>

<style scoped>

</style>
