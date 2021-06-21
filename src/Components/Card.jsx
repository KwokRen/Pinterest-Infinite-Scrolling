import React, {useState} from 'react';

export default function Card ({item}) {

    const [displayTitle, setDisplayTitle] = useState(false);
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let background = item.images["236x"].url
    let title = item.title.charAt(0).toUpperCase() + item.title.slice(1);
    let username = item.pinner.username;
    
    return (
        <div className="card">
                <div onMouseEnter={() => setDisplayTitle(true)} onMouseLeave={() => setDisplayTitle(false)}>
                <img src={background} alt={item.pin_join.visual_annotation[getRandomInt(item.pin_join.visual_annotation.length)]} className={displayTitle ? "show" : null}/>
                {displayTitle && 
                <div className="title">
                 {item.title !== "" ? title : "Cat Image"}
                 </div>}
                </div> 
                {username ? <div style={{fontWeight: 'bold', textAlign: 'left'}}>
                   {username}
                </div> :
                null}
        </div>
    )

}
