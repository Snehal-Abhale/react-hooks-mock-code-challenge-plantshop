import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants]= useState([]);
  const [search, setSearch]= useState("");

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
  }, [])

  function onhandleFormSubmit(newPlantObj)
  {
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers:{
      "Content-Type": "application/json"
    },
      body: JSON.stringify(newPlantObj)
    })
    .then(response => response.json())
    .then(newPlant=> setPlants([...plants, newPlant]))
  }
  const filteredPlants= plants.filter(plant=> plant.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <main>
      <NewPlantForm onhandleFormSubmit={onhandleFormSubmit}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
