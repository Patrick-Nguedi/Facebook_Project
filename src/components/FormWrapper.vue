<template>
  <div class="flex flex-col items-center lg:w-2/5">
    <form @submit="verifyUser" class="mx-2 bg-white rounded-xl drop-shadow-xl items-center flex flex-col 
    lg:w-96 md:h-96">
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
      <Button 
        name="Se connecter" 
        class="bg-blue-500 mx-2 w-11/12"
        @click="verifyUser"
      />
        <span class="mt-4 text-center text-blue-500 hover:underline cursor-pointer">
          Mot de passe oublie ?
        </span>
        <hr class="border-1 border-gray-300 lg:w-11/12 w-80 mx-6 mt-4 mb-2"/>
      <Button 
        name="Creer nouveau compte" 
        class="bg-green-600 w-52 mb-6"
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

<script lang="ts">
import Button from './Button.vue';
export default {
  name: "FormWrapper",
  components: {
    Button
  },
  data() {
    return {
      user:{
          mail: "",
          password: "",
      },
    };
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