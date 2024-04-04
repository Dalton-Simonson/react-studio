import "./App.css";
import { useEffect, useState } from "react";
import bookData from "./assets/book-data.json"


import BookItem from "./components/BookItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
// bakeryData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });
/* ############################################################## */

var bookArray = [];
var cartArray = [];
let numCheckedLanguages = 0
let numCheckedGenres = 0

// function processJSON(){
//   bookArray = [];
//   bookData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image
//   bookArray.push(item)
// })}

bookData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image
  bookArray.push(item)
  cartArray.push(item)
})

function compareByPrice(a, b){
  if(a.price < b.price){
    return -1;
  }

  if(a.price > b.price){
    return 1;
  }

  return 0;
}

function compareByID(a, b){
  if(a.id < b.id){
    return -1;
  }

  if(a.price > b.price){
    return 1;
  }

  return 0;
}


function App() {
  const [cartPrice, setCartPrice] = useState(0)
  
  const addToCart = (index, newItemPrice) => {
    setCartPrice(Number((cartPrice + newItemPrice).toFixed(2)))

    let book = bookArray[index]
    book.number_in_cart++
    book.show_in_cart = true
  }

  const incrementCount = (item, price) => {
    item.number_in_cart++
    setCartPrice(Number((cartPrice + price).toFixed(2)))
}

const decrementCount = (item, price) => {
    item.number_in_cart--

    if(item.number_in_cart == 0){
        item.show_in_cart = false
    }

    setCartPrice(Number((cartPrice - price).toFixed(2)))
}

  // Language Hooks
  const [chineseChecked, setChineseChecked] = useState(0)
  const [englishChecked, setEnglishChecked] = useState(0)
  const [frenchChecked, setFrenchChecked] = useState(0)
  const [portugueseChecked, setPortugueseChecked] = useState(0)
  const [spanishChecked, setSpanishChecked] = useState(0)

  const languageCheckHandler = (isChecked, setState, language) => {

    // If there are no language boxes checked start off by making all not viewable
    if(numCheckedLanguages == 0){
      for(var index = 0; index < bookArray.length; index++){
        bookArray[index].show_language = false
      }
    }

    // If it was previously checked we dont want to see these books anymore
    if(isChecked == 1){
      numCheckedLanguages--

      for(var index = 0; index < bookArray.length; index++){
        let book = bookArray[index]
        if(book.language == language) book.show_language = false
      }

    }else{ // otherwise show the books
      numCheckedLanguages++
      
      for(var index = 0; index < bookArray.length; index++){
        let book = bookArray[index]
        if(book.language == language) book.show_language = true
      }
    }

    setState(!isChecked) // update state

    // If all the boxes are unchecked show all books
    if(numCheckedLanguages == 0){
      for(var index = 0; index < bookArray.length; index++){
        bookArray[index].show_language = true
      }
    }
  }

  const clearLanguageSelections = () => {
    setChineseChecked(0)
    setEnglishChecked(0)
    setFrenchChecked(0)
    setPortugueseChecked(0)
    setSpanishChecked(0)
    numCheckedLanguages = 0

    for(var index = 0; index < bookArray.length; index++){
      bookArray[index].show_language = true
    }
  }

  // Genre Hooks
  const[comingOfAgeChecked, setComingOfAgeChecked] = useState(0)
  const[crimeChecked, setCrimeChecked] = useState(0)
  const[familySagaChecked, setFamilySagaChecked] = useState(0)
  const[fantasyChecked, setFantasyChecked] = useState(0)
  const[historicalFictionChecked, setHistoricalFictionChecked] = useState(0)
  const[mysteryChecked, setMysteryChecked] = useState(0)
  const[satireChecked, setSatireChecked] = useState(0)
  const[scienceFictionChecked, setScienceFictionChecked] = useState(0)

  const clearGenreSelections = () => {
    setComingOfAgeChecked(0)
    setCrimeChecked(0)
    setFamilySagaChecked(0)
    setFantasyChecked(0)
    setHistoricalFictionChecked(0)
    setMysteryChecked(0)
    setSatireChecked(0)
    setScienceFictionChecked(0)
    numCheckedGenres = 0

    if(numCheckedGenres == 0){
      for(var index = 0; index < bookArray.length; index++){
        bookArray[index].show_genre = true
      }
    }
  }

  const genreCheckHandler = (isChecked, setState, genre) => {

    // If there are no genre boxes checked start off by making all not viewable
    if(numCheckedGenres == 0){
      for(var index = 0; index < bookArray.length; index++){
        bookArray[index].show_genre = false
      }
    }

    // If it was previously checked we dont want to see these books anymore
    if(isChecked == 1){
      numCheckedGenres--

      for(var index = 0; index < bookArray.length; index++){
        let book = bookArray[index]
        if(book.genre == genre) book.show_genre = false
      }

    }else{ // otherwise show the books
      numCheckedGenres++
      
      for(var index = 0; index < bookArray.length; index++){
        let book = bookArray[index]
        if(book.genre == genre) book.show_genre = true
      }
    }

    setState(!isChecked) // update state

    // If all the boxes are unchecked show all books
    if(numCheckedGenres == 0){
      for(var index = 0; index < bookArray.length; index++){
        bookArray[index].show_genre = true
      }
    }
  }

  // Sorting Hooks
  const[defaultSelected, setDefaultSelected] = useState(1)
  const[priceSelected, setPriceSelected] = useState(0)

  const sortHandler = () => {
    var dropDownElement = document.getElementById("sortingOptions")
    var value = dropDownElement.value

    if(value == "default"){
      setDefaultSelected(1)
      setPriceSelected(0)
      
      bookArray.sort(compareByID)

    }else{
      setDefaultSelected(0)
      setPriceSelected(1)
      
      bookArray.sort(compareByPrice)
    }
  }

 
  return (
    <div className="App">
    <h1 className="title">My Book Store</h1>

      <div className="filters">

        <div className="languageFilter">

          <h2 className="languageFilterLabel">Language</h2>
          <div className="languageFilterCheckboxes">

            <div className="languageCheckboxDiv">
                <input 
                className="languageCheckbox" 
                type="checkbox" 
                name="chineseCheckbox" 
                checked={chineseChecked} 
                onChange={() => languageCheckHandler(chineseChecked, setChineseChecked, "Chinese")}>
                </input>

                <label className="languageCheckboxLabel" for="chineseCheckbox"> Chinese</label>
            </div>

            <div className="languageCheckboxDiv">
              <input className="languageCheckbox" 
              type="checkbox" 
              name="englishCheckbox" 
              checked={englishChecked}
              onChange={() => languageCheckHandler(englishChecked, setEnglishChecked, "English")}>
              </input>

              <label className="languageCheckboxLabel" for="englishCheckbox"> English</label>
            </div>

            <div className="languageCheckboxDiv">
              <input className="languageCheckbox"
              type="checkbox"
              name="frenchCheckbox"
              checked={frenchChecked}
              onChange={() => languageCheckHandler(frenchChecked, setFrenchChecked, "French")}>
              </input>
              
              <label className="languageCheckboxLabel" for="frenchCheckbox"> French</label>
            </div>
          

            <div className="languageCheckboxDiv">
              <input className="languageCheckbox"
              type="checkbox"
              name="portugueseCheckbox"
              checked={portugueseChecked}
              onChange={() => languageCheckHandler(portugueseChecked, setPortugueseChecked, "Portuguese")}>                
              </input>

              <label className="languageCheckboxLabel" for="portugueseCheckbox"> Portuguese</label>
            </div>

            <div className="languageCheckboxDiv">
              <input className="languageCheckbox"
              type="checkbox" 
              name="spanishCheckbox" 
              checked={spanishChecked}
              onChange={() => languageCheckHandler(spanishChecked, setSpanishChecked, "Spanish")}>               
              </input>

              <label className="languageCheckboxLabel" for="spanishCheckbox"> Spanish</label>
            </div>

          </div> {/*Language Filter Checkboxes Div*/}
          
          <button className="clearSelectionsButton" onClick={() => clearLanguageSelections()}>Clear Selections</button>
          
        </div> {/*Language Filter Div*/}

        <div className="genreFilter">

          <h2 className="genreFilterLabel">Genre</h2>
          <div className="genreFilterCheckboxes">

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="comingOfAgeCheckbox"
                checked={comingOfAgeChecked}
                onChange={() => genreCheckHandler(comingOfAgeChecked, setComingOfAgeChecked, "Coming-of-Age")}>                
                </input>
                
                <label className="genreCheckboxLabel" for="comingOfAgeCheckbox"> Coming-of-Age</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="crimeCheckbox"
                checked={crimeChecked}
                onChange={() => genreCheckHandler(crimeChecked, setCrimeChecked, "Crime")}>
                </input>

                <label className="genreCheckboxLabel" for="crimeCheckbox"> Crime</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="familySagaCheckbox"
                checked={familySagaChecked}
                onChange={() => genreCheckHandler(familySagaChecked, setFamilySagaChecked, "Family Saga")}>                
                </input>

                <label className="genreCheckboxLabel" for="familySagaCheckbox"> Family Saga</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="fantasyCheckbox"
                checked={fantasyChecked}
                onChange={() => genreCheckHandler(fantasyChecked, setFantasyChecked, "Fantasy")}>                 
                </input>

                <label className="genreCheckboxLabel" for="fantasyCheckbox"> Fantasy</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="historicalFictionCheckbox"
                checked={historicalFictionChecked}
                onChange={() => genreCheckHandler(historicalFictionChecked, setHistoricalFictionChecked, "Historical Fiction")}>                 
                </input>

                <label className="genreCheckboxLabel" for="historicalFictionCheckbox"> Historical Fiction</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="mysteryCheckbox"
                checked={mysteryChecked}
                onChange={() => genreCheckHandler(mysteryChecked, setMysteryChecked, "Mystery")}>                
                </input>

                <label className="genreCheckboxLabel" for="mysteryCheckbox"> Mystery</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="satireCheckbox"
                checked={satireChecked}
                onChange={() => genreCheckHandler(satireChecked, setSatireChecked, "Satire")}>
                </input>

                <label className="genreCheckboxLabel" for="satireCheckbox"> Satire</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="scienceFictionCheckbox"
                checked={scienceFictionChecked}
                onChange={() => genreCheckHandler(scienceFictionChecked, setScienceFictionChecked, "Science Fiction")}></input>

                <label className="genreCheckboxLabel" for="scienceFictionCheckbox"> Science Fiction</label>
            </div>

          </div> {/*Genre Filter Checkboxes Div*/}

          <button className="clearSelectionsButton" onClick={() =>clearGenreSelections()}>Clear Selections</button>

        </div> {/*Genre Filter Div*/}

        <div className="sortingDiv">
          <h2 className="sortingDropdownLabel">Sort By:</h2>
          
          <select className="sortingOptions" name="sortingOptions" id="sortingOptions">
            <option value="default">Default</option>
            <option value="price">Price</option>
          </select>
          <button className="sortByButton" onClick={() => sortHandler()}>Submit</button>
        </div>
        
         
      </div>

      <div className="bookCards">

        {bookArray.map((item, index) => ( 
            <BookItem
              index={index}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              show_language={item.show_language}
              show_genre={item.show_genre}
              cartPrice={cartPrice}
              addToCart={addToCart}
            />
        ))}

      </div> 

      <div className="cartDiv">
        <h2 className="cartLabel">Cart</h2>

        {cartArray.map((item, index) => ( 
          <CartItem
            item={item}
            name={item.name}
            price={item.price}
            number_in_cart={item.number_in_cart}
            show_in_cart={item.show_in_cart}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            />
        ))}

        <h3 className="cartPrice"> Total Price: ${Number(cartPrice.toFixed(2))} </h3>
      </div>

    </div>
  );
}

export default App;
