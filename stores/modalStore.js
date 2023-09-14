import { defineStore } from "pinia";
import { useRoute } from "nuxt/app";
import { computed } from "vue";

export const useModalStore = defineStore("modal", () => {
  //globals
  let route = useRoute();

  //data
  const profileModal = ref(false);

  const toggleProfileModal = () => {
    profileModal.value = !profileModal.value;
  };

  const getSearchHero = computed(() => {
    //only these routes where the SearchHero component will show on the navbar
    let tr = ["/products", "/products/", "/"].find((HeroRoute) => {
      return route.path === HeroRoute;
    });
    if (tr) {
      return true;
    }
    return false;
  });

  return {
    profileModal,
    getSearchHero,
    toggleProfileModal,
  };
});
