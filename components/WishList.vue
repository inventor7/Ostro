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
                <span class=" text-lg ">5 items</span>
            </div>
            <div id="close-wishList" @click="wishListStore.toggleWishList()" class="cursor-pointer">
                <Icon name="material-symbols:close-rounded" size="24px" />
            </div>
        </div>

        <div id="products" class=" flex flex-col justify-start items-start w-full h-full py-1 px-4 ">

            <div id="prod-1" class="flex flex-row justify-between items-center w-full border-b-[1px] py-1 ">
                <div class="prod-img">
                    <img src="~/assets/prod-1.png" alt="">
                </div>
                <div class="prod-info">
                    <p class="  ">Nike Air Max 270 React</p>
                    <p class=" text-primary-600">43.500 DA</p>
                </div>

                <span id="prod-total-price" class="text-blackich-100">36.500 DA</span>
            </div>

            <div id="prod-1" class="flex flex-row justify-between items-center border-b-[1px] py-1  w-full ">
               
                <div class="prod-img">
                    <img src="~/assets/prod-1.png" alt="">
                </div>
                <div class="prod-info">
                    <p class="  ">Nike Air Max 270 React</p>
                    <p class=" text-primary-600">43.500 DA</p>
                </div>

                <span id="prod-total-price" class="text-blackich-100">36.500 DA</span>
            </div>

            <div id="prod-1" class="flex flex-row justify-between items-center border-b-[1px] py-1  w-full ">
                
                <div class="prod-img">
                    <img src="~/assets/prod-1.png" alt="">
                </div>
                <div class="prod-info">
                    <p class="  ">Nike Air Max 270 React</p>
                    <p class=" text-primary-600">43.500 DA</p>
                </div>

                <span id="prod-total-price" class="text-blackich-100">36.500 DA</span>
            </div>
        </div>

       
    </div>
</template>

<script>
import { useWishListStore } from '~/stores/wishListStore'
export default {
    name: 'wishList',

    props: {

    },
    setup() {
        const wishListStore = useWishListStore();
        return {
            wishListStore,
        }

    },

}
</script>
