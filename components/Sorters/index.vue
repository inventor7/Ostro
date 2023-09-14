<template>
  <div class=" flex flex-row justify-between items-center w-full h-fit font-semibold text-blackich-200 border border-gray-300 rounded-xl p-2  ">
    <div @click="sort('year')" class="sortButton" :class="{ 'activeSort': sorters[0].value }">
      <p>Year</p>
      <SortersIcon :is-active="sorters[0].value" :acsending="isOdd" />
    </div>

    <div @click="sort('price')" class="sortButton" :class="{ 'activeSort': sorters[1].value }">
      <p>Price</p>
      <SortersIcon :is-active="sorters[1].value" :acsending="isOdd" />

    </div>

    <div @click="sort('rating')" class="sortButton" :class="{ 'activeSort': sorters[2].value }">
      <p>Rating</p>
      <SortersIcon :is-active="sorters[2].value" :acsending="isOdd" />
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/productsStore'

//store
const { sortProducBy } = useProductsStore();


//data
const sorters = ref([
  {
    name: 'year',
    value: false
  },
  {
    name: 'price',
    value: false
  },
  {
    name: 'rating',
    value: false
  }
])
const clickNumber = ref(2)


//computed
const isOdd = computed(() => {
  return clickNumber.value % 2 === 0
})



//functions
const sort = (sort) => {

  //active the  sort clicked button
  sorters.value.forEach((srt) => {
    if (srt.name === sort) {
      srt.value = true
    } else {
      srt.value = false
    }
  })

  //sort asccending or disacsending
  if (isOdd.value) {
    clickNumber.value++
    sortProducBy(sort, 1)
  } else {
    clickNumber.value--
    sortProducBy(sort, -1)
  }

}

</script>

<style>
.activeSort {
  @apply bg-primary-600/20 text-primary-600
}

.sortButton {
  @apply flex flex-row justify-center items-center gap-2 px-3 py-1 rounded-md cursor-pointer select-none
}
</style>

