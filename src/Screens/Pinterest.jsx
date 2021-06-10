import React, {useEffect, useState} from 'react'

export default function Pinterest () {

    const [items, setItems] = useState([])
    
    const getData = () => {
        fetch('nyc_ttp_pins.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setItems(myJson);
          });
      }
      useEffect(()=>{
        getData();
      },[])

      const pinterestItems = items.map((item) => {
          return (
            <>
            <img src={item.images["236x"].url}/>
            <div key={item.id}>
              {item.title}
            </div>
            </>
          )
      })

      return (
          <>
            <div>{pinterestItems}</div>
          </>
      )
}