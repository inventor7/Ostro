<template>
  <Icon id="ButtonFav" @click="wishListStore.toggleWishListItem(prod)" class="p-1 cursor-pointer rounded-full "
    :class="{ 'text-primary-600': !isFavorite, ' text-white bg-primary-600 ': isFavorite ,}"
    name="material-symbols:favorite-outline-rounded" />
</template>

<script setup>
import { defineProps } from 'vue';
import { useWishListStore } from '~/stores/wishListStore'

const wishListStore = useWishListStore();




const props = defineProps({
  prod: Object,
  isFavorite: {
    type: Boolean,
    default: false
  },
})
</script>


<style>

</style>