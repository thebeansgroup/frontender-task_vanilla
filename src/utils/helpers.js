// string to lowercase and replace spaces with hyphens
export const slugify = (str) => {
  return str.toLowerCase().replace(/\s/g, "-");
};

// format as currency
export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value / 100);
};
