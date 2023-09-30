<template>
    <div class=" absolute inset-0 z-10 h-full w-full " 
    :class="profileModal ? 'flex' : 'hidden' "
    @click="toggleProfileModal()"
    ></div>
    <div class=" fixed top-[66px] mt-2 right-6 flex flex-col justify-start items-start   shadow-xl   w-3/12 bg-white rounded-3xl z-10 "
        :class="profileModal ? 'flex' : 'hidden'">
        <div id="up-section-profile"
            class=" flex flex-col justify-start items-start text-white bg-primary-600 w-full rounded-t-3xl px-4 py-2">
            <h3 class="text-lg font-semibold">Imene Hiouani</h3>
            <span class="text-xs text-gray-200">
                imene@gmail.com
            </span>
        </div>

        <div id="down-section-profile" class=" flex flex-col justify-start gap-2 items-start  rounded-3xl px-4 py-4 text-base font-medium text-blackich-100 list-none "  >
             <li><a href="">Profile</a></li>
             <li><a href="">My Orders</a></li>
             <li><a href="">Checkout</a></li>
             <li  ><a href=""><span  class=" text-warning " > Logout</span></a></li>
        </div>
    </div>
</template>



<script>
import { useModalStore } from '~/stores/modalStore';
import { toRefs } from 'vue'; // toRefs is used to convert reactive properties to refs (computed)

export default {
    name: 'ProfileModal',
    setup() {

        const modalStore = useModalStore();
        const { toggleProfileModal, profileModal } = toRefs(modalStore);

        return {
            toggleProfileModal,
            profileModal
        }
    },
}

</script>
