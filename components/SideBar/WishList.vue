<template>
    <div id="wishList-container"
        class="fixed z-50 inset-y-0 left-0 flex flex-col justify-between items-start  h-screen w-1/3 shadow-2xl bg-white rounded-r-3xl  transition-all duration-300 ease-in-out  "
        :class="wishListStore.isOpenWishList ? 'translate-x-0' : '-translate-x-full'">
        <div id="wishList-nav"
            class=" flex flex-row justify-between items-center w-full border-blackich-400  border-b-[1px] py-2 px-4 ">
            <div id="items-number" class=" text-icon  ">
                <Icon name="material-symbols:favorite-outline-rounded" size="24px" />
                <span class=" text-lg "> {{ getWishList.length }} items</span>
            </div>
            <div id="close-wishList" @click="wishListStore.toggleWishList()" class="cursor-pointer">
                <Icon name="material-symbols:close-rounded" size="24px" />
            </div>
        </div>

        <div v-if="getWishList.length > 0" id="products"
            class=" flex flex-col justify-start items-start w-full h-full py-1 px-4 ">
            <TransitionGroup name="sliding">
                <div v-for="prod in getWishList " :id="prod.id"
                    class="flex flex-row justify-between items-center w-full py-3 gap-6 border-gray-300 border-b-[1px] transition-all duration-300 ease-in-out  ">
                    <div class="prod-img w-full">
                        <img src="~/assets/nike1.jpg" class=" w-full object-cover h-28 rounded-xl " alt="">
                    </div>
                    <div class="flex flex-col justify-start items-start gap-1 text-start w-full font-semibold ">
                        <p class=" text-lg text-blackich-100  whitespace-nowrap ">{{ prod.title }}</p>
                        <div id="product-rating"
                            class="flex flex-row justify-center items-center backdrop-blur-lg rounded-xl gap-[0.5px] ">
                            <p class=" text-blackich-200">{{ prod.rating }}</p>
                            <Icon class=" text-2xl text-center text-yellow-400  pb-1"
                                name="material-symbols:star-rounded" />
                        </div>
                        <p class=" text-primary-600">{{ prod.price.valueOf().toFixed(3) }} <span
                                class=" text-blackich-300 ">DZD</span></p>
                    </div>
                    <div id="prod-total-price" class=" w-full  text-end ">
                        <Icon @click="openModal(prod)"
                            class=" cursor-pointer  p-1 rounded-full text-white bg-primary-600 text-4xl"
                            name="material-symbols:favorite-outline-rounded" />
                    </div>
                </div>
            </TransitionGroup>
        </div>

        <div class=" m-auto " v-else>
            <h2 class=" text-center text-xl text-primary-600 font-semibold  ">No favorite products added yet</h2>
        </div>

    </div>



    <!-- Modal -->
    <Teleport to="#modal">
        <Transition name="modal">
            <Modal v-if="isOpenModal" title="Remove Item" @doneAction="toggleFav()" @cancelAction="closeModal()">
                Are you sure you want to remove the item from your wish list ?
            </Modal>
        </Transition>
    </Teleport>
</template>

<script setup >
//stores
import { useWishListStore } from '~/stores/wishListStore'
import { useAlertStore } from '~/stores/alertStore';

//store
const wishListStore = useWishListStore();
const alertStore = useAlertStore();

//data
const { getWishList } = toRefs(wishListStore)
const isOpenModal = ref(false)
const prod = ref(null)




//funcctions
const { doAlert } = alertStore

const toggleFav = () => {
    wishListStore.toggleWishListItem(prod.value)
    isOpenModal.value = false
    doAlert('success', 'Success', `the is removed succesfully`, 3000)
}

const openModal = (p) => {
    prod.value = p
    isOpenModal.value = true
}

const closeModal = () => {
    prod.value = null
    isOpenModal.value = false

}

</script>

<style>
/* transition for open/close modal */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.3s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(1.05);
}


/* transition for deleting products wishlist */
.sliding-enter-active,
.sliding-leave-active {
    transition: all 0.3s ease-in-out;
}

.sliding-enter-from,
.sliding-leave-to {
    @apply -translate-x-full
}


/* transition for deleting products wishlist */
.slidingRight-enter-active,
.slidingRight-leave-active {
    transition: all 0.3s ease-in-out;
}

.slidingRight-enter-from,
.slidingRight-leave-to {
    @apply translate-x-full
}
</style>