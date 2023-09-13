<template>
    <!-- <div class=" absolute inset-0  bg-black/30 z-10 h-full w-full " 
    :class="wishListStore.isOpenWishList ? 'flex' : 'hidden' "
    @click="wishListStore.toggleWishList()"
    ></div> -->
    <div id="wishList-container"
        class="fixed z-50 inset-y-0 left-0 flex flex-col justify-between items-start  h-screen w-1/3 shadow-2xl bg-white rounded-r-3xl  transition-all duration-300 ease-in-out  "
        :class="wishListStore.isOpenWishList ? 'translate-x-0' : '-translate-x-full'">
        <div id="wishList-nav"
            class=" flex flex-row justify-between items-center w-full border-blackich-400  border-b-[1px] py-2 px-4 ">
            <div id="items-number" class=" text-icon  ">
                <Icon name="material-symbols:favorite-outline-rounded" size="24px" />
                <span class=" text-lg "> {{ wishListItems.length }} items</span>
            </div>
            <div id="close-wishList" @click="wishListStore.toggleWishList()" class="cursor-pointer">
                <Icon name="material-symbols:close-rounded" size="24px" />
            </div>
        </div>

        <div id="products" class=" flex flex-col justify-start items-start w-full h-full py-1 px-4 ">
            <div v-for="prod in wishListItems " :id="prod.id"
                class="flex flex-row justify-between items-center w-full py-3 gap-6 border-gray-300 border-b-[1px]  ">
                <div class="prod-img w-full">
                    <img src="~/assets/nike1.jpg" class=" w-full object-cover h-28 rounded-xl " alt="">
                </div>
                <div class="flex flex-col justify-start items-start gap-1 text-start w-full ">
                    <p class="  ">{{ prod.title }}</p>
                    <p class=" text-primary-600">{{ prod.price }}</p>
                </div>
                <div id="prod-total-price" class=" flex flex-col justify-center items-center w-full text-center ">
                    <Icon @click="wishListStore.toggleFavorite(prod);"
                        class=" cursor-pointer  p-1 rounded-full text-white bg-primary-600 text-4xl"
                        name="material-symbols:favorite-outline-rounded" />
                </div>
            </div>


        </div>


    </div>
</template>

<script setup >
//essentials
import { toRefs, onMounted } from 'vue';

//stores
import { useWishListStore } from '~/stores/wishListStore'
import { useProductsStore } from '~/stores/productsStore';
import { useModalStore } from '~/stores/modalStore'


//store
const wishListStore = useWishListStore();
const productsStore = useProductsStore();
const modalStore = useModalStore();


const { wishListItems } = toRefs(wishListStore)




</script>
