<template>
  <div class="flex flex-col items-center lg:w-2/5">
    <form @submit.prevent="checkForm" 
      class="mx-2 bg-white rounded-xl drop-shadow-xl 
      items-center flex flex-col lg:w-96 md:h-96">
      <input 
        class="caret-blue-600 border border-gray-300 py-3 
        focus:outline outline-blue-500 px-4 w-11/12 mt-4 rounded-md" 
        type="text" placeholder="enter email"
        v-model="user.mail"  
      />
      <input class="caret-blue-600 border border-gray-300 py-3 
        focus:outline outline-blue-500 px-4 w-11/12 mt-4 rounded-md" 
        type="password" placeholder="enter password"
        v-model="user.password" 
      />
      <ButtonBadge 
        nameButton="Se connecter" 
        class="bg-blue-500 mx-2 w-11/12"
        @click="verifyUser"
      />
        <span class="mt-4 text-center text-blue-500 hover:underline cursor-pointer">
          Mot de passe oublie ?
        </span>
        <hr class="border-1 border-gray-300 lg:w-11/12 w-80 mx-6 mt-4 mb-2"/>
      <ButtonBadge 
        nameButton="Creer nouveau compte" 
        class="bg-green-600 w-52 mb-6"
        @click="verifyUser"
      />
    </form>
    <span class="mt-5 font-mono mx-4 lg:text-xs">
      <strong>
          Creer une page
      </strong>
      pour une celebrite, une marque ou une entreprise.
    </span>
  </div>
</template>

<script>
import ButtonBadge from './ButtonBadge.vue';
export default {
  name: "FormCard",
  components: {
    ButtonBadge
  },
  data() {
    return {
      errors: [],
      user:{
          mail: "",
          password: "",
      },
    };
  },
  emits:['perform-connecting'],
  methods: {
    verifyUser(){
        if(this.user.mail && this.user.password){
          this.$emit('perform-connecting',this.user)
          return;
        } console.log("Vide")
      }
  }
}
</script>

<style scoped>

</style>