type ratingProp = {
  rate: number,
  count: number,
}

export type productShape = {
  id: number,
  title: string,
  price: number,
  description?: string,
  category?: string,
  image: string,
  rating: ratingProp,
};

export type cartItemShape = {
  product: productShape,
  quantity: number
};
