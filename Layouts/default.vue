<template>
    <LayoutNavbar :isShowSearchBar="isShowSearchBar" />
    <SideBarCart />
    <SideBarWishList />

    <main class=" bg-slate-50  mt-24 mb-8 w-[98%] mx-auto   ">
        <slot />
    </main>
    <LayoutFooter />

    <!-- modals -->
    <div id="modal">
    </div>
    <ModalProfileModal />

    <!-- Alerts -->
    <div class="fixed z-[60] right-2 bottom-2 w-1/3 space-y-4">
        <TransitionGroup name="slidingRight">
            <Alert v-for="al in Alerts" :key="al.index" :status="al.status" :title="al.title" :message="al.message"
                :type="al.type" @closeAlert="al.status = false" />
        </TransitionGroup>
    </div>
</template>



  
<script setup>
import { ref, onMounted, onUnmounted, toRefs } from 'vue';
import { useAlertStore } from '~/stores/alertStore';


//store 
const alertStore = useAlertStore()

//data
const isShowSearchBar = ref(false);
const { Alerts } = toRefs(alertStore)

//if scrollY is more than the height of the hero section, show the search bar (by using it's id)
const handleScroll = () => {
    if (document.querySelector('#hero-container')) {
        if (window.scrollY > document.querySelector('#hero-container').clientHeight * 0.8) {
            isShowSearchBar.value = false;
        } else {
            isShowSearchBar.value = true;
        }
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
