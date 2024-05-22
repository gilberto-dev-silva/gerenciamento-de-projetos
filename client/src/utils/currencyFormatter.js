export const currencyFormatter = (amount) => {
  return amount?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
