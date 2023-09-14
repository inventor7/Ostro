<template>
    <nav id="Navbar"
        class="fixed flex flex-col justify-start items-center  top-0  z-30 inset-x-1/2 -translate-x-1/2   w-[98%]  text-blackich-100  bg-white shadow-md  px-4 py-1   rounded-b-3xl ">

        <div class=" flex flex-row justify-between items-center gap-10 w-full  ">

            <div id="logo" class=" flex flow-row justify-start items-center gap-8 w-full  ">
                <NuxtLink to="/"> <img src="~/assets/Ostro.svg" alt=""></NuxtLink>
                <div id="search-nav" :class="{ 'hidden': !isShowSearchBar, 'flex': isShowSearchBar }"
                    class="  w-2/5  flex-row justify-between gap-2 border-[1px] border-blackich-500 items-center rounded-xl  px-2 py-1  ">
                    <button class="text-blackich-300">
                        <Icon name="material-symbols:search-rounded" size="24px" />
                    </button>
                    <input class=" w-full  outline-none" placeholder="Search.." type="text">
                </div>
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

        <InputsSearchHero :isSearchHero="getSearchHero" />
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

        //functions
        const scrollToProducts = () => { //scroll to products section
            const productsSection = document.querySelector('#products-section');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
        return {
            isOpenCart,
            isOpenwishList,
            profileModal,
            toggleCart,
            toggleWishList,
            toggleProfileModal,
            scrollToProducts,

            //computed
            getSearchHero
        };
    },
}
</script>
