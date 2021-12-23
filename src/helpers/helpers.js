export const formatPrice = (value) =>
  Number(value).toLocaleString("en-US", { style: "currency", currency: "USD" });
