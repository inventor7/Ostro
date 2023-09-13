<template>
  <NuxtLink class=" w-full h-full " :to="pathId">
    <div class=" border border-gray-300 relative flex flex-col justify-start items-start shadow-xl rounded-xl h-full ">
      <div id="product-rating"
        class=" absolute bg-gray-300/30 top-2 right-2 flex flex-row justify-center items-center backdrop-blur-lg px-1 py-0.5 b0 rounded-xl gap-[0.5px] ">
        <p class=" text-primary-600 ml-1">{{ rating }}</p>
        <Icon class=" text-2xl text-center text-primary-600  pb-1" name="material-symbols:star-rounded" />
      </div>
      <img src="~/assets/nike1.jpg" class=" h-3/5 w-full object-cover rounded-t-xl  " alt="no img">
      <div class=" flex flex-col justify-between items-start h-full w-full  p-2">
        <h1 class=" text-2xl font-semibold text-blackich-100 ">{{ title }}</h1>
        <div id="colors" class=" flex flex-row justify-start items-center w-full gap-2 ">
          <div v-for="color in colors" class="h-3 w-3 rounded-full"
            :class="{ 'bg-primary-600': color === 'primary', 'bg-gray-600': color === 'gray', 'bg-sky-600': color === 'sky' }">
          </div>

        </div>
        <div id="price" class=" text-blackich-300 text-lg font-semibold ">
          {{ price }} DZD
        </div>
        <div id="action-section" class=" flex flex-row justify-between items-center w-full   ">
          <div id="tags" class=" flex flex-row justify-start items-center gap-2  ">
            <span v-for=" tag in tags " class="text-sm text-blackich-200 bg-gray-300/30 px-2 py-0.5 rounded-xl ">
              {{ tag }}
            </span>
          </div>

          <div id="heart-reaction">
            <Icon class="  p-1 rounded-full text-3xl"
              :class="{ 'text-primary-600': !isFavorite, ' text-white bg-primary-600 ': isFavorite }"
              name="material-symbols:favorite-outline-rounded" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { defineProps } from 'vue';

//path to [id].vue
let pathId = '/products/' + params.id;

const params = defineProps({
  id: String,
  title: String,
  rating: Number,
  colors: Array,
  price: Number,
  tags: Array,
  isFavorite: {
    type: Boolean,
    default: false
  },
})

</script>
