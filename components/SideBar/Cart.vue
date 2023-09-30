<template>
    <div id="cart-container"
        class="fixed z-50 inset-y-0 right-0 flex flex-col justify-between items-start  h-screen w-1/3 shadow-2xl bg-white rounded-l-3xl transition-all duration-300 ease-in-out  "
        :class="cartStore.isOpenCart ? 'translate-x-0' : 'translate-x-full'">

        <!-- Cart Navigation -->
        <div id="cart-nav"
            class=" flex flex-row justify-between items-center w-full pb-2 border-blackich-400  border-b-[1px] py-2 px-2 ">
            <div id="items-number" class=" text-icon  ">
                <Icon name="material-symbols:shopping-bag-outline" size="24px" />
                <span class=" text-lg ">5 items</span>
            </div>
            <div id="close-cart" @click="cartStore.isOpenCart = false" class="cursor-pointer">
                <Icon name="material-symbols:close-rounded" size="24px" />
            </div>
        </div>

        <!-- Cart Products -->
        <div id="products" class=" flex flex-col justify-start items-start w-full h-full pb-2 overflow-y-scroll py-1 px-4 ">

            <div id="prod-1" class="flex flex-row justify-between items-center w-full border-b-[1px] py-1 ">
                <div id="control-prod-quantity" class="flex flex-col justify-between items-center gap-2">
                    <Icon name="material-symbols:add-rounded" size="20px" class="text-white  rounded-full bg-primary-600" />
                    <span class=" text-lg ">8</span>
                    <Icon name="fluent:subtract-12-filled" size="20px" class="text-white  rounded-full bg-primary-600" />
                </div>
                <div class="prod-img">
                    <img src="~/assets/prod-1.png" alt="">
                </div>
                <div class="prod-info">
                    <p class="  ">Nike Air Max 270 React</p>
                    <p class=" text-primary-600">43.500 DA</p>
                    <p class=" text-blackich-400 text-sm ">3stk x 12.5000</p>
                </div>
                <span id="prod-total-price" class="text-blackich-100">36.500 DA</span>
            </div>

        </div>

        <div class=" w-full px-2 py-2 ">
            <div id="go-to-checkout"
                class="flex flex-row justify-between items-center w-full bg-primary-600 rounded-3xl px-2 py-2 ">
                <span class=" text-2xl text-white "> 43.500 DA </span>
                <button class=" bg-white text-blackich-100 px-4 py-2 text-xl rounded-3xl ">
                    Checkout
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import { useCartStore } from '~/stores/cartStore'

export default {
    name: 'Cart',
    props: {

    },
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore,
        }

    },

}
</script>

<style></style>
