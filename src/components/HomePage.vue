<template>
  <div class="flex items-center text-center bg-gray-50 h-screen lg:w-full">
    <div class="w-96 lg:w-full flex flex-col mx-auto lg:h-96 lg:my-auto 
      lg:mx-20 lg:flex-row lg:justify-evenly">
      <div class="flex flex-col lg:w-2/5 lg:text-left">
        <span class="lg:mt-20 lg:mb-0 font-mono tracking-tighter 
          font-extrabold text-blue-600 contrast-125 text-6xl mb-8">
            facebook
        </span>
        <span class="mx-4 hidden lg:contents lg:text-lg font-normal 
            tracking-tighter font-mono text-xl">
              {{$t('summary')}}
        </span>
        <template v-if="list.length > 0">
          <div class="font-semiebold text-xl px-4 mt-4 
                border-2 border-blue-500 contrast-150 rounded-xl"
            v-for="(item, index) in list" :key="index">
            <h2>{{$t('mail')}} : {{item.mail}}</h2>
            <h2>{{$t('password')}} : {{item.password}}</h2>
          </div>
        </template>
      </div>
      <FormWrapper @perform-connecting="displayUser"/>
    </div>
  </div>
</template>

<script lang="ts">
import FormWrapper from './FormWrapper.vue';
  export default {
    name: "HomePage",
    components: { 
      FormWrapper,
    },
    data(){
      return{
        list:[]
      } 
    },
   methods:{
      displayUser(message: String){
        this.list.push(message)
        message = "";
      }
    }
  }

</script>

<style scoped>

</style>