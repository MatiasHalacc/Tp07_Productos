import { useNavigate } from 'react-router';
import './producto.css';
import { useCart } from '../context/CartContext'; // importar el hook

export default function Producto({ product }) {  
  const navigate = useNavigate();
  const { addToCart } = useCart(); // obtener la función del contexto

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-item">{product.title}</h2>
      <div className="product-price">{product.price}$</div>

      <button onClick={() => navigate('/ProductoDetalle/' + product.id)}>Ver más</button>
      <button className="add-cart" onClick={() => addToCart(product)}>
        Añadir al carrito
      </button>
    </div>
  );
}
