<template>
    <!-- Products List -->
    <div class=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 w-full h-full gap-x-4 gap-y-8 ">
        <Product v-for="product in processedProducts" :id="product.id" :product="product" />
    </div>
</template>
 
<script setup>
import { useProductsStore } from '~/stores/productsStore';
import { toRefs } from 'vue';

const productsStore = useProductsStore();
const { processedProducts } = toRefs(productsStore)



</script>
 
