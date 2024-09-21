import { Link } from "react-router-dom";

export default function ProductCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
        <td style={{textAlign: 'center'}}>{id}</td>
        <td data-testid="brand" style={{textAlign: 'center'}}>
          <Link to={`/products/${id}`}>{brand}</Link>
        </td>
        <td style={{textAlign: 'center'}} data-testid="category">{category}</td>
        <td style={{textAlign: 'center'}} data-testid="price">{price}</td>
      </tr>
    )
}