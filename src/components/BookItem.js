import "./BookItem.css"

export default function BookItem(props){
    return(
        <div className="bookCard">
            <div className="bookName">{props.name}</div>
            <img className="BookImage" src={props.image}/>
            <h2 className="bookPrice">Price: ${props.price}</h2>
            <button className="bookButton" onClick={() => props.addToCart(props.price)}>Add to Cart</button>
        </div>
    );
}