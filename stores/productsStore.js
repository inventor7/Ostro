import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      id: "1",
      title: "Nike Air Force 1 072",

      img: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique inLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.5,
      type: "Shoes",
      price: 12.5,
      colors: ["sky", "gray", "primary"],
      tags: ["summer", "2023"],
      isFavorite: false,
      brand: "Nike",
    },
    {
      id: "2",
      img: "",
      title: "Nike Air Max 1 972",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique inLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.0,
      type: "Shoes",
      price: 10.5,
      colors: ["sky", "gray", "primary"],
      tags: ["winter", "2102"],
      isFavorite: false,
      brand: "Nike",
    },
    {
      id: "3",
      img: "",
      title: "Nike Blazere",
      description:
        "LLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique inorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 3.8,
      type: "Shoes",
      price: 10,
      colors: ["sky", "primary"],
      tags: ["avenue", "2023"],
      isFavorite: false,
      brand: "Nike",
    },
    {
      id: "4",
      img: "",
      title: "Converse Highway",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique inLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.2,
      type: "Shoes",
      price: 7500,
      colors: ["sky", "gray", "primary"],
      tags: ["summer", "2023"],
      isFavorite: false,
      brand: "COnverse",
    },
    {
      id: "5",
      img: "",
      title: "Rebook Youth 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.5,
      type: "Shoes",
      price: 12.5,
      colors: ["gray", "red"],
      tags: ["summer", "2023"],
      isFavorite: false,
      brand: "Rebook",
    },
    {
      id: "6",
      img: "",
      title: "Nike Air Jorand 1",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.2,
      type: "Shoes",
      price: 9.5,
      colors: ["primary"],
      tags: ["revanish", "2023"],
      isFavorite: false,
      brand: "Jordan",
    },
    {
      id: "7",
      img: "",
      title: "Puma X-ray Lite white",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 3.5,
      type: "Shoes",
      price: 9.5,
      colors: ["sky", "gray", "primary"],
      tags: ["Puma", "2023"],
      isFavorite: true,
      brand: "Puma",
    },
    {
      id: "8",
      img: "",
      title: "Puma X-ray Pro ",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.4,
      type: "Shoes",
      price: 12.587,
      colors: ["sky", "gray", "primary"],
      tags: ["summer", "rich"],
      isFavorite: false,
      brand: "Puma",
    },
    {
      id: "9",
      img: "",
      title: "Puma Gazelle 220",

      description:
        "Lorem iPsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.0,
      type: "Shoes",
      price: 12.577,
      colors: ["green", "red", "yellow"],
      tags: ["youth", "trend"],
      isFavorite: false,
      brand: "Puma",
    },
    {
      id: "10",
      img: "",
      title: "Nike Air Tn 2021",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.5,
      type: "Shoes",
      price: 12.5,
      colors: ["yellow"],
      tags: ["Lacoste", "2023"],
      isFavorite: true,
      brand: "Nike",
    },
    {
      id: "11",
      img: "",
      title: "Cargo 2021 green Leather",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 3.0,
      type: "Pants",
      price: 3.5,
      colors: ["blue", "gray"],
      tags: ["style", "classic"],
      isFavorite: true,
      brand: "Levis",
    },
    {
      id: "12",
      img: "",
      title: "Lacoste T-shirt 2022",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.5,
      type: "t-shirt",
      price: 12.5,
      colors: ["yellow"],
      tags: ["Lacoste", "2022"],
      isFavorite: true,
      brand: "Lacoste",
    },
  ]);

  const productsApi = ref();

  const getProductsApi = async () => {
  
    const token = await useFetch("http://127.0.0.1:8000/api/products", {});

    const dataApi = await useFetch("http://127.0.0.1:8000/api/products", {});

    console.log(dataApi.data);
  };
  let getProducts = computed(() => {
    return products.value;
  });

  const filterProductsByType = (type) => {
    let f = products.value.filter((prod) => {
      return prod.type === type;
    });

    return f;
  };

  const sortProcutBy = (sort) => {
    let s = products.value.sort(sort);
    return s;
  };

  const findProductById = (id) => {
    return products.value.find((prod) => {
      return prod.id === id;
    });
  };

  return {
    //data
    products,
    getProducts,

    //functions
    filterProductsByType,
    sortProcutBy,
    findProductById,
    getProductsApi,
  };
});
