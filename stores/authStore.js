import { useApiFetch } from "~/composables/useApiFetch";
export const useAuthStore = defineStore("auth", () => {
  const { useApiFetchData } = useApiFetch();

  //data
  const user = ref({});
  const isLoggedIn = ref(false);
  const errors = ref({});

  //computed
  const getUser = computed(() => {
    return user.value;
  });

  //functions
  const login = async () => {};

  const logout = async () => {};

  const register = async (form) => {
    await useApiFetchData("/sanctum/csrf-cookie");
    const res = await useApiFetchData("/api/register", {
      method: "POST",
      body: form,
    });

    if (res.status.value === "success") {
      isLoggedIn.value = true;
      user.value = res.data.value.data.user;
      navigateTo("/");
    } else {
      errors.value = res.error.value.data.errors;
    }
    console.log(res);
    return res;
  };

  return {
    //data
    user,
    isLoggedIn,
    errors,

    //computed
    getUser,

    //function
    login,
    logout,
    register,
  };
});
