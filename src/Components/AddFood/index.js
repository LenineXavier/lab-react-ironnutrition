import { useState } from "react";
import axios from "axios";

export function AddFood(){
    const [form, setForm] = useState({
        name: "",
        calories: null,
        image: "",
        quantity: null,
        
      });

      function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
        for (let key in form) {
          if (!form[key]) {
            window.alert(`Gentileza preencher o campo ${key} corretamente`);
            return;
          }
        }
    
        console.log("Nao caiu no if");
        axios.post("https://ironrest.herokuapp.com/catchapet", form);
      }
    
    return(

        <form onSubmit={handleSubmit}>
        <label htmlFor="foodName">Comida:</label>
        <input
          id="foodName"
          placeholder="Comida"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <p>Calorias:</p>
        <label htmlFor="calories">Calorias:</label>
      <input
        id="calories"
        type="number"
        name="calories"
        onChange={handleChange}
        value={form.calories}
      />
        <p>Quantidade:</p>
        <label htmlFor="quantity">Quantidade:</label>
      <input
        id="calories"
        type="number"
        name="calories"
        onChange={handleChange}
        value={form.calories}
        />
        <label htmlFor="cat">Gato</label>
        <input
          id="cat"
          name="species"
          value="Cat"
          type="radio"
          onChange={handleChange}
        />
        
        </form>
    )

}