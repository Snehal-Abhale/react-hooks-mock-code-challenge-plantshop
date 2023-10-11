import React, {useState} from "react";

function NewPlantForm({onhandleFormSubmit}) {
  const[newPlant, setNewPlant] = useState({
    name:"",
    image:"",
    price: ""
  })

  function onChangehandle(event){
    setNewPlant({...newPlant, [event.target.name]: event.target.value})
  }

  function onFormSubmit(event)
  {
    event.preventDefault();
    const newObj={
      name: newPlant.name,
      image: newPlant.image,
      price: newPlant.price
    }
    onhandleFormSubmit(newObj);
    setNewPlant( {name:"",
    image:"",
    price: ""})
     
  }
  
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={onChangehandle}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={onChangehandle}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={onChangehandle}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
