<template>
    <Navbar />
    <Cart />
    <WishList />
    <main class=" mt-24 mb-8 w-[98%] mx-auto  ">
        <slot />
    </main>
    <Footer />
</template>


<script>


</script>
<style scoped >
main {
    background-color: transparent;
}
</style>
