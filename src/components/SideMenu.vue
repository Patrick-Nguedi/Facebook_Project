<template>
  <div class="w-[230px] h-[180px] px-6 py-10 border">
    <span>Menu</span>
    <div>
      <ItemMenu label="Academic Year">
      </ItemMenu>
    </div>
    <div>
      <component :is="list.IconB"></component>
      <ItemMenu label="Cycle"></ItemMenu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ItemMenu from './ItemMenu.vue'

const list = [{ IconAcademy: 'IconAcademy' },
{ IconB: 'IconCycle' }]

console.log('IconA', list.IconA)

</script>

<style scoped>

</style>
