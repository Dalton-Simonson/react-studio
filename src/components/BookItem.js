import "./BookItem.css"

export default function BookItem(props){

    if(props.show_language == false || props.show_genre == false){
        return null
    }

    return(

        <div className="bookCard">
            <div className="bookName">{props.name}</div>
            <img className="BookImage" src={props.image}/>
            <h2 className="bookPrice">Price: ${props.price}</h2>
            <button className="bookButton" onClick={() => props.addToCart(props.index, props.price)}>Add to Cart</button>
        </div>
    );
}