import React, {useState, useEffect} from 'react';
import sampleData from './sample-data';
import Pin from './pin';
import './map.css';
  
function Nearmap() {
const[selectedPin, setSelectedPin] = useState('');
const[data, setData] = useState([]);  

useEffect(()=>{
    setData(sampleData);
},[]);


const handleClick = (event, location) => {event.preventDefault(); setSelectedPin(prevSelectedPin => prevSelectedPin == location.name?'':location.name)};

const mapStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "/image/background.jpg"})`,  
 };

return (  
    <div className="map-container" style={mapStyle} >
        {data.map((location) =>        
          (<Pin pinDetails= {location} handleClick = {handleClick} isSelected = {selectedPin === location.name}></Pin>)
        )}
    </div>   
);
}

export default Nearmap;