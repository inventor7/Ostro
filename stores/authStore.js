import { useApiFetch } from "~/composables/useApiFetch";
export const useAuthStore = defineStore("auth", () => {
  const { useApiFetchData } = useApiFetch();

  //data
  const user = ref({});
  const isLoggedIn = ref(false);
  const pending = ref(false);
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

    return res;
  };

  return {
    //data
    user,
    isLoggedIn,
    pending,
    errors,

    //computed
    getUser,

    //function
    login,
    logout,
    register,
  };
});
