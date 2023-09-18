export const useApiFetch = () => {
  const useApiFetchData = async (url, options) => {
    //data

    const token = useCookie("XSRF-TOKEN");
    let headers = {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    };

    if (token.value) {
      headers["X-XSRF-TOKEN"] = token.value.toString();
    }

    return  await useFetch("http://127.0.0.1:8000" + url, {
      credentials: "include",
      watch: false,
      ...options,
      headers: {
        ...headers,
        ...options?.headers,
      },
    });
  };

  return {
    useApiFetchData,
  };
};
