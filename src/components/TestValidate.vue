<template>
  <div>
    <form class="flex flex-col justify-between" @submit.prevent="checkForm">
      <input class="ml-8 mt-8 border-2 border-blue-400 shadow-lg w-1/3" 
      type="text"
      v-model="user.mail" 
      />
      <input class="ml-8 mt-8 border-2 border-blue-400 shadow-lg w-1/3" 
      type="password"
      v-model="user.password" 
      />
      
      <button class="ml-8 mt-8 border-2 border-blue-400 shadow-lg w-1/3 bg-green-500" 
        type="submit" @click="verifyUser">
        Test
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "TestValidate",
    data(){
      return{
        user:{
          mail: "",
          password: ""
        }
      }
    },
    emits:['perform-connecting'],
    methods: {
      verifyUser(){
        if(this.user.mail && this.user.password){
          this.$emit('perform-connecting',this.user)
          return;
        } console.log("Vide")
      }
    },
  }
</script>

<style scoped>

</style>