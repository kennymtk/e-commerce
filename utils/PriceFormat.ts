const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "HKD",
  }).format(amount / 100);
};

export default formatPrice;
