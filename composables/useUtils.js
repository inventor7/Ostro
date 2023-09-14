export const useUtils = () => {
  const scrollTo = (dest) => {
    //scroll to products section
    if (dest) {
      dest.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    scrollTo,
  };
};
