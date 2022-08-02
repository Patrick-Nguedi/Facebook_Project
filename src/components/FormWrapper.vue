<template>
  <div class="flex flex-col items-center lg:w-2/5">
    <form @submit="verifyUser" class="mx-2 bg-white rounded-xl drop-shadow-xl items-center flex flex-col 
    lg:w-96 md:h-96">
      <input class="caret-blue-600 border border-gray-300 py-3 
        focus:outline outline-blue-500 px-4 w-11/12 mt-4 rounded-md" 
        type="text" placeholder="enter email"
        v-model="user.mail"  
      />
      <input class="caret-blue-600 border border-gray-300 py-3 
        focus:outline outline-blue-500 px-4 w-11/12 mt-4 rounded-md" 
        type="password" placeholder="enter password"
        v-model="user.password" 
      />
      <button type="submit" class="font-bold text-white border-2
        rounded-md mt-4 py-3 contrast-150 bg-blue-500 mx-2 w-11/12">
        {{$t('button.nameConnect')}}
      </button>
        <span class="mt-4 text-center text-blue-500 hover:underline cursor-pointer">
          {{$t('forgot')}} 
        </span>
        <hr class="border-1 border-gray-300 lg:w-11/12 w-80 mx-6 mt-4 mb-2"/>
      <button class="font-bold text-white border-2
        rounded-md mt-4 py-3 contrast-150 bg-green-600 w-52 mb-6">
        {{$t('button.nameCreate')}}
      </button>
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

export default {
  name: "FormWrapper",
  components:{},
  data() {
    return {
      user:{
        mail: "",
        password: "",
      }
    }
  },
  emits:['performConnecting'],
  methods: {
    verifyUser(event: Event){
      event.preventDefault();
        if(this.user.mail && this.user.password){
          this.$emit('performConnecting',this.user)
          return;
        } console.log("vide")
      }
  }
}
</script>

<style scoped>

</style>