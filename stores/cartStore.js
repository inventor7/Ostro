import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", () => {

  //state
  const isOpenCart = ref(false);
  const cartItems = ref([]);
  
  const total = computed(() => {
    return cartItems.value.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  });



  //actions
  const toggleCart = () => {
    isOpenCart.value = !isOpenCart.value;

    // Toggle the body class to hide the scrollbar
    if (isOpenCart.value) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const addItem = (item) => {
    const existingItem = cartItems.value.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.value.push({
        ...item,
        quantity: 1,
      });
    }
  };

  const removeItem = (id) => {
    const existingItem = cartItems.value.find((i) => i.id === id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        cartItems.value = cartItems.value.filter((i) => i.id !== id);
      } else {
        existingItem.quantity--;
      }
    }
  };

  return {
    isOpenCart,
    cartItems,
    total,
    toggleCart,
    addItem,
    removeItem,
  };
});
