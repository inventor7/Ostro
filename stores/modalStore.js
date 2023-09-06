import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {

    //data
    const profileModal = ref(false)

    //actions
    const toggleProfileModal = () => {
        profileModal.value = !profileModal.value
    }


    return {
        profileModal,
        toggleProfileModal
    }

})