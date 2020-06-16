import numeral from 'numeral';

const formatPrice = (price) => {
  return price >= 1000 ? numeral(price).format('$0,0.00') : numeral(price).format('$0');
};

export {
  formatPrice,
};