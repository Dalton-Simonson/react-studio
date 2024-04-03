import "./App.css";
import { useState } from "react";
import bookData from "./assets/book-data.json"


import BookItem from "./components/BookItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
// bakeryData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });
/* ############################################################## */

bookData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image
})

function App() {
  const cartItems = []
  const [cartPrice, setCartPrice] = useState(0)
  const addToCart = (newItemPrice) => {setCartPrice(cartPrice + newItemPrice)}

  // Language Hooks
  const [chineseChecked, setChineseChecked] = useState(0)
  const [englishChecked, setEnglishChecked] = useState(0)
  const [frenchChecked, setFrenchChecked] = useState(0)
  const [portugueseChecked, setPortugueseChecked] = useState(0)
  const [spanishChecked, setSpanishChecked] = useState(0)

  // Genre Hooks
  const[comingOfAgeChecked, setComingOfAgeChecked] = useState(0)
  const[crimeChecked, setCrimeChecked] = useState(0)
  const[familySagaChecked, setFamilySagaChecked] = useState(0)
  const[fantasyChecked, setFantasyChecked] = useState(0)
  const[historicalFictionChecked, setHistoricalFictionChecked] = useState(0)
  const[mysteryChecked, setMysteryChecked] = useState(0)
  const[satireChecked, setSatireChecked] = useState(0)
  const[scienceFictionChecked, setScienceFictionChecked] = useState(0)

  const clearLanguageSelections = () => {
    setChineseChecked(0)
    setEnglishChecked(0)
    setFrenchChecked(0)
    setPortugueseChecked(0)
    setSpanishChecked(0)
  }

  const clearGenreSelections = () => {
    setComingOfAgeChecked(0)
    setCrimeChecked(0)
    setFamilySagaChecked(0)
    setFantasyChecked(0)
    setHistoricalFictionChecked(0)
    setMysteryChecked(0)
    setSatireChecked(0)
    setScienceFictionChecked(0)
  }

  const checkHandler = (isChecked, setState) => {
    setState(!isChecked)
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
                onChange={() => checkHandler(chineseChecked, setChineseChecked)}>
                </input>

                <label className="languageCheckboxLabel" for="chineseCheckbox"> Chinese</label>
            </div>

            <div className="languageCheckboxDiv">
              <input className="languageCheckbox" 
              type="checkbox" 
              name="englishCheckbox" 
              checked={englishChecked}
              onChange={() => checkHandler(englishChecked, setEnglishChecked)}>
              </input>

              <label className="languageCheckboxLabel" for="englishCheckbox"> English</label>
            </div>

            <div className="languageCheckboxDiv">
              <input className="languageCheckbox"
              type="checkbox"
              name="frenchCheckbox"
              checked={frenchChecked}
              onChange={() => checkHandler(frenchChecked, setFrenchChecked)}>
              </input>
              
              <label className="languageCheckboxLabel" for="frenchCheckbox"> French</label>
            </div>
          

            <div className="languageCheckboxDiv">
              <input className="languageCheckbox"
              type="checkbox"
              name="portugueseCheckbox"
              checked={portugueseChecked}
              onChange={() => checkHandler(portugueseChecked, setPortugueseChecked)}>                
              </input>

              <label className="languageCheckboxLabel" for="portugueseCheckbox"> Portuguese</label>
            </div>

            <div className="languageCheckboxDiv">
              <input className="languageCheckbox"
              type="checkbox" 
              name="spanishCheckbox" 
              checked={spanishChecked}
              onChange={() => checkHandler(spanishChecked, setSpanishChecked)}>               
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
                onChange={() => checkHandler(comingOfAgeChecked, setComingOfAgeChecked)}>                
                </input>
                
                <label className="genreCheckboxLabel" for="comingOfAgeCheckbox"> Coming-of-Age</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="crimeCheckbox"
                checked={crimeChecked}
                onChange={() => checkHandler(crimeChecked, setCrimeChecked)}>
                </input>

                <label className="genreCheckboxLabel" for="crimeCheckbox"> Crime</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="familySagaCheckbox"
                checked={familySagaChecked}
                onChange={() => checkHandler(familySagaChecked, setFamilySagaChecked)}>                
                </input>

                <label className="genreCheckboxLabel" for="familySagaCheckbox"> Family Saga</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="fantasyCheckbox"
                checked={fantasyChecked}
                onChange={() => checkHandler(fantasyChecked, setFantasyChecked)}>                 
                </input>

                <label className="genreCheckboxLabel" for="fantasyCheckbox"> Fantasy</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="historicalFictionCheckbox"
                checked={historicalFictionChecked}
                onChange={() => checkHandler(historicalFictionChecked, setHistoricalFictionChecked)}>                 
                </input>

                <label className="genreCheckboxLabel" for="historicalFictionCheckbox"> Historical Fiction</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="mysteryCheckbox"
                checked={mysteryChecked}
                onChange={() => checkHandler(mysteryChecked, setMysteryChecked)}>                
                </input>

                <label className="genreCheckboxLabel" for="mysteryCheckbox"> Mystery</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="satireCheckbox"
                checked={satireChecked}
                onChange={() => checkHandler(satireChecked, setSatireChecked)}>
                </input>

                <label className="genreCheckboxLabel" for="satireCheckbox"> Satire</label>
            </div>

            <div className="genreCheckboxDiv">
                <input className="genreCheckbox" 
                type="checkbox" 
                name="scienceFictionCheckbox"
                checked={scienceFictionChecked}
                onChange={() => checkHandler(scienceFictionChecked, setScienceFictionChecked)}></input>

                <label className="genreCheckboxLabel" for="scienceFictionCheckbox"> Science Fiction</label>
            </div>

          </div>

          <button className="clearSelectionsButton" onClick={() =>clearGenreSelections()}>Clear Selections</button>

        </div>
         
      </div>

      <div className="bookCards">

        {bookData.map((item, index) => ( 
            <BookItem
              index={index}
              name={item.name}
              image={item.image}
              price={item.price}
              cartPrice={cartPrice}
              addToCart={addToCart}
            />
        ))}

      </div> 

      <h2>Cart</h2>
      Price: {cartPrice}

    </div>
  );
}

export default App;
