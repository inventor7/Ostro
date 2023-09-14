<template>
    <div v-if="isSearchHero" id="search-hero"
        class="flex flex-row justify-between items-center gap-4 w-full bg-white  rounded-xl"
        :class="{ 'border border-gray-300 my-5 ': isSearchHero }">

        <input v-model="searchInput" class=" w-full  outline-none ml-4"
            :class="{ ' text-base py-1.5 ': isSearchHero, 'text-xl  py-3': !isSearchHero }" placeholder="Shoes,Hijab.."
            type="text">
        <button class="text-white border-[1px] border-primary-600 bg-primary-600 h-full text-icon rounded-r-xl "
            :class="{ ' px-2 py-1.5': isSearchHero, 'px-4 py-3': !isSearchHero }">
            <Icon name="material-symbols:search-rounded" size="24px" />
            <span class=" text-lg ">Search</span>
        </button>
    </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/productsStore';
import { useUtils } from '~/composables/useUtils';

//store
const { searchProduct } = useProductsStore();
const { scrollTo } = useUtils();

//data
const searchInput = ref('')
const productContainer = ref(null)

//hooks

onMounted(() => {
    productContainer.value = document.querySelector('#products-main-container')
})

watch(() => {
    searchProduct(searchInput.value)
    scrollTo(productContainer.value)
})



defineProps({
    isSearchHero: {
        default: false,
        type: Boolean
    }
})


</script>

