import "./BakeryItem.css"



// TODO: create a component that displays a single bakery item
export default function BakeryItem(props){
    return(
        <div>
            <div>Bakery Item {props.index}</div>
            <img
                className="BakeryImage"
                src={props.image}
            />
            <div>Price: ${props.price}</div>
            <button onClick={() => props.addToCart(props.name, props.price)}>Add to Cart</button>
        </div>
    );
}