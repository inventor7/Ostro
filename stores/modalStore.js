import { defineStore } from "pinia";
import { useRoute } from "nuxt/app";
import { computed } from "vue";

export const useModalStore = defineStore("modal", () => {
  //globals
  let route = useRoute();

  //data
  const profileModal = ref(false);
  const isModal = ref(false);
  const modal = ref({
    title: "",
    body: "",
    cancelButton: "Cancel",
    isCancelButton: true,
    cancelButtonCollor: "base",
    doneButton: "Done",
    doneButtonColor: "primary",
  });
  const isOk = ref(true);

  //computed
  const getIsModal = computed(() => {
    return isModal.value;
  });

  const getModal = computed(() => {
    return modal.value;
  });

  //actions
  const toggleModal = () => {
    modal.value.isVisible = !modal.value.isVisible;
  };

  const doneAction = (a = Function) => {
    //indicator for the opening
    isOk.value = !isOk.value;

    if (isOk.value) {
      a.call()
      isModal.value = false;
    } else {
      isModal.value = true;
    }
  };

  const toggleProfileModal = () => {
    profileModal.value = !profileModal.value;
  };

  const getSearchHero = computed(() => {
    //only these routes where the SearchHero component will show on the navbar
    let tr = ["/products"].find((HeroRoute) => {
      return route.path === HeroRoute;
    });
    if (tr) {
      return true;
    }
    return false;
  });

  return {
    modal,
    isModal,
    getIsModal,
    getModal,
    profileModal,
    getSearchHero,

    toggleModal,
    doneAction,
    toggleProfileModal,
  };
});
