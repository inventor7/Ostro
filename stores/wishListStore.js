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
  const List = ref(
    getProducts.value.filter((prod) => {
      return prod.isFavorite === true;
    })
  );

  const wishListItems = computed({
    get: () => List.value,
    set: (Lista) => {
      List.value = Lista;
    },
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

  const toggleFavorite = (item) => {
    const existingItem = wishListItems.value.find((i) => i.id === item.id);
    if (existingItem) {
      removeItem(item.id);
    } else {
      wishListItems.value = List.value.push({
        ...item,
        isFavorite: true,
      });
    }
  };

  const removeItem = (id) => {
    const existingItem = wishListItems.value.find((i) => i.id === id);
    if (existingItem) {
      wishListItems.value = wishListItems.value.filter((i) => i.id !== id);
      console.log(wishListItems.value);
    }
  };

  return {
    isOpenWishList,
    wishListItems,
    wishListItems,
    toggleWishList,
    toggleFavorite,
    removeItem,
  };
});
