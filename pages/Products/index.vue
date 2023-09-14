<template>
    <div id="products-main-container" class="flex flex-row justify-start items-start w-full gap-2 -mt-24 pt-44 ">
        <div id="filters" class=" h-[75vh] border rounded-3xl sticky top-40 left-0 shadow-xl  w-1/4  ">
            <Filters class="border-gray-300 rounded-3xl overflow-y-scroll " />
        </div>
        <div id="products-section"
            class="flex flex-col justify-start items-start w-full border border-gray-300 rounded-3xl p-4  h-full gap-4 ">
            <ProductList />
        </div>
    </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/productsStore';
import { toRefs, ref, onMounted } from 'vue';

const productsStore = useProductsStore()


</script>