<template>
  <section class="min-w-[360px] lg:max-w-[1759px] lg:w-[90%] lg:mx-auto">
    <div class="flex justify-between items-center h-[85px] font-outfit lg:py-2.5">
      <div class="flex justify-between items-center px-5 w-full lg:w-[50%]">
        <BaseImage path="../assets/images/logoIUC.png" />
        <div class="hidden lg:inline lg:w-[55%]">
          <ul class="flex space-x-10 items-center">
            <li
              v-for="(menu, index) in menuList"
              :key="index"
              @click="activate(index)"
              :class="
                currentIndex === index
                  ? 'draw-line cursor-pointer'
                  : 'default cursor-pointer'
              "
            >
              {{ menu }}
            </li>
          </ul>
        </div>
        <IconMenu class="cursor-pointer lg:hidden" />
      </div>
      <div
        class="hidden lg:flex lg:justify-end lg:space-x-6 lg:w-[30%] lg:items-center"
        data-test="Sign-In"
      >
        <a href="#" class="cursor-pointer capitalize"> Sign In </a>
        <ButtonWrapper label="Create account" />
      </div>
    </div>
    <article class="relative h-[574px]">
      <BaseImage
        path="../assets/images/primaryImage.png"
        class="object-fill object-bottom h-full top-0 left-0 brightness-75 lg:w-full"
      />
      <div
        class="absolute top-14 left-5 space-y-4 flex flex-col justify-center font-outfit lg:pl-32 text-white lg:top-[238px] lg:space-y-5"
      >
        <div class="font-medium font-abrilfatface text-3xl lg:text-6xl lg:w-full">
          Admission &agrave; l'IUC
        </div>
        <div class="font-outfit font-light text-sm flex flex-col lg:text-xl">
          <span
            >Decouvrez les modalites et les dates d'admission et deposez</span
          >
          <span>votre candidature a l'institut Universitaire de la Cote</span>
        </div>
      </div>
    </article>
    <article class="px-6 pt-6 space-y-10 lg:px-0">
      <div
          class="px-6 py-10 flex flex-col justify-between bg-[#F1F8FF] h-[569px] lg:mt-8 lg:px-12 lg:flex lg:flex-row lg:justify-between lg:h-[271px] lg:mb-[60px]"
        >
          <div class="flex flex-col space-y-8 lg:w-[45%]">
            <span class="font-abrilfatface text-4xl">
              Conditions d’admission
            </span>
            <span class="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              feugiat consectetur tristique blandit libero ultricies varius.
              Justo tempus sem velit lobortis lobortis.
            </span>
          </div>
          <div
            class="text-base flex flex-col space-y-8 lg:pb-12 lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-[45%]"
          >
            <div class="flex flex-col space-y-2 lg:pt-9">
              <span class="text-blue-500">Age du candidat</span>
              <span class="font-light"> Entre 16 et 30 ans </span>
            </div>
            <div class="flex flex-col space-y-2">
              <span class="text-blue-500">Type de Baccalaureat</span>
              <span class="font-light">Series : A, C, D, E, TI</span>
            </div>
            <div class="flex flex-col space-y-2">
              <span class="text-blue-500"> Moyenne </span>
              <span class="font-light"> Minimum 12</span>
            </div>
          </div>
        </div>
        <div class="relative lg:ml-[50px] lg:pb-5 lg:mr-8">
          <span class="text-lg font-medium text-blue-500">Dossier de candidature</span>
          <div class="border border-blue-500 mt-1"></div>
          <div
            class="w-2 h-2 rounded-full bg-blue-500 absolute top-[28.5px] right-0 lg:top-[28.5px]"
          ></div>
          <div class="flex flex-col space-y-4 mt-6">
            <div class="flex flex-row relative space-x-6">
              <IconRightBold class="absolute top-[5px]"/>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt error veritatis! Quis ea nulla quisquam magnam rem deserunt hic id, omnis ut, reprehenderit.
              </span>
            </div>
            <div class="flex flex-row relative space-x-6">
              <IconRightBold class="absolute top-[5px]"/>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt error veritatis! Quis ea nulla quisquam magnam rem deserunt hic id, omnis ut, reprehenderit.
              </span>
            </div>
            <div class="flex flex-row relative space-x-6">
              <IconRightBold class="absolute top-[5px]"/>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt error veritatis! Quis ea nulla quisquam magnam rem deserunt hic id, omnis ut, reprehenderit.
              </span>
            </div>
          </div>
        </div>
        <div
            class="text-lg bg-[#F1F8FF] px-6 py-10 flex flex-col justify-between h-[465px] lg:px-12 lg:h-[198px] lg:text-base lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-full"
          >
            <div class="flex flex-col space-y-2">
              <span class="text-blue-500">Type d’examen</span>
              <span class="font-light"> Epreuves ecrites </span>
            </div>
            <div class="flex flex-col space-y-2">
              <span class="text-blue-500">Regime</span>
              <span class="font-light">Cours du jour</span>
            </div>
            <div class="flex flex-col space-y-2">
              <span class="text-blue-500"> Date depot de dossier </span>
              <span class="font-light"> 28 / 07 / 2022</span>
            </div>
            <div class="flex flex-col space-y-2">
              <span class="text-blue-500">Date de l’examen</span>
              <span class="font-light"> 11 / 08 / 2022 </span>
            </div>
          </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";


const currentIndex = ref<number>(0);

const activate = (index: number): void => {
  currentIndex.value = index;
};

const menuList = ref<string[]>(["Admission", "Documentation", "Contact"]);
</script>

<style scoped>
.default {
  @apply text-base text-neutral-500 font-outfit font-normal hover:after:font-semibold capitalize
    hover:text-black after:w-full after:h-[3px] after:mt-1 after:bg-black
    after:block after:scale-x-0 after:transition
    after:duration-500 hover:after:scale-x-[60%] hover:after:duration-300;
}

.draw-line {
  @apply after:w-full after:block after:rounded-lg after:h-[3px] after:bg-black after:mt-1
    after:font-semibold after:scale-x-[60%] text-black;
}
</style>
