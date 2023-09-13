<template>
    <LayoutNavbar :isShowSearchBar="isShowSearchBar" />
    <SideBarCart />
    <SideBarWishList />

    <main class=" mt-24 mb-8 w-[98%] mx-auto  ">
        <slot />
    </main>
    <LayoutFooter />

    <!-- modals -->
    <Modal 
    :is-visible="getIsModal"
    :title="getModal.title" 
    :done-button="getModal.doneButton"
    :done-button-color="getModal.doneButtonColor" 
    :cancel-button="getModal.cancelButton"
    :is-cancel-button="getModal.isCancelButton" 
    :cancel-button-collor="getModal.cancelButtonCollor"
    :body="getModal.body" 
    />

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
    console.log('mounted');
});


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    console.log('unmounted');
});


</script>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>
