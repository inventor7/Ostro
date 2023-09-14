<template>
    <nav id="Navbar"
        class="fixed flex flex-col justify-start items-center  top-0  z-30 inset-x-1/2 -translate-x-1/2   w-[98%]  text-blackich-100  bg-white shadow-md  px-4 py-1   rounded-b-3xl ">

        <div class=" flex flex-row justify-between items-center gap-10 w-full  ">

            <div id="logo" class=" flex flow-row justify-start items-center gap-8 w-full  ">
                <NuxtLink to="/"> <img src="~/assets/Ostro.svg" alt=""></NuxtLink>
            </div>



            <div id="products-navigation"
                class=" flex flex-row justify-center items-center gap-8 z-20 fixed inset-x-1/2 top-0 -translate-x-1/2 w-fit h-[58px]  ">
                <NuxtLink class=" h-full " to="/products">
                    <div class=" flex flex-col justify-between items-center h-full group cursor-pointer  ">
                        <span class=" w-full  h-1 rounded-full "></span>
                        <span class=" text-lg ">Men </span>
                        <span
                            class=" w-full  h-1 rounded-full group-hover:bg-primary-600 transition-all duration-150 ease-in-out  "></span>
                    </div>
                </NuxtLink>
                <NuxtLink class=" h-full " to="/products">
                    <div class=" flex flex-col justify-between items-center h-full group cursor-pointer   ">
                        <span class=" w-full  h-1 rounded-full "></span>
                        <span class=" text-lg ">Women </span>
                        <span
                            class=" w-full  h-1 rounded-full group-hover:bg-primary-600 transition-all duration-150 ease-in-out  "></span>
                    </div>
                </NuxtLink>
                <NuxtLink class=" h-full " to="/products">
                    <div class=" flex flex-col justify-between items-center h-full group cursor-pointer   ">
                        <span class=" w-full  h-1 rounded-full "></span>
                        <span class=" text-lg ">Kids</span>
                        <span
                            class=" w-full  h-1 rounded-full group-hover:bg-primary-600 transition-all duration-150 ease-in-out  "></span>
                    </div>
                </NuxtLink>
                <div class=" flex flex-col justify-between items-center h-full group cursor-pointer   ">
                    <span class=" w-full  h-1 rounded-full "></span>
                    <span class=" text-lg ">Collections </span>
                    <span
                        class=" w-full  h-1 rounded-full group-hover:bg-primary-600 transition-all duration-150 ease-in-out  "></span>
                </div>
                <div class=" flex flex-col justify-between items-center h-full group cursor-pointer    ">
                    <span class=" w-full  h-1 rounded-full "></span>
                    <span class=" text-lg ">Offers </span>
                    <span
                        class=" w-full  h-1 rounded-full group-hover:bg-primary-600 transition-all duration-150 ease-in-out  "></span>
                </div>


            </div>

            <div id="profile"
                class="flex flex-row justify-start items-center cursor-pointer gap-8 w-full text-blackich-100 ">
                <ul class=" flex flex-row justify-end items-center w-full gap-8 ">
                    <li @click="toggleWishList()" class=" text-icon ">
                        <Icon name="material-symbols:favorite-outline-rounded" size="24px" /> <span class=" text-lg ">Wish
                            List</span>
                    </li>
                    <li @click="toggleCart()" class="text-icon">
                        <Icon name="material-symbols:shopping-bag-outline" size="24px" /> <span
                            class=" text-lg ">Cart</span>
                    </li>
                </ul>
                <img @click="toggleProfileModal()" src="~/assets/imn-profile.png" alt="">
            </div>
        </div>

        <InputsSearchHero :class="{ 'hidden': isShowSearchBar && useRoute().path === '/' }" :isSearchHero="getSearchHero" />
    </nav>
</template>

<script>
//store
import { useCartStore } from '~/stores/cartStore';
import { useWishListStore } from '~/stores/wishListStore';
import { useModalStore } from '~/stores/modalStore';



export default {
    name: 'Navbar',
    props: {
        isShowSearchBar: Boolean
    },
    setup() {

        //store
        const { isOpenCart, toggleCart } = useCartStore();
        const { isOpenwishList, toggleWishList } = useWishListStore();
        const { profileModal, toggleProfileModal  } = useModalStore();
        const  { getSearchHero } = toRefs(useModalStore())

        return {
            isOpenCart,
            isOpenwishList,
            profileModal,
            toggleCart,
            toggleWishList,
            toggleProfileModal,

            //computed
            getSearchHero
        };
    },
}
</script>
