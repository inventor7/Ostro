<template>
    <div class="flex flex-row justify-between items-start w-full py-1 rounded-lg mb-2 ">
        <slot />

        <div class=" flex flex-col justify-start items-start gap-1 w-full ">
            <div @click="$emit('openList')" class=" flex flex-row justify-between items-center w-full cursor-pointer ">
                <span class=" w-full text-start ml-2 ">{{ name }}</span>
                <svg :class="{ 'rotate-180': isOpenList }" width="14" height="8" viewBox="0 0 20 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.94531L10.0338 11.4346" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round" />
                    <path d="M18 2.21292L10.1671 11.7022" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round" />
                </svg>
            </div>
            <div v-if="isOpenList" class=" flex flex-col justify-start items-start gap-3 p-2 bg-white w-full  ">

                <li @click="filterSubFilter(subf)" v-for="subf in subFilters" class=" cursor-pointer " >
                    {{ subf }}
                </li>

            </div>
        </div>

    </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/productsStore'

//store
const { filterBySubFilter ,filterProductsByType  } = useProductsStore()

const filterSubFilter = (filter) => {
    filterBySubFilter(filter,filterProductsByType(props.name))
}


//emits and props
const emit = defineEmits(['openList'])
const props = defineProps({
    name: String,
    subFilters: {
        type: Array,
        default: []
    },
    isOpenList: {
        type: Boolean,
        default: false
    }
})
</script>

<style>
li {
    @apply list-disc text-blackich-200
}
</style>