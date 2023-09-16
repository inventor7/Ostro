<template>
  <Icon id="ButtonFav" @click="handleFavClick()"
    class="p-1 cursor-pointer rounded-full transition-all ease-in-out duration-300 "
    :class="{ 'text-primary-600': !isFavorite, ' text-white bg-primary-600 ': isFavorite, }"
    name="material-symbols:favorite-outline-rounded" />
</template>

<script setup>
import { useWishListStore } from '~/stores/wishListStore'
import { useAlertStore } from '~/stores/alertStore';

const wishListStore = useWishListStore();
const alertStore = useAlertStore();


//functions
const { doAlert } = alertStore

const handleFavClick = () => {
  let str = 'added'
  if (props.isFavorite) { str = 'removed' }
  wishListStore.toggleWishListItem(props.prod)
  doAlert('success', 'Success', `the ${props.prod.title} is ${str} succesfully`, 3000)
}

const props = defineProps({
  prod: Object,
  isFavorite: {
    type: Boolean,
    default: false
  },
})
</script>


<style></style>