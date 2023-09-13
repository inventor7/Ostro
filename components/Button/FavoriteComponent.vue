<template>
  <Icon @click="toggleFav()" class=" p-1 rounded-full text-3xl"
    :class="{ 'text-primary-600': !isFavorite, ' text-white bg-primary-600 ': isFavorite }"
    name="material-symbols:favorite-outline-rounded" />
</template>

<script setup>
import { defineProps } from 'vue';
import { useWishListStore } from '~/stores/wishListStore'

const wishListStore = useWishListStore();

const toggleFav = () => {
  emit['changeFav']
}

defineProps({
  prod: Object,
  isFavorite: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 24
  },
  paddingNumber: {
    type: Number,
    default: 20
  }
})
</script>
