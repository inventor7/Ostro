<template>
    <Hero />
    <ProfileModal />
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

