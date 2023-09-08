<template>
    <div>
        <!-- hero has height of screen -->
        <Hero />


        <!-- showcase of products -->
        <div id="products-section" class=" mt-8 mb-8 ">
            <h1 class=" text-3xl font-bold text-center mb-8 ">Explore our Collections</h1>
            <Collections />
        </div>
    </div>
</template>

<script setup >

definePageMeta({
    title: 'Home',
    description: 'This is the home page',
}),

    useHead({
        title: 'Home',
        description: 'This is the home page',
    })
</script>

<style>
div {
    list-style: none;
}
</style>

