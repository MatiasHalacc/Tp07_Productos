import PropTypes from "prop-types";

export const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number,
    count: PropTypes.number,
  }),
});

export const cartItemShape = PropTypes.shape({
  product: productShape.isRequired,
  quantity: PropTypes.number.isRequired,
});
