<template>
    <LayoutNavbar :isShowSearchBar="isShowSearchBar" />
    <SideBarCart />
    <SideBarWishList />

    <main class=" mt-24 mb-8 w-[98%] mx-auto  ">
        <slot />
    </main>
    <LayoutFooter />

    <!-- modals -->
    <div id="modal">
    </div>
    <ModalProfileModal />
</template>



  
<script setup>
import { ref, onMounted, onUnmounted, toRefs } from 'vue';
import { useModalStore } from '~/stores/modalStore';


//store 
const modalStore = useModalStore();
const { getModal } = modalStore
const { getIsModal  } = toRefs(modalStore)

//data
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
});


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});


</script>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>
