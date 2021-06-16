import React, {useEffect, useState, useRef} from 'react';
import '../Styles/Pinterest.css';

export default function Pinterest () {

    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [sliceNum, setSliceNum] = useState(0);
    const [doneSlicing, setDoneSlicing] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const getData = () => {
      console.log("fetching")
        fetch('nyc_ttp_pins.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setAllItems(myJson);
            let slicedMyJson = myJson.slice(sliceNum, sliceNum + 10);
            if (sliceNum >= myJson.length) setDoneSlicing(true);
            setItems(prevItems => [...prevItems, ...slicedMyJson]);
            setLoading(false);
          });
      }
      useEffect(()=>{
        getData();
      },[sliceNum])

      const element = useRef()

      useEffect(() => {
        if (loading || doneSlicing) return;
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 1.0
        }
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            console.log("Visible")
            setSliceNum((prevSliceNum) => prevSliceNum + 10);
          }
        }, options)
        if (element.current) observer.observe(element.current);
      }, [loading, doneSlicing]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

      const pinterestItems = items.map((item) => {
          return (
            <div className="card">
                {/* <img src={item.images["236x"].url} alt={item.pin_join.visual_annotation[getRandomInt(item.pin_join.visual_annotation.length)]}/> */}
                <div>
                {item.title !== "" ? item.title : "Cat Image"}
                </div>
                <p>//</p>
            </div>
          )
      })

      return (
          <>
            <div>{pinterestItems}</div>
            <div ref={element}>{loading && "Loading..."}</div>
          </>
      )
}