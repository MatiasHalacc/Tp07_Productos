import './producto.css'

export default function Producto({ product }, verDetalle) {
    return (
      <div className="product">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-item">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-price">{product.price}$</div>
        <button onClick={verDetalle}>Ver mas</button>
      </div>
    );
  }


 