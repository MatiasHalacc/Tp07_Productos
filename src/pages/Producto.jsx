import { useNavigate } from 'react-router';
import './producto.css'

export default function Producto({ product }) {  
  const navigate = useNavigate();
    const verDetalle = (id)=>{
        navigate('/ProductoDetalle/'+ id);
    }

    return (
      <div className="product">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-item">{product.title}</h2>
        <div className="product-price">{product.price}$</div>
        <button onClick={()=>verDetalle(product.id)}>Ver mas</button>
      </div>
    );
  }


 