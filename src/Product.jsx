export function Product(props) {
    return (
        <div>
            <h2>Product</h2>
            <p>Product Name: {props.name}</p>
            <p>Price: ${props.price}</p>
            <button onClick={() => props.addItem(props.name)}>Add to Cart</button>
        </div>
    );
}