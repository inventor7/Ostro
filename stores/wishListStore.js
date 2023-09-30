import { defineStore } from "pinia";
import { useProductsStore } from "./productsStore";
import { toRefs } from "vue";

export const useWishListStore = defineStore("wishList", () => {
  //store
  const productsStore = useProductsStore();

  //data
  const { getProducts } = toRefs(productsStore);

  //state
  const isOpenWishList = ref(false);
  const wishList = ref(
    getProducts.value.filter((prod) => {
      return prod.isFavorite === true;
    })
  );

  const getWishList = computed(() => {
    return wishList.value;
  });

  //actions
  const toggleWishList = () => {
    isOpenWishList.value = !isOpenWishList.value;
    // Toggle the body class to hide the scrollbar
    if (isOpenWishList.value) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const toggleWishListItem = (item) => {
    const exisitingItem = wishList.value.find((i) => i.id === item.id);
    if (exisitingItem) {
      item.isFavorite = false;
      wishList.value = wishList.value.filter((i) => i.id !== item.id);
    } else {
      item.isFavorite = true;
      wishList.value.push(item);
    }
  };

  return {
    //data
    wishList,
    isOpenWishList,

    //computed
    getWishList,

    //functions
    toggleWishListItem,
    toggleWishList,
  };
});
