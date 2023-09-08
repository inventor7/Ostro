<template>
    <div id="products-main-container" class=" flex flex-row justify-start items-start w-full gap-4 ">
        <div id="filters" class=" shadow-2xl p-2 w-1/4 h-full  rounded-3xl " >
            <Filters />
        </div>
        <div id="products-section"  class="flex flex-col justify-start items-start w-full shadow-2xl rounded-3xl p-4  h-full gap-4 " >
            <div id="sorters" class="w-full h-1/6  bg-gray-400/30 rounded-3xl  " >
                <Sorters />
            </div>

            <div id="products-container" class=" w-full h-full rounded-3xl " >
                <ProductsList />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>