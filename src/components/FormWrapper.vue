<template>
  <div class="flex flex-col items-center lg:w-2/5">
    <form @submit="verifyUser" class="mx-2 bg-white rounded-xl drop-shadow-xl items-center flex flex-col 
    lg:w-96 md:h-96">
      <InputComponent type="text" :placeholder="$t('placeholder_mail')" v-model="user.mail" />
      <InputComponent type="password" :placeholder="$t('placeholder_pass')" v-model="user.password" />
      <Button />
        <span class="mt-4 text-center text-blue-500 hover:underline cursor-pointer">
          {{$t('forgot')}} 
        </span>
        <hr class="border-1 border-gray-300 lg:w-11/12 w-80 mx-6 mt-4 mb-2"/>
      <a href="#" class="font-bold text-white border-2
        rounded-md mt-4 py-3 contrast-150 bg-green-600 w-52 mb-6">
        {{$t('button.nameCreate')}}
      </a>
    </form>
    <span class="mt-5 font-mono mx-4 lg:text-xs">
      <strong>
        {{$t('consigneTitle')}}
      </strong>
      {{$t('consigneFull')}}
    </span>
  </div>
</template>

<script lang="ts">
import {reactive} from "vue";
import InputComponent from "./InputComponent.vue";
import Button from "./Button.vue";
interface User {
  mail: string,
  password: string
}
export default {
  name:"FormWrapper.vue",
  components : {InputComponent, Button},
  emits: ["performConnecting"],
  setup: (props, { emit }) => {
    const user : User = reactive({ mail:"", password:""})

    function verifyUser(event: Event) {
      event.preventDefault();
      emit('performConnecting',{...user})
      user.mail=""
      user.password=""
    }
    return{
      user, emit, verifyUser
    }
  },
}
</script>

<style scoped>

</style>