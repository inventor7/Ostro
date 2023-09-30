<template>
    <nav id="Navbar"
        class="fixed flex flex-col justify-start items-center  top-0  z-30 inset-x-1/2 -translate-x-1/2   w-[98%]  text-blackich-100  bg-white shadow-md  px-4 py-1   rounded-b-3xl ">

        <div class=" flex flex-row justify-between items-center gap-10 w-full  ">

            <div id="logo" class=" flex flow-row justify-start items-center gap-8 w-1/3  ">
                <NuxtLink to="/"> <img src="~/assets/Ostro.svg" alt=""></NuxtLink>
            </div>



            <div id="products-navigation" class=" flex flex-row justify-center items-center gap-8 z-20   w-1/3 h-[58px]  ">
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

            <div class=" flex flex-row justify-end  items-center w-1/6 gap-8  ">
                <span @click="toggleWishList()" class=" text-icon pt-1 ">
                    <Icon name="material-symbols:favorite-outline-rounded" size="30px" />
                </span>
                <span @click="toggleCart()" class="text-icon">
                    <Icon name="material-symbols:shopping-bag-outline" size="30px" />
                </span>
            </div>

            <div id="profile" class="flex flex-row justify-end items-center cursor-pointer gap-8 w-1/6 text-blackich-100  ">

                <img v-if="isLoggedIn" @click="toggleProfileModal()" src="~/assets/imn-profile.png" alt="">
                <div v-else class=" flex flex-row justify-between items-center gap-6 w-full ">
                    <button @click="handleClickReg()"
                        class=" px-4 py-1.5 text-lg font-semibold hover:bg-gray-200/40 bg-gray-100/40 hover:text-blackich-200 text-blackich-100 rounded-md transition-all duration-100 ease-in-out  ">
                        Register
                    </button>
                    <button
                        class=" px-4 py-1.5 text-lg font-semibold bg-primary-600 text-white rounded-md transition-all duration-100 ease-in-out  ">
                        Login
                    </button>
                </div>
            </div>
        </div>

        <InputsSearchHero :class="{ 'hidden': isShowSearchBar && useRoute().path === '/' }"
            :isSearchHero="getSearchHero" />
    </nav>
</template>

<script setup >
import { useCartStore } from '~/stores/cartStore';
import { useWishListStore } from '~/stores/wishListStore';
import { useModalStore } from '~/stores/modalStore';
import { useAuthStore } from '~/stores/authStore';


//functions
const { toggleCart } = useCartStore();
const { toggleWishList } = useWishListStore();
const { toggleProfileModal } = useModalStore();

//data
const { getSearchHero } = toRefs(useModalStore());
const { user, isLoggedIn } = toRefs(useAuthStore())

const handleClickReg = () => {
    useRouter().push('/auth/register')

}

defineProps({
    isShowSearchBar: Boolean
})

</script>
