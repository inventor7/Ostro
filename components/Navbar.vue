<template>
    <nav id="Navbar"
        class="fixed text-blackich-100 z-20 inset-x-1/2 top-0 flex flex-row justify-between items-center gap-10 bg-white w-[98%]  shadow-md -translate-x-1/2 px-4 py-1   rounded-b-3xl ">
        <div id="logo" class=" ">
            <img src="~/assets/Ostro.svg" alt="">
        </div>

        <div id="search-nav"
            class="  w-1/2 flex flex-row justify-between gap-4 border-[1px] border-blackich-500 items-center rounded-xl  px-2 py-1 ">
            <button class="text-blackich-300">
                <Icon name="material-symbols:search-rounded" size="24px" />
            </button>
            <input class=" w-full  outline-none" placeholder="Search.." type="text">
        </div>

        <div id="navigation">
            <ul class=" flex flex-row justify-between items-center w-full gap-8 ">
                <li @click="toggleWishList()" class=" text-icon ">
                    <Icon name="material-symbols:favorite-outline-rounded" size="24px" /> <span class=" text-lg ">Wish
                        List</span>
                </li>
                <li @click="toggleCart()" class="text-icon">
                    <Icon name="material-symbols:shopping-bag-outline" size="24px" /> <span class=" text-lg ">Cart</span>
                </li>
            </ul>
        </div>
        <div id="profile"   @click="toggleProfileModal()" class=" cursor-pointer " >
            <img src="~/assets/imn-profile.png" alt="">
        </div>
    </nav>
</template>

<script>

import { useCartStore } from '~/stores/cartStore';
import { useWishListStore } from '~/stores/wishListStore';
import { useModalStore } from '~/stores/modalStore';

export default {
    name: 'Navbar',
    setup() {

        const { isOpenCart, toggleCart } = useCartStore();
        const { isOpenwishList, toggleWishList } = useWishListStore();
        const { profileModal,toggleProfileModal } = useModalStore();

        return {
            isOpenCart, 
            isOpenwishList,
            profileModal,
            toggleCart,
            toggleWishList,
            toggleProfileModal
        }
    },
}
</script>
