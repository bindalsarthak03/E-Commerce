import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Product(props) {
    const { product } = props;
    return (
        <div className='product'>
            <Link to={`product/${product.slug}`}>
                <img src={product.image} className='card-img-top' alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Text><strong>₹{product.price}</strong></Card.Text>
                <Button>Add To Cart</Button>
            </Card.Body> 
        </div>
    )
}

export default Product;