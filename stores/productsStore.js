import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  //data
  const products = ref([
    {
      id: "1",
      title: "Nike Air Force 1 072",

      img: "",
      year: 2023,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique inLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.5,
      type: "Shoes",
      price: 12.5,
      colors: ["sky", "gray", "primary"],
      tags: ["summer", "2023"],
      brand: "Nike",
    },
    {
      id: "2",
      img: "",
      year: 2019,
      title: "Nike Air Max 1 972",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique inLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.0,
      type: "Shoes",
      price: 10.5,
      colors: ["sky", "gray", "primary"],
      tags: ["winter", "2102"],
      brand: "Nike",
    },
    {
      id: "3",
      img: "",
      year: 2021,
      title: "Nike Blazere",
      description:
        "LLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique inorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 3.8,
      type: "Shoes",
      price: 10,
      colors: ["sky", "primary"],
      tags: ["avenue", "2023"],
      brand: "Nike",
    },
    {
      id: "4",
      img: "",
      year: 1990,
      title: "Converse Highway",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique inLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.2,
      type: "Shoes",
      price: 7500,
      colors: ["sky", "gray", "primary"],
      tags: ["summer", "2023"],
      brand: "COnverse",
    },
    {
      id: "5",
      img: "",
      year: 2010,
      title: "Rebook Youth 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.5,
      type: "Shoes",
      price: 12.5,
      colors: ["gray", "red"],
      tags: ["summer", "2023"],
      brand: "Rebook",
    },
    {
      id: "6",
      img: "",
      year: 2022,
      title: "Nike Air Jorand 1",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.2,
      type: "Shoes",
      price: 9.5,
      colors: ["primary"],
      tags: ["revanish", "2023"],
      brand: "Jordan",
    },
    {
      id: "7",
      img: "",
      year: 2018,
      title: "Puma X-ray Lite white",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 3.5,
      type: "Shoes",
      price: 9.5,
      colors: ["sky", "gray", "primary"],
      tags: ["Puma", "2023"],
      brand: "Puma",
    },
    {
      id: "8",
      img: "",
      year: 2023,
      title: "Puma X-ray Pro ",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.4,
      type: "Shoes",
      price: 12.587,
      colors: ["sky", "gray", "primary"],
      tags: ["summer", "rich"],
      brand: "Puma",
    },
    {
      id: "9",
      img: "",
      year: 2021,
      title: "Puma Gazelle 220",

      description:
        "Lorem iPsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.0,
      type: "Shoes",
      price: 12.577,
      colors: ["green", "red", "yellow"],
      tags: ["youth", "trend"],
      brand: "Puma",
    },
    {
      id: "10",
      img: "",
      year: 2019,
      title: "Nike Air Tn 2021",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.5,
      type: "Shoes",
      price: 12.5,
      colors: ["yellow"],
      tags: ["Lacoste", "2023"],
      brand: "Nike",
    },
    {
      id: "11",
      img: "",
      year: 2011,
      title: "Cargo 2021 green Leather",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 3.0,
      type: "Pants",
      price: 3.5,
      colors: ["blue", "gray"],
      tags: ["style", "classic"],
      brand: "Levis",
    },
    {
      id: "12",
      img: "",
      year: 2021,
      title: "Lacoste T-shirt 2022",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis cupiditate est deleniti, quaerat rerum expedita, eveniet esse vero officia earum reiciendis consectetur enim nam nemo ab maxime similique in",
      rating: 4.5,
      type: "t-shirt",
      price: 12.5,
      colors: ["yellow"],
      tags: ["Lacoste", "2022"],
      brand: "Lacoste",
    },
  ]);
  const processedProducts = ref(products.value);

  //computed
  let getProducts = computed(() => {
    return products.value;
  });

  //hooks
  onMounted(() => {
    products.value.forEach((prod) => {
      prod.isFavorite = false;
      prod.isAddedToCart = false;
    });
  });

  //functions
  const filterProductsByType = (type) => {
    processedProducts.value = products.value.filter((prod) => {
      return prod.type.toUpperCase() === type.toUpperCase();
    });
  };

  const filterBySubFilter = (subFilter, prodArray = []) => {
    processedProducts.value = prodArray.filter((prod) => {
      return prod.type === subFilter;
    });
  };

  const sortProducBy = (sort, sortingType) => {
    processedProducts.value = processedProducts.value.toSorted((a, b) => {
      switch (sort) {
        case "price":
          return sortingType * (b.price - a.price);
        case "year":
          return sortingType * (b.year - a.year);
        default:
          return sortingType * (b.rating - a.rating);
      }
    });
  };

  const findProductById = (id) => {
    return products.value.find((prod) => {
      return prod.id === id;
    });
  };

  const searchProduct = (input) => {
    processedProducts.value = getProducts.value.filter((prod) => {
      return prod.title.toUpperCase().includes(input.toUpperCase());
    });
  };

  return {
    //data
    products,
    processedProducts,

    //computed
    getProducts,

    //functions
    filterProductsByType,
    filterBySubFilter,
    sortProducBy,
    findProductById,
    searchProduct,
  };
});
