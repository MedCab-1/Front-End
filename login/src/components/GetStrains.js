import React, { useEffect, useState } from "react";
import axios from "axios";
import StrainCard from "./StrainCard";

export default function CharacterList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://med-cabinet-1.herokuapp.com/strain')
        .then(response => {
          console.log('flag',response.data)
          setData(response.data.results)
        })
        .catch(error => {
          console.log('flag',error)
        })
    
  }, []);
  
  return (
    <section className="character-list">
      {data.map(char => (
        <StrainCard key={char} char={char} />
      ))}
    </section>
  )
  }
