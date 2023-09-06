import { defineStore } from "pinia";
export const useWishListStore = defineStore("wishList", () => {

  //state
  const isOpenWishList = ref(false);
  const wishListItems = ref([]);

  const total = computed(() => {
    return wishListItems.value.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
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

  const addItem = (item) => {
    const existingItem = wishListItems.value.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      wishListItems.value.push({
        ...item,
        quantity: 1,
      });
    }
  };

  const removeItem = (id) => {
    const existingItem = wishListItems.value.find((i) => i.id === id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        wishListItems.value = wishListItems.value.filter((i) => i.id !== id);
      } else {
        existingItem.quantity--;
      }
    }
  };

  return {
    isOpenWishList,
    wishListItems,
    total,
    toggleWishList,
    addItem,
    removeItem,
  };
});
