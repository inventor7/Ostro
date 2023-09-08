<template>
    <Navbar :isShowSearchBar="isShowSearchBar" />
    <Cart />
    <WishList />
    <ProfileModal />
    <main class=" mt-24 mb-8 w-[98%] mx-auto  ">
        <slot />
    </main>
    <Footer />
</template>



  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isShowSearchBar = ref(false);


//if scrollY is more than the height of the hero section, show the search bar (by using it's id)
const handleScroll = () => {
    if (window.scrollY > document.querySelector('#hero-container').clientHeight * 0.8) {
        isShowSearchBar.value = false;
    } else {
        isShowSearchBar.value = true;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    console.log('mounted');
});


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    console.log('unmounted');
});






</script>

<style>
::-webkit-scrollbar ::-webkit-scrollbar-thumb {
    display: none;


}

::-webkit-scrollbar {
    display: none;
}
</style>
