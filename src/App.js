import { FoodBox } from "./Components/FoodBox";
import { useState, useEffect } from "react";
import foods from './foods.json';
import axios from "axios";
import { AddFood } from "./Components/AddFood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
function App() {
  /* const [food, setFood] = useState([]);

  useEffect(() => {
    async function fetchFood() {
      try {
        const result = await axios.get(
          "https://ironrest.herokuapp.com/foods"
        );
        setFood([...result.data]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFood();
  }, []); */
  
  return(

<BrowserRouter>
     
     
      {foods.map((currentFood, index) => {
          return (
            <FoodBox
              name={currentFood.name}
              calories={currentFood.calories}
              image={currentFood.image}
            />
          );
        })}
        <Routes>
          <Route path="/comidas" element={<AddFood/>}/>

          

        </Routes>
 </BrowserRouter>  
  )
  
  }

export default App;
